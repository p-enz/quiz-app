import { toggleBookmarkIcon } from './javascripts/card/toggleBookmarkIcon.js';
import { showAnswerOnClick } from './javascripts/card/showAnswerOnClick.js';

const bookmarkPaths = document.querySelectorAll('[js-data="svgPathBookmark"]');
bookmarkPaths.forEach(path => toggleBookmarkIcon(path));

const questionCards = document.querySelectorAll('.card');
questionCards.forEach(questionCard => showAnswerOnClick(questionCard));
