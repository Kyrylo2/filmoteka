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

export { renderMovies };

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
