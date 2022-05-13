function showAnswerOnClick(questionCard) {
  const answerButton = questionCard.querySelector('.card__answerBtn');
  const showAnswer = questionCard.querySelector('.card__answer');

  answerButton.addEventListener('click', () => {
    showAnswer.classList.toggle('card--hide');
  });
}

export { showAnswerOnClick };
