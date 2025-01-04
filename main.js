const choices = [`rock`, `paper`, `scissors`];
const playerDisplay = document.getElementById(`playerDisplay`);
const computerDisplay = document.getElementById(`computerDisplay`);
const resultDisplay = document.getElementById(`resultDisplay`);
const playerScoreDisplay = document.getElementById(`playerScoreDisplay`);
const computerScoreDisplay = document.getElementById(`computerScoreDisplay`);
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = ``;
  if (playerChoice === computerChoice) {
    result = `It's a tie!`;
  } else {
    switch (playerChoice) {
      case `rock`:
        result = computerChoice === `scissors` ? `You win!` : `You lose!`;
        break;
      case `paper`:
        result = computerChoice === `rock` ? `You win!` : `You lose!`;
        break;
      case `scissors`:
        result = computerChoice === `paper` ? `You win!` : `You lose!`;
        break;
    }
  }
  playerDisplay.textContent = `Player choice: ${playerChoice}`;
  computerDisplay.textContent = `Computer choice: ${computerChoice}`;
  resultDisplay.textContent = result;

  if (result === `You win!`) {
    resultDisplay.style.color = `green`;
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  }
  if (result === `You lose!`) {
    resultDisplay.style.color = `red`;
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }
}
