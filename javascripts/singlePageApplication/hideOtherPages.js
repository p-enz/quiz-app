function hideOtherPages(pageList, className) {
  pageList.forEach(page => {
    console.log(page.classList.contains(className));
    if (!page.classList.contains(className)) {
      page.classList.add('page--hide');
    } else {
      page.classList.remove('page--hide');
    }
  });
}

export { hideOtherPages };
