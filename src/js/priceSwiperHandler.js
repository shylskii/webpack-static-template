var button2 = document.querySelector('.button-disclosures3');
var listItems2 = document.querySelectorAll('.repair-slider__wrapper .swiper-hide');
let buttonclick2 = false;
export function priceSwiperHandler () {
  if (document.documentElement.clientWidth >= 1024) {
    listItems2[0].classList.remove('swiper-hide');
    listItems2 = document.querySelectorAll('.repair-slider__wrapper .swiper-hide');
  }
  if (document.documentElement.clientWidth >= 1670) {
    listItems2[0].classList.remove('swiper-hide');
    listItems2 = document.querySelectorAll('.repair-slider__wrapper .swiper-hide');
  }
  if (document.documentElement.clientWidth >= 1930) {
    listItems2[0].classList.remove('swiper-hide');
    listItems2 = document.querySelectorAll('.repair-slider__wrapper .swiper-hide');
  }

  button2.addEventListener('click', function () {
    for (let i = 0; i < listItems2.length; i++) {
      if (buttonclick2) {
        listItems2[i].classList.add('swiper-hide');
      } else {
        listItems2[i].classList.remove('swiper-hide');
      }
    }
    buttonclick2 = !buttonclick2;
    if (buttonclick2) {
      button2.textContent = "Скрыть";
      button2.classList.remove('arrow-down')
      button2.classList.add('arrow-up')
    } else {
      button2.textContent = "Показать все";
      button2.classList.remove('arrow-up')
      button2.classList.add('arrow-down')
    }
    return buttonclick2;
  });
};
