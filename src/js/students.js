import {
  backdrop,
  openModalBtn,
  closeModalBtn,
  modalStudents,
} from './utils/refs';

import { onBtnClose, onEcsClose, onBackdropClose } from '../index';

export function ModalTeamInit() {
  openModalBtn.addEventListener('click', onOpenModal);
  closeModalBtn.addEventListener('click', onCloseModal);
}

function onOpenModal() {
  backdrop.classList.add('modal-open');
  modalStudents.classList.remove('visually-hidden');

  backdrop.addEventListener('click', onBackdropClose);

  document.body.removeEventListener('keyup', onEcsClose);

  // window.addEventListener('keydown', onEscKeydown);
}

function onCloseModal() {
  backdrop.classList.toggle('modal-open');
  modalStudents.classList.add('visually-hidden');

  window.removeEventListener('keydown', onEscKeydown);
}

// function onBackdropClick(e) {
//   if (e.currentTarget === e.target) {
//     onCloseModal();
//   }
// }

function onEscKeydown(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
