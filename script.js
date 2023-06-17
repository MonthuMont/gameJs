'use strict';
// console.log(document.querySelector('.guess-message').textContent);
// document.querySelector('.guess-message').textContent = 'Привильно!';

// document.querySelector('.question').textContent = randomNum;

let randomNum = Math.round(Math.random() * 19) + 1;
console.log(randomNum);
let score = 20;
let highScore;
document.querySelector('.highscore');
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if (guessingNumber === randomNum) {
    document.querySelector('.guess-message').textContent = 'Вы угадали!';
    document.querySelector('.question').textContent = randomNum;
    document.querySelector('body').style =
      'background-color:  rgb(9, 250, 21); ';
    highScore = score;
    document.querySelector('.highscore').textContent = score;
  } else if (guessingNumber > randomNum) {
    document.querySelector('.guess-message').textContent =
      'Слишком большое число!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score <= 0) {
      document.querySelector('body').style = 'background-color: red';
      document.querySelector('.guess-message').textContent = 'Вы проиграли!';
    }
  } else if (guessingNumber < randomNum) {
    document.querySelector('.guess-message').textContent =
      'Слишком маленькое число!';
    score--;
    document.querySelector('.score').textContent = score;
    console.log(score);
    if (score <= 0) {
      document.querySelector('body').style = 'background-color: red';
      document.querySelector('.guess-message').textContent = 'Вы проиграли!';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  randomNum = Math.round(Math.random() * 19) + 1;
  console.log(randomNum);

  score = 20;
  document.querySelector('body').style.backgroundColor = 'black';

  document.querySelector('.question').textContent = '???';
  document.querySelector('.guess-message').textContent = 'Начни угадывать';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
});

// let scoreVal = score;
// console.log(scoreVal);
