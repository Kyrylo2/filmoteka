import axios from 'axios';
// import { createMarkup } from '../../index';
import { renderMovies } from './render';
import { renderFullInfo } from './render';
import { filmsMainContainer } from '../utils/refs';
import { modal } from '../utils/refs';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class MoviesApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchMovies() {
    Loading.circle({ svgColor: 'red' });
    try {
      const API_KEY = '48efdd88d1650cc055b0f5a157a41228';
      const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
      const response = await axios.get(BASE_URL, {
        params: {
          api_key: API_KEY,
          query: this.searchQuery,
          page: this.page,
          include_adult: false,
        },
      });

      let movies = response.data;
      console.log(movies.results);

      this.incrementPage();
      return movies.results;
    } catch (e) {
      Notify.failure('Oups! Something went wrong');
    } finally {
      Loading.remove();
    }
  }

  async getGenres() {
    try {
      const API_KEY = '48efdd88d1650cc055b0f5a157a41228';
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
      const API_KEY = '48efdd88d1650cc055b0f5a157a41228';
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day',
        {
          params: {
            api_key: API_KEY,
          },
        }
      );
      console.log(response.data.results);
      // createMarkup(renderMovies(response.data.results));
      filmsMainContainer.innerHTML = renderMovies(response.data.results);
    } catch (e) {
      Notify.failure('Oups! Something went wrong');
    } finally {
      Loading.remove();
    }
  }
  async getFullInfo(id) {
    const API_KEY = '48efdd88d1650cc055b0f5a157a41228';
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    console.log(response.data);
    modal.innerHTML = renderFullInfo(response.data);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
const moviesApiService = new MoviesApiServise();

export { moviesApiService };
