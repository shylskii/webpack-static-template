var popup2 = document.querySelector('.feedback-popup')
var feedbackButton2 = document.querySelectorAll('.feedback-button');
var feedbackButtonExit2 = document.querySelector('.feedback-popup__exit');
var blur2 = document.querySelector('.blur_hide2')
var body2 = document.querySelector('body')

export function feedbackClickHandler () {
  feedbackButtonExit2.addEventListener('click', function () {
    popup2.classList.add('feedback-hide');
  });
  for (let i= 0; i < feedbackButton2.length; i++) {
    feedbackButton2[i].addEventListener('click', function () {
      popup2.classList.remove('feedback-hide');
      body2.classList.add('overflowHidden');
      console.log('show');
    });
  }
  blur2.addEventListener('click', function () {
    popup2.classList.add('feedback-hide');
    body2.classList.remove('overflowHidden');
  });
};

