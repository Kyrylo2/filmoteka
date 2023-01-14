import {
  backdrop,
  openModalBtn,
  closeModalBtn,
  modalStudents,
} from './utils/refs';

export function ModalTeamInit() {
  openModalBtn.addEventListener('click', onOpenModal);
  closeModalBtn.addEventListener('click', onCloseModal);
  backdrop.addEventListener('click', onBackdropClick);
  console.log('Modal init');
  console.log(openModalBtn);
}

function onOpenModal() {
  console.log('click - onOpenModal');
  window.addEventListener('keydown', onEscKeydown);
  modalStudents.classList.remove('visually-hidden');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeydown);
  modalStudents.classList.add('visually-hidden');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscKeydown(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
