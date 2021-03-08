
var popup = document.querySelector('.callback-popup')
var callbackButton = document.querySelectorAll('.callback-button');
var callbackButtonExit = document.querySelector('.callback-popup__exit');
var blur1 = document.querySelector('.blur_hide')
export function callbackClickHandler () {
  callbackButtonExit.addEventListener('click', function () {
    popup.classList.add('callback-hide');
  });
  for (let i= 0; i < callbackButton.length; i++) {
    callbackButton[i].addEventListener('click', function () {
      popup.classList.remove('callback-hide');
      console.log('show');
    });
  }
  blur1.addEventListener('click', function () {
    popup.classList.add('callback-hide');
  });
};

