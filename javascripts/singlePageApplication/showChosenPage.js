function showChosenPage(className) {
  hideAllPages();
  const pageToShow = document.querySelector('.' + className);
  console.log(document.querySelector('.' + className));
  pageToShow.classList.remove('page--hide');
}

function hideAllPages() {
  const pages = document.querySelectorAll('[js-data="page"]');
  pages.forEach(page => {
    page.classList.add('page--hide');
  });
}

export { showChosenPage };
