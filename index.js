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

/* Create the question Cards dynamicly */

/*
section class="card"
    h2
    svg class="card__logo" alt="Bookmark"
        path ...
    p question
    button class="card__answerBtn"
    p class="card__answer card--hide"
    4x a class card__tags

*/

const card = document.createElement('section');
card.classList.add('card');

const headline = document.createElement('h2');
headline.textContent = 'Question';

/* bookmark SVG*/
const bookmarkImg = document.createElement('svg');
bookmarkImg.classList.add('card__logo');
bookmarkImg.setAttribute('alt', 'Bookmark');

const bookmarkImgPath = document.createElement('path');
bookmarkImgPath.setAttribute('js-data', 'svgPathBookmark');
bookmarkImgPath.setAttribute('fill', 'currentColor');
bookmarkImgPath.setAttribute(
  'd',
  'M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z'
);

bookmarkImg.appendChild(bookmarkImgPath);

const question = document.createElement('p');
question.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum, perferendis';

const showAnswerBtn = document.createElement('button');
showAnswerBtn.classList.add('card__answerBtn');
showAnswerBtn.textContent = 'Show Answer';

const answer = document.createElement('p');
answer.classList.add('card__answer', 'card--hide');
answer.textContent = 'cats alot cats alot';

const tag1 = document.createElement('a');
tag1.classList.add('card__tags');
tag1.textContent = 'Conquer';

const tag2 = document.createElement('a');
tag2.classList.add('card__tags');
tag2.textContent = 'The';

const tag3 = document.createElement('a');
tag3.classList.add('card__tags');
tag3.textContent = 'World';

const tag4 = document.createElement('a');
tag4.classList.add('card__tags');
tag4.textContent = '!!!!';

card.appendChild(headline);
card.appendChild(bookmarkImg);
card.appendChild(question);
card.appendChild(showAnswerBtn);
card.appendChild(answer);
card.appendChild(tag1);
card.appendChild(tag2);
card.appendChild(tag3);
card.appendChild(tag4);

document.body.append(card);
console.log(card);
