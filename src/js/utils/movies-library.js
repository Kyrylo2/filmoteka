import axios from 'axios';
import APIFirebase from '../api-firebase';
import { filmsMainContainer } from '../utils/refs';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from './get_watced_and_queue';

const API_KEY = '6251e629c61bceaf56a3d45f05637256';
const BASE_URL = 'https://api.themoviedb.org/3';

const apiInstanceMovie = axios.create({
  baseURL: BASE_URL,
});

const config = {
  params: {
    api_key: API_KEY,
  },
};

export default class MyLibrary {
  constructor() {
    this.page = 1;
    this.totalPages = null;
    this.numberResultsPerPage = 20;
    this.movieArray = [];
    this.pagesData = {};
    this.everythingIsLoaded = false;
    this.statusLibrary = null;
    this.gdunStatus = 'hidden';
  }

  async getWatchedMovies() {
    // TEST

    Loading.circle({ svgColor: 'red' });
    this.resetAll();
    try {
      this.movieArray = await this.apiFirebase.readWatched();
      filmsMainContainer.innerHTML = '';
      //  console.log(this.movieArray);
      return this.movieArray;
    } catch (error) {
      //  console.log(error);
    } finally {
      Loading.remove();
    }
    //

    // TEST
    // filmsMainContainer.innerHTML = '';

    // this.movieArray = [
    //   76600, 315162, 593643, 661374, 436270, 536554, 545611, 19995, 668482,
    //   555604, 804095, 76600, 315162, 593643, 661374, 436270, 536554, 545611,
    //   19995, 668482, 555604, 804095, 76600, 315162, 593643, 661374, 436270,
    //   536554, 545611, 19995, 668482, 555604, 804095, 76600, 315162, 593643,
    //   661374, 436270, 536554, 545611, 19995, 668482, 555604, 804095, 76600,
    //   315162, 593643, 661374, 436270, 536554, 545611, 19995, 668482, 555604,
    //   804095, 76600, 315162, 593643, 661374, 436270, 536554, 545611, 19995,
    //   668482, 555604, 804095, 76600, 315162, 593643, 661374, 436270, 536554,
    //   545611, 19995, 668482, 555604, 804095, 76600, 315162, 593643, 661374,
    //   436270, 536554, 545611, 19995, 668482, 555604, 804095, 76600, 315162,
    //   593643, 661374, 436270, 536554, 545611, 19995, 668482, 555604, 804095,
    // ];

    // return this.movieArray;
  }

  async getQueueMovies() {
    // TEST
    Loading.circle({ svgColor: 'red' });
    this.resetAll();
    try {
      this.movieArray = await this.apiFirebase.readQueue();
      filmsMainContainer.innerHTML = '';
      //  console.log(this.movieArray);
      return this.movieArray;
    } catch (error) {
      //  console.log(error);
    } finally {
      Loading.remove();
    }
    //

    // TEST
    // filmsMainContainer.innerHTML = '';

    // this.movieArray = [
    //   668482, 555604, 76600, 315162, 593643, 661374, 436270, 536554, 545611,
    //   19995, 668482, 555604, 804095, 76600, 315162, 593643, 661374, 436270,
    //   536554, 545611, 19995, 668482, 555604, 804095, 76600, 315162, 593643,
    //   661374, 436270, 536554, 545611, 19995, 668482, 555604, 804095, 76600,
    //   315162, 593643, 661374, 436270, 536554, 545611, 19995, 668482, 555604,
    //   804095, 76600, 315162, 593643,
    // ];

    // return this.movieArray;
  }

  async preload() {
    this.movieArray = await this.apiFirebase.readQueue();
    //  console.log('preload', this.movieArray);

    Loading.circle({ svgColor: 'red' });
    //  console.log('start');

    this.movieArray = await this.getQueueMovies();
    //  console.log(this.movieArray.length);
    if (this.movieArray.length !== 0) {
      refs.queueButton.classList.add('queueButton--active');
      this.statusLibrary = 'queue';
      this.renderMovies();
      return;
    }

    if (this.movieArray.length === 0) {
      await this.getWatchedMovies();
      // //  console.log('NO DATA');
      // return;
    }

    if (this.movieArray.length !== 0) {
      refs.watchedButton.classList.add('watchedButton--active');
      this.statusLibrary = 'watched';
      this.renderMovies();
      return;
    }
    //  console.log('NO DATA');

    //  console.log('finish');
  }

  reverseArray() {
    this.movieArray.reverse();
  }

  calcTotalPages() {
    this.totalPages = Math.ceil(
      this.movieArray.length / this.numberResultsPerPage
    );

    if (this.totalPages === 1) {
      this.everythingIsLoaded = true;
    }
  }

