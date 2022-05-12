const notSetBookmark = document.querySelector('[js-data="notBookmarked"]');
const setBookmark = document.querySelector('[js-data="bookmarked"]');

notSetBookmark.addEventListener('click', setIconAsBookmarked);
setBookmark.addEventListener('click', setIconAsBookmarked);

/*TO DO: ASK COACHES about forEach with 2 different items, depending on each other, 
thoughts i could simply toogle in the class card--hide and "fill" the svg instead of really 
filling it i use 2 different svgs with different selectors single card worked,
but i dont get the method to apply on all:

const notSetBookmarks = document.querySelectorAll('[js-data="notBookmarked"]');
const setBookmarks = document.querySelectorAll('[js-data="bookmarked"]');

notSetBookmarks.forEach(notSetBookmark => {
  notSetBookmark.addEventListener('click', setIconAsBookmarked);
});
*/
function setIconAsBookmarked() {
  notSetBookmark.classList.toggle('card--hide');
  setBookmark.classList.toggle('card--hide');
}

/*
    Aufg 22_05_09 Nr2
*/

/*
const showAnswerBtn = document.querySelector('.card__hideAnswer');
showAnswerBtn.addEventListener('click', showAnswer);

//TO DO NACHFRAGEN nicht AUFGABE REPLACE with musterlösung
function showAnswer() {
  if (showAnswerBtn.getAttribute('value') == 'test') {
    showAnswerBtn.setAttribute('value', 'Check Answer');
  } else {
    showAnswerBtn.setAttribute('value', 'test');
  }

  //showAnswerBtn.classList.toggle(".card__showAnswer");
}
*/
