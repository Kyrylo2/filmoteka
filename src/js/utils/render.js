function renderMovies(movies, currentTheme) {
  return movies
    .map(movie => {
      return `<li class="films__item" data-id="${movie.id}">
  <a href="" class="films__wrapper">
    <div class="films__img-wrapper">

    ${
      movie.poster_path
        ? `<picture class="films__img">
    <source media="(max-width: 480px)" srcset="https://image.tmdb.org/t/p/w342${movie.poster_path}">
    <source media="(max-width: 768px)" srcset="https://image.tmdb.org/t/p/w500${movie.poster_path}">
    <source media="(max-width: 1280px)" srcset="https://image.tmdb.org/t/p/w780${movie.poster_path}">
    <img class="films__img" src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="${movie.title}"  width='395px' height='574px' loading="lazy">
  </picture>`
        : `<img     class="films__img"   src="${require('../../images/no-picture.png')}" alt="${
            movie.title
          }"  width='395px' height='574px' loading="lazy"  width='395px' height='574px' />`
    }
       
    </div>

    <div class="img__row">
            <p>${movie.vote_average}</p>
      <p>${
        movie.release_date !== '' ? Number.parseInt(movie.release_date) : ' '
      }</p>
    </div>

    <div class="films__info">
            <p class="films__name ${
              currentTheme === 'dark' ? 'films__name--color' : ''
            }">${movie.title}</p>

      <p class="films__description">${showGenres(movie.genre_ids)}</p>
    </div>
  </a>
</li>`;
    })
    .join('');
}

export { renderMovies, renderFullInfo };

function showGenres(genres) {
  const parsedGenres = JSON.parse(localStorage.getItem('genres'));
  parsedGenres.map(el => {
    if (genres.includes(el.id)) {
      genres.push(el.name);
    }
  });
  genres.splice(0, genres.length / 2);
  if (genres.length > 3) {
    genres.splice(2, genres.length, 'Other');
    // //  console.log(genres);
  }
  return genres.join(', ');
}

function isPoster(poster) {
  return poster
    ? // ? `src="https://image.tmdb.org/t/p/original${poster}"`
      `${poster}`
    : `src=${require('../../images/no-picture.png')}`;
}

function renderFullInfo(
  movie,
  id,
  isWatched = false,
  isQueue = false,
  isSignIn,
  trailerPath = false,
  currentTheme = localStorage.getItem('user-theme')
) {
  //  console.log(movie);
  return `<div class="modal-window ${
    currentTheme === 'dark' ? 'background-black' : ''
  }" id="${id}">
    <div class="modal-img-flex">
    <picture class="modal-img">
          <source media="(max-width: 480px)" srcset="https://image.tmdb.org/t/p/w342${isPoster(
            movie.poster_path
          )}">
          <source media="(max-width: 768px)" srcset="https://image.tmdb.org/t/p/w500${isPoster(
            movie.poster_path
          )}">
          <source media="(max-width: 1280px)" srcset="https://image.tmdb.org/t/p/w780${isPoster(
            movie.poster_path
          )}">
          <img src="https://image.tmdb.org/t/p/original${isPoster(
            movie.poster_path
          )}" alt="${movie.title}">
        </picture>
    </div>
    <div class="modal-flex ">
      <h2 class="modal-h2 ${currentTheme === 'dark' ? 'text-white' : ''}">${
    movie.title
  }</h2>
      <ul class="lists-flex ${currentTheme === 'dark' ? 'modal-text' : ''}">
        
            <li class="parametr-flex">
              <p>Vote / Votes</p>
            </li>
            <li class="description-flex vote-style">
              <p class="description-font modal-votes orng-back">
                ${movie.vote_average}
              </p>
              <p>/</p>
              <p>
                ${movie.vote_count}
              </p>
            </li>
            <li class="parametr-flex">
              <p>Popularity</p>
            </li>
            <li class="description-flex">
              <p class="description-font">${movie.popularity}</p>
            </li>
            <li class="parametr-flex">
              <p>Original Title</p>
            </li>
            <li class="description-flex">
              <p class="description-font">${movie.original_title}</p>
            </li>
            <li class="parametr-flex">
              <p>Genre</p>
            </li>
            <li class="description-flex">
              <p class="description-font">${getGenresFullInfo(movie.genres)}</p>
            </li>
      </ul>

      <h5 class="description-font ${
        currentTheme === 'dark' ? 'text-white' : ''
      }">ABOUT</h5>
      <div class="overview-container">
        <p class="about-font ${currentTheme === 'dark' ? 'text-white' : ''}">
          ${movie.overview}
        </p>
      </div>
      <div class="buttons-flex ${
        currentTheme === 'dark' ? 'buttons-flex-white' : ''
      }" data-id="${id}"> ${
    !isSignIn
      ? `<button class="button-modal button-modal-signIn">PLEASE LOGIN
      </button>`
      : `
        <button class="button-modal button-modal-watch">${
          isWatched ? 'DELETE FROM WATCHED' : 'ADD TO WATCHED'
        }</button>
        <button class="button-modal button-modal-queue">
        ${isQueue ? 'DELETE FROM QUEUE' : 'ADD TO QUEUE'}
        </button>
        `
  }
        ${
          trailerPath
            ? `<iframe src="https://www.youtube.com/embed/${trailerPath}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            : ''
        }
        
      </div>
    </div> 
    <button class="modal-cross"> 
    <svg  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8L22 22" stroke="black" stroke-width="2"/>
      <path d="M8 22L22 8" stroke="black" stroke-width="2"/>
    </svg>
    </button>   
  </div>`;
}

function getGenresFullInfo(genres) {
  return genres.map(genre => genre.name).join(', ');
}
