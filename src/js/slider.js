export function inicializeSwiper() {
  if (document.documentElement.clientWidth < 768) {
    new Swiper('.swiper1', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      spaceBetween: 10,
      slidesPerView: 1.3
    });
    new Swiper('.swiper2', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      spaceBetween: 10,
      slidesPerView: 1.3
    });
    new Swiper('.swiper3', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      spaceBetween: 10,
      slidesPerView: 1.2
    });
  }
}
if (document.documentElement.clientWidth >= 768) {
    let elem1 = document.getElementById('stylesheet1')
    elem1.parentNode.removeChild(elem1);
    let elem2 = document.getElementById('stylesheet2')
    elem2.parentNode.removeChild(elem2);
}
