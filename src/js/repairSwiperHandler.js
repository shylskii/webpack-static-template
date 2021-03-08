var button1 = document.querySelector('.button-disclosures2');
var listItems1 = document.querySelectorAll('.image-slider__wrapper .swiper-hide');
let buttonclick1 = false;

export function repairSwiperHandler () {
  if (document.documentElement.clientWidth >= 1120) {
    listItems1[0].classList.remove('swiper-hide');
    listItems1[1].classList.remove('swiper-hide');
    listItems1 = document.querySelectorAll('.image-slider__wrapper .swiper-hide');
  }
  button1.addEventListener('click', function () {
    for (let i = 0; i < listItems1.length; i++) {
      if (buttonclick1) {
        listItems1[i].classList.add('swiper-hide');
      } else {
        listItems1[i].classList.remove('swiper-hide');
      }
    }
    buttonclick1 = !buttonclick1;
    if (buttonclick1) {
      button1.textContent = "Скрыть";
      button1.classList.remove('arrow-down')
      button1.classList.add('arrow-up')
    } else {
      button1.textContent = "Показать все";
      button1.classList.remove('arrow-up')
      button1.classList.add('arrow-down')
    }
    return buttonclick1;
  });
};