  calcPagesData() {
    const subarray = [];
    for (
      let i = 0;
      i < Math.ceil(this.movieArray.length / this.numberResultsPerPage);
      i += 1
    ) {
      subarray[i] = this.movieArray.slice(
        i * this.numberResultsPerPage,
        i * this.numberResultsPerPage + this.numberResultsPerPage
      );
    }
    this.pagesData = subarray.reduce((acc, el, index) => {
      const key = `page${index + 1}`;
      acc[key] = el;
      return acc;
    }, {});
    //  console.log(this.pagesData);
  }

  renderMovies() {
    if (this.movieArray.length === 0) {
      refs.gdun.classList.remove('visually-hidden');
      this.gdunStatus = 'visible';
      return;
    }
    if (this.gdunStatus === 'visible') {
      refs.gdun.classList.add('visually-hidden');
      this.gdunStatus = 'hidden';
    }
    this.reverseArray();
    this.calcTotalPages();
    this.calcPagesData();
    const page = `page${this.page}`;
    //  console.log(page);
    getMyMovies(this.pagesData[page]);
  }

  scrollRenderMovies() {
    //  console.log(this.pagesData);
    if (this.movieArray.length === 0) {
      //  console.log(this.movieArray);
      return;
    }
    const page = `page${this.page}`;
    //  console.log(page);
    getMyMovies(this.pagesData[page]);
  }

  resetAll() {
    this.page = 1;
    this.totalPages = null;
    this.movieArray = [];
    this.pagesData = {};
    this.everythingIsLoaded = false;
    // this.statusLibrary = null;
  }

  async closeModal() {
    //  console.log(this.statusLibrary);
    if (this.statusLibrary === 'queue') {
      const newArray = await this.apiFirebase.readQueue();
      console.log(newArray);
      const newReversedArray = [...newArray].reverse();
      // console.log(newReversedArray);
      // console.log(newReversedArray.join(''));
      // console.log(this.movieArray.join(''));
      // console.log(newReversedArray.join('') === this.movieArray.join(''));
      if (newReversedArray.join('') === this.movieArray.join('')) {
        console.log(newReversedArray.join('') === this.movieArray.join(''));
        return;
      }
      this.resetAll();
      await this.getQueueMovies();
      //  console.log(this);
      this.renderMovies();
      return;
    }

    if (this.statusLibrary === 'watched') {
      const newArray = await this.apiFirebase.readWatched();
      console.log(newArray);
      const newReversedArray = [...newArray].reverse();
      // console.log(newReversedArray);
      // console.log(newReversedArray.join(''));
      // console.log(this.movieArray.join(''));
      // console.log(newReversedArray.join('') === this.movieArray.join(''));
      if (newReversedArray.join('') === this.movieArray.join('')) {
        console.log(newReversedArray.join('') === this.movieArray.join(''));
        return;
      }
      this.resetAll();
      await this.getWatchedMovies();
      //  console.log(this);
      this.renderMovies();
      return;
    }
  }
}

async function getMyMovies(array) {
  //  console.log(array);
  try {
    const arrayOfPromises = array.map(async el => {
      const res = await apiInstanceMovie.get(`/movie/${el}`, config);
      return res.data;
    });

    const movies = await Promise.all(arrayOfPromises);

    const template = renderMovies(movies);

    filmsMainContainer.insertAdjacentHTML('beforeend', template);
  } catch (error) {
    //  console.log(error);
  }
}

// Рендеремо фільми

function renderMovies(movies, currentTheme) {
  return movies
    .map(movie => {
      return `<li class="films__item" data-id="${movie.id}">
  <a href="" class="films__wrapper">
    <div class="films__img-wrapper">
      <img
        class="films__img"
        ${isPoster(movie.poster_path)}
        alt="${movie.title}"
        loading="lazy"
        width='395' height='574'
      />
    </div>

    <div class="img__row">
            <p>${movie.vote_average}</p>
      <p>${Number.parseInt(movie.release_date)}</p>
    </div>

    <div class="films__info">
            <p class="films__name ${
              currentTheme === 'dark' ? 'films__name--color' : ''
            }">${movie.title}</p>

      <p class="films__description">${getGenres(movie.genres)}</p>
    </div>
  </a>
</li>`;
    })
    .join('');
}

function getGenres(genres) {
  if (genres.length <= 3) {
    return genres.map(el => el.name).join(', ');
  }

  const arrayOfGenres = genres.map(el => el.name);
  arrayOfGenres.splice(2, genres.length - 2, 'Other');
  return arrayOfGenres.join(', ');
}

function isPoster(poster) {
  return poster
    ? `src="https://image.tmdb.org/t/p/original${poster}"`
    : "src='./images/no-picture.png'";
}
