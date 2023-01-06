'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

let gameScore = 20;
let highscore = 0;
// document.querySelector('.score').textContent = gameScore;
displayScore(gameScore);
// document.querySelector('.number').textContent = '?';
displayNumber('?');
document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);
  console.log(guessValue, typeof guessValue);

  if (!guessValue) {
    // document.querySelector('.class').textContent = `❌ no number`;
    displayMessage(`❌ no number`);
  } else if (guessValue === secretNumber) {
    // console.log((document.querySelector('.class').textContent = `✅Correct!`));
    displayMessage(`✅Correct!`);
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (gameScore > highscore) {
      highscore = gameScore;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessValue !== secretNumber) {
    if (gameScore > 1) {
      gameScore--;
      // console.log((document.querySelector('.score').textContent = gameScore));
      displayScore(gameScore);
      // console.log(
      //   (document.querySelector('.class').textContent =
      //     guessValue > secretNumber ? `📈 Too High!` : `📉 Too Low!`)
      // );
      displayMessage(
        guessValue > secretNumber ? `📈 Too High!` : `📉 Too Low!`
      );
    } else {
      // console.log((document.querySelector('.score').textContent = 0));
      displayScore(0);
      // console.log(
      //   (document.querySelector('.class').textContent = `💥 You lost the game`)
      // );
      displayMessage(`💥 You lost the game`);
    }
  }

  // else if (guessValue > secretNumber) {
  //   if (gameScore > 1) {
  //     gameScore - 1;
  //     console.log((document.querySelector('.score').textContent = gameScore));
  //     console.log(
  //       (document.querySelector('.class').textContent = `📈 Too High!`)
  //     );
  //   } else {
  //     console.log((document.querySelector('.score').textContent = 0));
  //     console.log(
  //       (document.querySelector('.class').textContent = `💥 You lost the game`)
  //     );
  //   }
  // } else if (guessValue < secretNumber) {
  //   if (gameScore > 1) {
  //     gameScore = gameScore - 1;
  //     console.log((document.querySelector('.score').textContent = gameScore));
  //     console.log(
  //       (document.querySelector('.class').textContent = `📉 Too Low!`)
  //     );
  //   } else {
  //     console.log((document.querySelector('.score').textContent = 0));
  //     console.log(
  //       (document.querySelector('.class').textContent = `💥 You lost the game`)
  //     );
  //   }
  // }
});

// JavaScript in the Browser: DOM and Events
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK �

document.querySelector('.again').addEventListener('click', function () {
  gameScore = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.score').textContent = gameScore;
  displayScore(gameScore);
  // document.querySelector('.number').textContent = secretNumber;
  displayNumber(secretNumber);
  // document.querySelector('.number').textContent = '?';
  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.class').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  console.log('secret', secretNumber);
});
