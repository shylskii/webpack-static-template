var linkRead = document.querySelector('.Read');
var listItemsSpan = document.querySelectorAll('.about-company__description span');
var aboutCompanyArrow = document.querySelector('.about-company__link');
var linkReadClick = false;
export function linkReadHandler () {
  linkRead.addEventListener('click', function () {
    for (let i = 0; i < listItemsSpan.length; i++) {
      if (linkReadClick) {
        listItemsSpan[i].classList.add('visibleSpan');
      } else {
        listItemsSpan[i].classList.remove('visibleSpan');
      }
    }
    linkReadClick = !linkReadClick;
    if (linkReadClick) {
      linkRead.textContent = "Скрыть";
      aboutCompanyArrow.classList.remove('arrow-down');
      aboutCompanyArrow.classList.add('arrow-up');
    } else {
      linkRead.textContent = "Показать все";
      aboutCompanyArrow.classList.remove('arrow-up');
      aboutCompanyArrow.classList.add('arrow-down');
    }
    return linkReadClick;
  });
};
