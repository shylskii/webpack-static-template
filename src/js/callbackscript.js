
var popup = document.querySelector('.callback-popup')
var callbackButton = document.querySelectorAll('.callback-button');
var callbackButtonExit = document.querySelector('.callback-popup__exit');
var blur1 = document.querySelector('.blur_hide')
var body1 = document.querySelector('body')
export function callbackClickHandler () {
  callbackButtonExit.addEventListener('click', function () {
    popup.classList.add('callback-hide');
  });
  for (let i= 0; i < callbackButton.length; i++) {
    callbackButton[i].addEventListener('click', function () {
      popup.classList.remove('callback-hide');
      body1.classList.add('overflowHidden');
      console.log('show');
    });
  }
  blur1.addEventListener('click', function () {
    popup.classList.add('callback-hide');
    body1.classList.remove('overflowHidden');
  });
};

