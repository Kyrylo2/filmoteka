import axios from 'axios';
import { renderMovies } from './js/utils/render';

console.log('Naumenko Mykola');

const API_KEY = '6251e629c61bceaf56a3d45f05637256';
const BASE_URL = 'https://api.themoviedb.org/3';

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

const apiInstanceMovie = axios.create({
  baseUrl: `${BASE_URL}`,
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

function onWatchedButtonClick() {
  // запит з бази фільмів,які продивився в ідеалі отримувати просто id
  const emptyArray = [];
    const movieArray = [76600, 315162, 593643, 661374, 436270, 536554, 19995];

    function getMyMovies(movieArray);
}

function onQueueButton() {
  // запит з бази фільмів, які в черзі в ідеалі отримувати просто id
}

async function getMyMovies(array) {
    const arrayOfPromises = array.map(async (el) => { try {
        const res = await apiInstanceMovie.get(`/movie/${el}`, config)
        console.log(res);
        return res
    } catch (error) {
        console.log(error);

        }
    })

    console.log(arrayOfPromises);

}

  // 1. Створюємо масив промісів
//   const arrayOfPromises = userIds.map(async userId => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   // 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
//   const users = await Promise.all(arrayOfPromises);
//   console.log(users);
// };
