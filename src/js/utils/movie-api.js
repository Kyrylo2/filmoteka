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

const API_KEY = '48efdd88d1650cc055b0f5a157a41228';

class MoviesApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalItems;
  }

  get PaginationOptions() {
    return {
      // below default value of options
      totalItems: this.totalItems,
      itemsPerPage: 20,
      visiblePages: 5,
      page: this.page,
      centerAlign: true,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage:
          '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    };
  }

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
      console.log(this.totalItems);

      if (this.totalItems === 0) {
        return;
        // Notify.failure("Sorry, we haven't found any movie.");
      }
      Notify.success(`Cool, we found more than ${this.totalItems} films!`);

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

      this.totalItems = response.data.total_results;
      // createMarkup(renderMovies(response.data.results));
      filmsMainContainer.innerHTML = renderMovies(response.data.results);

      const pagination = new Pagination(
        'tui-pagination-container',
        this.PaginationOptions
      );

      pagination.on('beforeMove', e => {
        this.page = e.page;
        this.getTrendMovies();
      });
    } catch (e) {
      Notify.failure('Oups! Something went wrong');
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

    modal.innerHTML = renderFullInfo(response.data, id);
    document
      .querySelector('.modal-cross')
      .addEventListener('click', onBtnClose);
    backdrop.addEventListener('click', onBackdropClose);
    document.body.addEventListener('keyup', onEcsClose);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get currentPage() {
    console.log(this.page);
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
    console.log(this.totalItems);
  }
}
const moviesApiService = new MoviesApiServise();

export { moviesApiService };
