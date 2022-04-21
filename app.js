let userScore = 0;
let computerScore = 0;
const userScore_Span = document.getElementById("user-score");
const computerScore_Span = document.getElementById("computer-score");
const scoreBoard_Div = document.querySelector(".score-board");
const result_P = document.querySelector(".result > p");
const rock_Div = document.getElementById("rock");
const paper_Div = document.getElementById("paper");
const scissors_Div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertWord(word) {
  if (word === 'rock') return "Rock";
  if (word === 'paper') return "Paper";
  if (word === 'scissors') return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_Span.innerHTML = userScore;
  result_P.innerHTML = `${convertWord(userChoice)} beats ${computerChoice}. You win!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_Span.innerHTML = computerScore;
  result_P.innerHTML = `${convertWord(computerChoice)} beats ${userChoice}. You lose...`
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 300);
}

function draw(userChoice) {
  result_P.innerHTML = "Its a draw!"
  document.getElementById(userChoice).classList.add("grey-glow");
  setTimeout(() => document.getElementById(userChoice).classList.remove("grey-glow"), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice);
      break;
  }
}

function main() {
  rock_Div.addEventListener('click', () => game("rock"));
  paper_Div.addEventListener('click', () => game("paper"));
  scissors_Div.addEventListener('click', () => game("scissors"));
}

main();

//
