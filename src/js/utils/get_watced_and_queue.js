import axios from 'axios';
import { renderMovies } from './js/utils/render';

console.log('Naumenko Mykola');

const API_KEY = '6251e629c61bceaf56a3d45f05637256';
const BASE_URL = 'https://api.themoviedb.org/3';

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

const apiInstanceMovie = axios.create({
  baseUrl: 'https://api.themoviedb.org/3',
});

const config = {
  params: {
    api_key: API_KEY,
  },
};

const refs = {
  watchedButton: document.getElementById(''),
  queueButton: document.getElementById(''),
};

refs.watchedButton.addEventListener('click', onWatchedButtonClick);

refs.queueButton.addEventListener('click', onQueueButton);

onWatchedButtonClick();

function onWatchedButtonClick() {
  // запит з бази фільмів,які продивився в ідеалі отримувати просто id
  const emptyArray = [];
  const movieArray = [76600, 315162, 593643, 661374, 436270, 536554, 19995];

  getMyMovies(movieArray);
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

  console.log(arrayOfPromises);

  const movies = await Promise.all(arrayOfPromises);
  console.log(movies);
}
