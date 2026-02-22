let humanScore = 0;
let computerScore = 0;
let humanChoice = null;
let round = 0;

const contant = document.querySelector('#contant');
const leftStars = document.querySelectorAll('.left');
const rightStars = document.querySelectorAll('.right');
const container = document.querySelector('#container');
const images = document.querySelector('#images');
const playBtn = document.querySelector('#play-btn');
const resetBtn = document.querySelector('#reset-btn');
const rock = document.querySelector('#rock-icon');
const paper = document.querySelector('#paper-icon');
const scissors = document.querySelector('#scissors-icon');
const message = document.querySelector('#message');


function resetSelection() {
  [rock, paper, scissors].forEach(item => {
    item.classList.remove("active", "selected-rock", "selected-paper", "selected-scissors", "not-selected");
  });
}

rock.addEventListener("click", () => {
  resetSelection();
  rock.classList.add("selected-rock");
  paper.classList.add("not-selected");
  scissors.classList.add("not-selected");

  humanChoice = "rock";
});

paper.addEventListener("click", () => {
  resetSelection();
  paper.classList.add("selected-paper");
  rock.classList.add("not-selected");
  scissors.classList.add("not-selected");

  humanChoice = "paper";
});

scissors.addEventListener("click", () => {
  resetSelection();
  scissors.classList.add("selected-scissors");
  rock.classList.add("not-selected");
  paper.classList.add("not-selected");

  humanChoice = "scissors";
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let select = Math.floor(Math.random() * 3);
  return choices[select];
}

function getMessage(msg){
  message.classList.add('on-message-active');
  message.textContent = msg;
}

function playRound(humanChoice, computerChoice) {
  if(message) {
    message.classList.remove('.on-message-active');
  }

  if (humanChoice === computerChoice) {
    getMessage(`It's a tie. Both chose: ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    getMessage(`Congratulations! 🎉 ${humanChoice} beats ${computerChoice}`)
  } else {
    computerScore++;
    getMessage(`Ohh Noo! 🤖 ${computerChoice} beats ${humanChoice}`)
  }

  round++;

  container.prepend(message);
}

playBtn.addEventListener("click", () => {
  if (!humanChoice) {
    getMessage("⚠️ Please, Choice Any Icon! ⚠️");
    return;
  } else {
    message.classList.remove('.on-message-active');
  }
  if (humanScore === 5 || computerScore === 5) return;

  const comp = getComputerChoice();
  playRound(humanChoice, comp);

  if(humanScore === 5 || computerScore === 5) {
    message.classList.remove('#message');
    resetSelection();

    if (humanScore === 5 && computerScore === 5) {
      getMessage("🤝 It's a tie!");
    } else if (humanScore === 5) {
      getMessage("🏆 You won the game!");
    } else {
      getMessage("🤖 Computer won the game!");
    }
    playBtn.disabled = true;
    playBtn.classList.add("hidden");
  }

  container.prepend(message);
});


resetBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  humanChoice = null;
  round = 0;

  resetSelection();
  message.textContent = "";
  message.classList.remove('on-message-active');

  leftStars.forEach(star => star.classList.remove('active-star'));
  rightStars.forEach(star => star.classList.remove('active-star'));

  playBtn.disabled = false ;
  playBtn.classList.remove('hidden');
})