'use strict';

/*
Outline

1. Generate a random number between 1 and 20
2. Compare the user input with the random number and if...
3. They're equal the User wins and...
    4. Score is stopped and they get a "You guessed correctly" message
5.If they're different the game tells you wether you guessed high or low and then takes the new input value and rechecks the new value.
    6.You also loose a point
7.When they win log the high score to the high score element
8.Again button functionality
*/

//Game Variables
let hiddenNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};
let secretNumber = hiddenNumber();
console.log(secretNumber);
let score = 20;

//function

//Game logic

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  let highScore = document.querySelector('.high-score').textContent;
  console.log(highScore);
  if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You win!';

    document.querySelector('body').style.backgroundColor = 'green';
    if (score > Number(highScore)) {
      document.querySelector('.high-score').textContent = score;
    }
  } else if (guess !== secretNumber && score > 0) {
    const response = guess > secretNumber ? 'Too High! 👇' : 'Too Low 👆';
    document.querySelector('.message').textContent = response;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent =
      'You lost! Press again to retry...';
  }
});

//again button
document.querySelector('.again').addEventListener('click', function () {
  //resetting the variables
  secretNumber = hiddenNumber();
  console.log(secretNumber);
  score = 20;

  //resetting the page elements
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';

  //ressetting the body
  document.querySelector('body').style.backgroundColor = '#222';
});
