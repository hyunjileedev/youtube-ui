'use strict';

const more = document.querySelector('.info__more');
const title = document.querySelector('.info__title');
more.addEventListener('click', () => {
  more.classList.toggle('info__more--clicked');
  title.classList.toggle('info__title--clamped');
});

const commentsBtn = document.querySelector('.switch__comments');
const upNextBtn = document.querySelector('.switch__upNext');
const comments = document.querySelector('.comments');
const upNext = document.querySelector('.upNext');
commentsBtn.addEventListener('click', () => {
  comments.classList.remove('switch-section--inactive');
  upNext.classList.add('switch-section--inactive');
  commentsBtn.classList.add('switch__btn--active');
  upNextBtn.classList.remove('switch__btn--active');
});
upNextBtn.addEventListener('click', () => {
  comments.classList.add('switch-section--inactive');
  upNext.classList.remove('switch-section--inactive');
  commentsBtn.classList.remove('switch__btn--active');
  upNextBtn.classList.add('switch__btn--active');
});
