const themeSwitcher = document.querySelector('.checkbox');
console.log(themeSwitcher);
themeSwitcher.addEventListener('change', event => {
  console.log(event.currentTarget.checked);
  localStorage.setItem('Значение', event.currentTarget.checked);
  const cuttentChecked = localStorage.getItem('Значение');
  console.log(localStorage.getItem('Значение'));
  if (cuttentChecked) {
    event.currentTarget.checked = cuttentChecked;
    console.log(event.currentTarget.checked);
  }
});

// function currentTheme(event) {
//   localStorage.setItem('Значение', event.currentTarget.checked);
// }
