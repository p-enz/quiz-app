import { toggleBookmarkIcon } from './javascripts/card/toggleBookmarkIcon.js';
import { showAnswerOnClick } from './javascripts/card/showAnswerOnClick.js';
import { showChosenPage } from './javascripts/singlePageApplication/showChosenPage.js';

const bookmarkPaths = document.querySelectorAll('[js-data="svgPathBookmark"]');
bookmarkPaths.forEach(path => toggleBookmarkIcon(path));

const questionCards = document.querySelectorAll('.card');
questionCards.forEach(questionCard => showAnswerOnClick(questionCard));

/* 
For SinglePageApplication 
TODO: Refactor a bit, maybe add another foreach for buttons?
*/
const homeButton = document.querySelector('[js-data="toIndexPage"]');
const bookmarkButton = document.querySelector('[js-data="toBookmarkPage"]');
const createButton = document.querySelector('[js-data="toCreatePage"]');
const profileButton = document.querySelector('[js-data="toProfilePage"]');

homeButton.addEventListener('click', () => {
  showChosenPage('indexPage');
  changeHeadline('Quiz-App');
});
bookmarkButton.addEventListener('click', () => {
  showChosenPage('bookmarkPage');
  changeHeadline('Bookmarks');
});
createButton.addEventListener('click', () => {
  showChosenPage('createPage');
  changeHeadline('Create New Question');
});
profileButton.addEventListener('click', () => {
  showChosenPage('profilePage');
  changeHeadline('Your Profile');
});
/*----------------------------------------------*/

const inQuestion = document.querySelector('#inQuestion');
const inAnwser = document.querySelector('#inAnswer');
countInputCharacters(inQuestion);
countInputCharacters(inAnwser);

//querySelector for charCount needs to be fixed
function countInputCharacters(element) {
  element.addEventListener('input', () => {
    const charCount = document.querySelector('.create__questionCharCount');
    charCount.textContent = `Characters: ${element.value.length}`;
  });
}

/* change Headline  it works but is not really nice function*/

function changeHeadline(headlineContent) {
  const headline = document.querySelector('h1');
  headline.textContent = headlineContent;
}
