import axios from 'axios';
// import { createMarkup } from '../../index';
import { renderMovies } from './render';
import { renderFullInfo } from './render';
import { filmsMainContainer, backdrop } from '../utils/refs';
import { modal } from '../utils/refs';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { onBtnClose, onBackdropClose, onEcsClose } from '../..';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { openMenuSignIn } from '..//authentication-firebase';
import { doc } from 'firebase/firestore';
import { async } from '@firebase/util';

const API_KEY = '48efdd88d1650cc055b0f5a157a41228';

class MoviesApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalItems;
    this.apiFirebase;
    this.sortBy = undefined;
    this.choosedGenres = undefined;
    this.year = undefined;
    this.filmId;
  }

  get PaginationOptions() {
    const newLocal =
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      // '<?xml version="1.0" ?>' +
      '</span>';
    const opt = {
      // below default value of options
      totalItems: this.totalItems,
      itemsPerPage: 20,
      visiblePages: 5,
      page: this.page,
      currentThemeNumbers:
        localStorage.getItem('user-theme') === 'dark'
          ? 'tui-page-btn--change-color'
          : '',
      currentThemeArrows:
        localStorage.getItem('user-theme') === 'dark' ? 'tui-el-change' : '',
      centerAlign: true,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn a {{currentThemeNumbers}}">{{page}}</a>',
        currentPage:
          '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        // moveButton:
        //   '<a href="#" class="tui-page-btn tui-{{type}}">' +
        //   '<span class="tui-ico-{{type}}">></span>' +
        //   '</a>',
        // disabledMoveButton: newLocal,
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip {{currentThemeArrows}}">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    };

    return opt;
  }

  // <?xml version="1.0" ?><svg fill="#000000" width="800px" height="800px" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M214.78,478l-20.67-21.57L403.27,256,194.11,55.57,214.78,34,446.46,256ZM317.89,256,86.22,34,65.54,55.57,274.7,256,65.54,456.43,86.22,478Z"/></svg>

  async fetchMovies() {
    Loading.circle({ svgColor: 'red' });
    try {
      const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
      const response = await axios.get(BASE_URL, {
        params: {
          api_key: API_KEY,
          query: this.searchQuery,
          page: this.page,
          include_adult: false,
        },
      });

      this.totalItems = response.data.total_results;
      // //  console.log(this.totalItems);

      if (this.totalItems === 0) {
        return;
      }

      let movies = response.data.results;

      // this.incrementPage();
      return movies;
    } catch (e) {
      Notify.failure('Oups! Something went wrong');
    } finally {
      Loading.remove();
    }
  }

  async getGenres() {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list',
        {
          params: {
            api_key: API_KEY,
          },
        }
      );
      const allGenres = response.data.genres;
      localStorage.setItem('genres', JSON.stringify(allGenres));
    } catch (e) {
      Notify.failure('Oups! Something went wrong');
    }
  }

  async getTrendMovies() {
    Loading.circle({ svgColor: 'red' });
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day',
        {
          params: {
            api_key: API_KEY,
            page: this.page,
          },
        }
      );
      const currentTheme = localStorage.getItem('user-theme');

      this.totalItems = response.data.total_results;
      // createMarkup(renderMovies(response.data.results));
      filmsMainContainer.innerHTML = renderMovies(
        response.data.results,
        currentTheme
      );

      document.querySelector(
        'h1'
      ).innerHTML = `Trending movies, you on page - <span>${this.page}</span>`;
      document.querySelector('h1').classList.remove('visually-hidden');

      const pagination = new Pagination(
        'tui-pagination-container',
        this.PaginationOptions
      );

      pagination.on('beforeMove', e => {
        this.page = e.page;
        this.getTrendMovies();

        document.querySelector(
          'h1'
        ).innerHTML = `Trending movies, you on page - <span>${this.page}</span>`;
        document.querySelector('h1').classList.remove('visually-hidden');
      });
      pagination.on('afterMove', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });

      pagination.on('afterMove', () => {});
    } catch (e) {
      Notify.failure('Oups! Something went wrong');
      console.log(e);
    } finally {
      Loading.remove();
    }
  }
  async getFullInfo(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    // отримаэмо данні з API трейлеру фільму. Використовуємо всередині this.filmId який кладемо в конструктор по кліку на фільм в index.js
    const trailerFilmUrl = await this.getFilmTrailer();

    // перевіряємо чи користувач залогінен
    const isSignIn = await this.apiFirebase.isUserSignedIn();

    const isWatched = await this.apiFirebase.isSavedFromWatched(id); // Якщо False - фільм НЕ додан в список Watched

    const isQueue = await this.apiFirebase.isSavedFromQueue(id); // Якщо False - фільм НЕ додан в список Queue

    // --- РЕНДЕР МОДАЛКИ
    modal.innerHTML = renderFullInfo(
      response.data,
      id,
      isWatched,
      isQueue,
      isSignIn,
      trailerFilmUrl
    );

    if (!isSignIn) {
      document.querySelector('.buttons-flex').style.flexDirection = 'column';
      document.querySelector('.buttons-flex').style.alignItems = 'center';
    }

    // Події на кнопку закрить модалку
    document
      .querySelector('.modal-window .modal-cross')
      .addEventListener('click', onBtnClose);
    backdrop.addEventListener('click', onBackdropClose);
    document.body.addEventListener('keyup', onEcsClose);
    // ----------------

    // Якщо залогінен - вішаємо потрібні слухачі на кнопки
    if (isSignIn) {
      // Перевіряемо і вішаємо слухач на кнопку Watch

      document
        .querySelector('.button-modal-watch')
        .addEventListener('click', async e => {
          const isWatched = await this.apiFirebase.isSavedFromWatched(id);

          //  console.log(isWatched);

          const movieId = e.target
            .closest('.buttons-flex')
            .getAttribute('data-id');

          const filmName = document.querySelector('.modal-h2').textContent;

          //  console.log(filmName);

          isWatched
            ? (document.querySelector('.button-modal-watch').textContent =
                'ADD TO WATCHED')
            : (document.querySelector('.button-modal-watch').textContent =
                'DELETE FROM WATCHED');

          return isWatched
            ? await this.apiFirebase.deleteFromWatched(movieId, filmName)
            : await this.apiFirebase.addToWatched(movieId, filmName);
        });

      // Перевіряемо і вішаємо слухач на кнопку Queue
      document
        .querySelector('.button-modal-queue')
        .addEventListener('click', async e => {
          const isQueue = await this.apiFirebase.isSavedFromQueue(id);

          //  console.log(isQueue);

          const movieId = e.target
            .closest('.buttons-flex')
            .getAttribute('data-id');

          const filmName = document.querySelector('.modal-h2').textContent;

          //  console.log(filmName);

          isQueue
            ? (document.querySelector('.button-modal-queue').textContent =
                'ADD TO QUEUE')
            : (document.querySelector('.button-modal-queue').textContent =
                'DELETE FROM QUEUE');

          return isQueue
            ? await this.apiFirebase.deleteFromQueue(movieId, filmName)
            : await this.apiFirebase.addToQueue(movieId, filmName);
        });
    }

    // якщо не залогінен - вішаємо подію відкриття модалки логіну
    if (!isSignIn) {
      document
        .querySelector('.button-modal-signIn')
        .addEventListener('click', () => {
          //  console.log('Відкрити модалку!');
          // Тут треба выдкривати модалку Входу по кліку!!!
          openMenuSignIn();
        });
    }
  }

  async getFilmTrailer() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.filmId}/videos`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    //Видаляємо з масива все що не відповідає вимогам + сортую від найновішого до найстарішого
    const trailerArr = response.data.results
      .filter(
        filmData =>
          (filmData.name =
            'Oficial trailer' &&
            filmData.official === true &&
            filmData.type === 'Trailer')
      )
      .sort(
        (filmDataFirst, filmDataSecond) =>
          new Date(filmDataFirst.published_at).getTime() +
          new Date(filmDataSecond.published_at).getTime()
      );

    return trailerArr.length === 0 ? false : trailerArr[0].key;
  }

  // ks;
  // async addToWatch(id) {
  //   const result = await this.apiFirebase.addToWatched(id);
  //   //  console.log(result);
  // }

  // async removeFromWatch(id) {
  //   const result = await this.apiFirebase.deleteFromWatched(id);
  //   //  console.log(result);
  // }

  // async addToQueue(e) {
  //   const result = await this.apiFirebase.addToQueue(456);
  //   //  console.log(result);
  // }

  async getSortedMovies() {
    Loading.circle({ svgColor: 'red' });
    try {
      const API_KEY = '48efdd88d1650cc055b0f5a157a41228';
      const response = await axios.get(
        'https://api.themoviedb.org/3/discover/movie',
        {
          params: {
            api_key: API_KEY,
            page: this.page,
            sort_by: this.sortBy ? this.sortBy : undefined,
            with_genres: this.choosedGenres ? this.choosedGenres : undefined,
            primary_release_year: this.year ? this.year : undefined,
            include_adult: false,
          },
        }
      );
      // ----------------------

      // Loading.circle({ svgColor: 'red' });
      // try {
      //   const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
      //   const response = await axios.get(BASE_URL, {
      //     params: {
      //       api_key: API_KEY,
      //       query: this.searchQuery,
      //       page: this.page,
      //       include_adult: false,
      //     },
      //   });

      //   this.totalItems = response.data.total_results;
      //   //  console.log(this.totalItems);

      //   if (this.totalItems === 0) {
      //     return;
      //     // Notify.failure("Sorry, we haven't found any movie.");
      //   }
      //   Notify.success(`Cool, we found more than ${this.totalItems} films!`);

      //   let movies = response.data.results;

      //   // this.incrementPage();
      //   return movies;

      // ----------------------
      //  console.log(response.data);

      this.totalItems = response.data.total_results;
      //  console.log(this.totalItems);

      if (this.totalItems === 0) {
        return;
        // Notify.failure("Sorry, we haven't found any movie.");
      }

      let movies = response.data;
      //  console.log(movies.results);
      return movies.results;
    } catch (e) {
      Notify.failure('Oups! Something went wrong');
    } finally {
      Loading.remove();
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get currentPage() {
    //  console.log(this.page);
    return this.page;
  }

  set currentPage(newPage) {
    this.page = newPage;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  /**
   * @param {number} NewTotalItems
   */
  set setTotalItems(NewTotalItems) {
    this.totalItems = NewTotalItems;
    //  console.log(this.totalItems);
  }
}
const moviesApiService = new MoviesApiServise();

export { moviesApiService };
