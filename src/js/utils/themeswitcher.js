const STORAGE_KEY = 'checked';

const refs = {
  themeSwitcher: document.querySelector('.checkbox'),
};

onLocalStorage();

refs.themeSwitcher.addEventListener('change', event => {
  let savedDataLocalStorage = localStorage.getItem(STORAGE_KEY);
  if (savedDataLocalStorage) {
  }
  savedDataLocalStorage = refs.themeSwitcher.checked;
  localStorage.setItem(STORAGE_KEY, savedDataLocalStorage);
});

function onLocalStorage() {
  const parsedCheck = localStorage.getItem(STORAGE_KEY);
  console.log(parsedCheck);
  if (parsedCheck) {
    refs.themeSwitcher.checked = parsedCheck;
  }
}
