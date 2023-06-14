'use strict';
// console.log(document.querySelector('.guess-message').textContent);
// document.querySelector('.guess-message').textContent = 'Привильно!';
document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  let randomNum = Math.round(Math.random() * 19) + 1;
  console.log(randomNum);
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  }
});
console.log();
