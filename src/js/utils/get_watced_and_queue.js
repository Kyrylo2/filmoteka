import axios from 'axios';
import { filmsMainContainer } from '../utils/refs';

const refs = {
  watchedButton: document.getElementById('watchedButton'),
  queueButton: document.getElementById('queueButton'),
  movieContainer: document.querySelector('.films__container'),
};

refs.watchedButton.addEventListener('click', onWatchedButtonClick);
refs.queueButton.addEventListener('click', onQueueButton);

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

  reverseArray() {
    this.movieArray.reverse();
  },

  calcTotalPages() {
    this.totalPages = Math.ceil(
      this.movieArray.length / this.numberResultsPerPage
    );
    console.log(this.totalPages);
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
    console.log(subarray);
    this.pagesData = subarray.reduce((acc, el, index) => {
      const key = `page${index + 1}`;
      acc[key] = el;
      return acc;
    }, {});
  },

  renderWatchedMovies() {
    const page = `page${this.page}`;
    console.log(page);
    console.log(this.pagesData[page]);

    getMyMovies(this.pagesData[page]);
  },

  renderQueueMovies() {},
};

preload();

function preload() {
  myLibrary.getWatchedMovies();
  myLibrary.reverseArray();
  myLibrary.calcTotalPages();
  myLibrary.getWatchedMovies(this.movieArray);
  myLibrary.calcPagesData();
  myLibrary.renderWatchedMovies();
  console.log(myLibrary);
}

myLibrary.getWatchedMovies();

function onWatchedButtonClick() {
  // запит з бази фільмів,які продивився в ідеалі отримувати просто id
  myLibrary.getWatchedMovies();
  myLibrary.reverseArray();
  myLibrary.calcTotalPages();
  myLibrary.getWatchedMovies(this.movieArray);
  myLibrary.calcPagesData();
  console.log(myLibrary);
}

function onQueueButton() {
  // запит з бази фільмів, які в черзі в ідеалі отримувати просто id
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
  console.log(movies);

  const template = renderMovies(movies);
  console.log(filmsMainContainer);
  filmsMainContainer.innerHTML = template;
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
