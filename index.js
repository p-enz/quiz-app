/*
    Aufg 22_05_09 Nr1 
*/
const bookmark = document.querySelector('.card__logo');
bookmark.addEventListener('click', changeBookmarkIcon);

function changeBookmarkIcon() {
  bookmark.classList.toggle('card__logo--isMarked');
  console.log('inner Function');
}

/*
    Aufg 22_05_09 Nr2
*/
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
