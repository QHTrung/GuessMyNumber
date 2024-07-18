const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const messageTextEl = document.querySelector('.message');
const scoreTextEl = document.querySelector('.score');
const highscoreTextEl = document.querySelector('.highscore');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

let randomNumber = Math.trunc(Math.random() * (20 - 1)) + 1;
let score = 20;
let highscore = 0;
// Check event
checkBtnEl.addEventListener('click', () => {
  const guessNumber = Number(guessEl.value);
  if (!guessNumber) {
    messageTextEl.textContent = '⛔ No number!';
  } else if (guessNumber === randomNumber) {
    messageTextEl.textContent = '✅ Correct!';
    document.body.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      highscoreTextEl.textContent = highscore;
    }
  } else if (guessNumber !== randomNumber) {
    if (score > 1) {
      messageTextEl.textContent =
        guessNumber > randomNumber ? '🤣 Too high!' : '🤣 Too low!';
      score--;
      scoreTextEl.textContent = score;
    } else {
      messageTextEl.textContent = '😥 You lost the game!';
      scoreTextEl.textContent = 0;
    }
  }
});
// Again event
againBtnEl.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * (20 - 1)) + 1;
  numberEl.textContent = randomNumber;
  guessEl.value = '';
  numberEl.textContent = '?';
  score = 20;
  scoreTextEl.textContent = score;
  messageTextEl.textContent = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});
