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
      <h1 class="modal-h1">${movie.title}</h1>
      <ul class="lists-flex">
        <li>
          <ul>
            <li class="description-flex">
              <p class="title-tags description-font">Vote / Votes</p>
            </li>
            <li class="description-flex">
              <p class="title-tags description-font">Popularity</p>
            </li>
            <li class="description-flex">
              <p class="title-tags description-font">Original Title</p>
            </li>
            <li class="description-flex">
              <p class="title-tags description-font">Genre</p>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="description-flex" style="display: flex">
              <p class="description-font modal-votes orng-back" style="padding: 1px 10px 1px 10px">
                ${movie.vote_average}
              </p>
              <p>/</p>
              <p style="padding-top: 1px" class="description-font modal-votes">
                ${movie.vote_count}
              </p>
            </li>
            <li class="description-flex">
              <p class="description-font">${movie.popularity}</p>
            </li>
            <li class="description-flex">
              <p class="description-font">${movie.original_title}</p>
            </li>
            <li class="description-flex">
              <p class="description-font">${getGenresFullInfo(movie.genres)}</p>
            </li>
          </ul>
        </li>
      </ul>

      <h5 class="description-font">ABOUT</h5>
      <p class="about-font">
        ${movie.overview}
      </p>
      <div class="buttons-flex">
        <button class="orng-back button-modal margin-buttons">ADD TO WATCHED</button>
        <button class="button-modal" style="border-radius: 5px; border: 1px solid black">
          ADD TO QUEUE
        </button>
      </div>
    </div>
    <svg class="modal-cross" width="12" height="12">
      <use href="./images/symbol-defs_minNN.svg#icon-close"></use>
    </svg>
  </div>`;
}

function getGenresFullInfo(genres) {
  return genres.map(genre => genre.name).join(', ');
}
