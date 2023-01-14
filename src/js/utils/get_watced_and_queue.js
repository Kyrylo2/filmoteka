import axios from 'axios';
import throttle from 'lodash.throttle';
import { filmsMainContainer } from '../utils/refs';

const refs = {
  watchedButton: document.getElementById('watchedButton'),
  queueButton: document.getElementById('queueButton'),
};

refs.watchedButton.addEventListener('click', onWatchedButtonClick);
refs.queueButton.addEventListener('click', onQueueButton);
console.log(refs.watchedButton);
console.log(refs.queueButton);

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

const myLibrary = {
  page: 1,
  totalPages: null,
  numberResultsPerPage: 20,
  movieArray: [],
  pagesData: {},
  everythingIsLoaded: false,

  getWatchedMovies() {
    // запит idшніков з Firebase
    this.movieArray = [
      76600, 315162, 593643, 661374, 436270, 536554, 545611, 19995, 668482,
      555604, 804095, 76600, 315162, 593643, 661374, 436270, 536554, 545611,
      19995, 668482, 555604, 804095, 76600, 315162, 593643, 661374, 436270,
      536554, 545611, 19995, 668482, 555604, 804095, 76600, 315162, 593643,
      661374, 436270, 536554, 545611, 19995, 668482, 555604, 804095, 76600,
      315162, 593643, 661374, 436270, 536554, 545611, 19995, 668482, 555604,
      804095, 76600, 315162, 593643, 661374, 436270, 536554, 545611, 19995,
      668482, 555604, 804095, 76600, 315162, 593643, 661374, 436270, 536554,
      545611, 19995, 668482, 555604, 804095, 76600, 315162, 593643, 661374,
      436270, 536554, 545611, 19995, 668482, 555604, 804095, 76600, 315162,
      593643, 661374, 436270, 536554, 545611, 19995, 668482, 555604, 804095,
    ];
  },
  getQueueMovies() {
    // запит idшніков з Firebase
    this.movieArray = [
      // 668482, 555604, 76600, 315162, 593643, 661374, 436270, 536554, 545611,
      // 19995, 668482, 555604, 804095, 76600, 315162, 593643, 661374, 436270,
      // 536554, 545611, 19995, 668482, 555604, 804095, 76600, 315162, 593643,
      // 661374, 436270, 536554, 545611, 19995, 668482, 555604, 804095, 76600,
      // 315162, 593643, 661374, 436270, 536554, 545611, 19995, 668482, 555604,
      // 804095, 76600, 315162, 593643,
    ];
  },

  reverseArray() {
    this.movieArray.reverse();
  },

  calcTotalPages() {
    this.totalPages = Math.ceil(
      this.movieArray.length / this.numberResultsPerPage
    );
  },

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
  },

  renderMovies() {
    const page = `page${this.page}`;
    getMyMovies(this.pagesData[page]);
  },

  resetAll() {
    this.page = 1;
    this.totalPages = null;
    this.movieArray = [];
    this.pagesData = {};
    this.everythingIsLoaded = false;
  },
};

myLibrary.resetAll();
preload();

function preload() {
  myLibrary.getQueueMovies();
  console.log(myLibrary.movieArray.length);
  if (myLibrary.movieArray.length === 0) {
    myLibrary.getWatchedMovies();
  }
  myLibrary.reverseArray();
  myLibrary.calcTotalPages();
  myLibrary.calcPagesData();
  myLibrary.renderMovies();
}

// myLibrary.getWatchedMovies();

function onWatchedButtonClick() {
  // запит з бази фільмів,які продивився в ідеалі отримувати просто id
  myLibrary.resetAll();
  myLibrary.getWatchedMovies();
  myLibrary.reverseArray();
  myLibrary.calcTotalPages();
  myLibrary.calcPagesData();
  filmsMainContainer.innerHTML = '';
  myLibrary.renderMovies();
}

function onQueueButton() {
  // запит з бази фільмів, які в черзі в ідеалі отримувати просто id
  myLibrary.getQueueMovies();
  myLibrary.reverseArray();
  myLibrary.calcTotalPages();
  myLibrary.calcPagesData();
  filmsMainContainer.innerHTML = '';
  myLibrary.renderMovies();
}

async function getMyMovies(array) {
  const arrayOfPromises = array.map(async el => {
    try {
      const res = await apiInstanceMovie.get(`/movie/${el}`, config);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  const movies = await Promise.all(arrayOfPromises);

  const template = renderMovies(movies);

  filmsMainContainer.insertAdjacentHTML('beforeend', template);
}

// Рендеремо фільми

function renderMovies(movies) {
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
            <p class="films__name">${movie.title}</p>

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

// Infinite scroll

window.addEventListener(
  'scroll',
  throttle(() => {
    if (myLibrary.everythingIsLoaded) return;
    // console.log('scrollY:', window.scrollY); //scrolled from top
    // console.log('innerHeight:', window.innerHeight); //visible part of screen
    // console.log('scrollHeigth:', document.documentElement.scrollHeight);
    // console.log(
    //   document.documentElement.scrollHeight -
    //     (window.scrollY + window.innerHeight)
    // );

    if (
      document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight) <=
      400
      // window.scrollY + window.innerHeight >=
      // document.documentElement.scrollHeight
    ) {
      myLibrary.page += 1;
      myLibrary.everythingIsLoaded = myLibrary.page >= myLibrary.totalPages;
      myLibrary.renderMovies();
      console.log(myLibrary);
    }
  }, 400)
);
