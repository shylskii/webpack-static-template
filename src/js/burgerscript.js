var burgermenu = document.querySelector('.burger')
var burgerButton = document.querySelector('.burgerButton');
var burgerExitButton = document.querySelector('.burger-exit-button');
var blur3 = document.querySelector('.blur_hide3')

export function burgerClickHandler () {
  burgerButton.addEventListener('click', function () {
    burgermenu.classList.remove('burger-exit');
  });
  burgerExitButton.addEventListener('click', function () {
    burgermenu.classList.add('burger-exit');
  });
  var hideburger = document.querySelector('.burger-exit')
  if (document.documentElement.clientWidth >= 1440) {
    hideburger.classList.remove('burger-exit');
  };
  blur3.addEventListener('click', function () {
    burgermenu.classList.add('burger-exit');
  });
};
