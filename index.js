import { toggleBookmarkIcon } from './javascripts/card/toggleBookmarkIcon.js';
import { showAnswerOnClick } from './javascripts/card/showAnswerOnClick.js';
import { hideOtherPages } from './javascripts/singlePageApplication/hideOtherPages.js';

const bookmarkPaths = document.querySelectorAll('[js-data="svgPathBookmark"]');
bookmarkPaths.forEach(path => toggleBookmarkIcon(path));

const questionCards = document.querySelectorAll('.card');
questionCards.forEach(questionCard => showAnswerOnClick(questionCard));

/* For SinglePageApplication */
const pages = document.querySelectorAll('[js-data="page"]');
const homeButton = document.querySelector('[js-data="toIndexPage"]');
const bookmarkButton = document.querySelector('[js-data="toBookmarkPage"]');
const createButton = document.querySelector('[js-data="toCreatePage"]');
const profileButton = document.querySelector('[js-data="toProfilePage"]');

homeButton.addEventListener('click', () => {
  hideOtherPages(pages, 'indexPage');
});
bookmarkButton.addEventListener('click', () => {
  hideOtherPages(pages, 'bookmarkPage');
});
createButton.addEventListener('click', () => {
  hideOtherPages(pages, 'createPage');
});
profileButton.addEventListener('click', () => {
  hideOtherPages(pages, 'profilePage');
});
/*----------------------------------------------*/
