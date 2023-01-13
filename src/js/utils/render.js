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
    console.log(genres);
  }
  return genres.join(', ');
}

function isPoster(poster) {
  return poster
    ? `src="https://image.tmdb.org/t/p/original${poster}"`
    : "src='./images/no-picture.png'";
}

function renderFullInfo(movie) {
  return `<div class="modal-window">
    <div class="modal-img-flex">
      <img ${isPoster(movie.poster_path)} class="modal-img" alt="${
    movie.title
  }" />
    </div>
    <div class="modal-flex">
      <h2 class="modal-h2">${movie.title}</h2>
      <ul class="lists-flex">
        
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

      <h5 class="description-font">ABOUT</h5>
      <div class="overview-container">
        <p class="about-font">
          ${movie.overview}
        </p>
      </div>
      <div class="buttons-flex">
        <button class="button-modal">ADD TO WATCHED</button>
        <button class="button-modal">
          ADD TO QUEUE
        </button>
        <button class="button-modal">
          TRAILER
        </button>
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