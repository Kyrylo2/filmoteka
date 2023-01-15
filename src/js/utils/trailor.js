import moviesApiService from './movie-api';

const MoviesApiService = new moviesApiService();

const trailerWindow = document.querySelector('.trailer__window');
const trailerBackdrop = document.querySelector('.trailer__backdrop');
const trailerBtn = document.querySelector(`.open-trailer`);

export function addListener(id) {
  if (trailerBtn) {
    trailerBtn.addEventListener('click', onClickTrailer, { once: true });
  }
}

function onClickTrailer(event) {
  const id = event.currentTarget.dataset.id;
  MoviesApiService.fetchTrailer(id).then(({ results }) => {
    results.forEach(result => {
      if (result.name === 'Official Trailer') {
        const modal = document.querySelector('.basicLightbox');
        modal.classList.add('visually-hidden');
        // setAttribut(result.key);
        appendMarkupTrailer(result.key);
      }
    });
  });
}

function appendMarkupTrailer(key) {
  // console.log(key);
  trailerBackdrop.classList.remove('visually-hidden');
  trailerWindow.innerHTML = `
  <iframe class="trailer__iframe" width="700" height="500" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `;

  trailerBackdrop.addEventListener('click', e => {
    if (e.target !== trailerBackdrop) {
      return;
    }
    closeModal();
  });

  window.addEventListener('keydown', escapeKeyCloseTrailer, { once: true });
}

function closeModal() {
  const modal = document.querySelector('.basicLightbox');
  modal.classList.remove('visually-hidden');
  trailerBackdrop.classList.add('visually-hidden');
  trailerWindow.innerHTML = '';
}

function escapeKeyCloseTrailer(event) {
  console.log(event);
  if (event.code === 'Escape') {
    const modal = document.querySelector('.basicLightbox');
    modal.classList.remove('visually-hidden');
    trailerBackdrop.classList.add('visually-hidden');
    trailerWindow.innerHTML = '';
  }
}
