let humanScore = 0;
let computerScore = 0;
let humanChoice = null;

const contant = document.querySelector('#contant');
const title = document.querySelector('#title');
const container = document.querySelector('#container');
const playBtn = document.querySelector('#play-btn');
const resetBtn = document.querySelector('#reset-btn');
const rock = document.querySelector('#rock-icon');
const paper = document.querySelector('#paper-icon');
const scissors = document.querySelector('#scissors-icon');
const message = document.querySelector('#message');
const leftStar = document.querySelectorAll('.left img');
const rightStar = document.querySelectorAll('.right img');
const startBtn = document.querySelector('#start-btn');
const mainBack = document.querySelector('#main-container');


startBtn.addEventListener("click", () => {
  contant.style.display = "flex";
  title.style.display = "flex";
  mainBack.classList.add('in-active');
  startBtn.classList.add('hidden');

});


function resetSelection() {
  [rock, paper, scissors].forEach(item => {
    item.classList.remove("selected-rock", "selected-paper", "selected-scissors", "not-selected");
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
    message.classList.remove('on-message-active');
  }


  if (humanChoice === computerChoice) {
    getMessage(`It's a tie. Both chose: ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    getMessage(`Congratulations! 🎉 ${humanChoice} 🤜🏼 ${computerChoice}`);
    for(let i = 0; i < leftStar.length; i++){
      if(leftStar[i].src.includes('icons/empty-star.png')){
        leftStar[i].src = 'icons/star-icon.png';
        break;
      }
    }
  } else {
    computerScore++;
    getMessage(`Ohh Noo! 🤖 ${computerChoice} 🤜🏼 ${humanChoice}`);
    for(let i = 0; i < rightStar.length; i++){
      if(rightStar[i].src.includes('icons/empty-star.png')){
        rightStar[i].src = 'icons/star-icon.png';
        break;
      }
    }
  }

  container.prepend(message);
}

playBtn.addEventListener("click", () => {
  if (!humanChoice) {
    getMessage("⚠️ Please, Choice Any Icon! ⚠️");
    return;
  } else {
    message.classList.remove('on-message-active');
  }
  if (humanScore === 5 || computerScore === 5) return;

  const comp = getComputerChoice();
  playRound(humanChoice, comp);

  if(humanScore === 5 || computerScore === 5) {
    resetSelection();

    if (humanScore === 5) {
      getMessage("🏆 You won the game!");
    } else {
      getMessage("🤖 Computer won the game!");
    }
    playBtn.disabled = true;
    playBtn.classList.add("hidden");
  }
});


resetBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  humanChoice = null;

  resetSelection();

  message.textContent = "";
  message.classList.remove('on-message-active');

  playBtn.disabled = false ;
  playBtn.classList.remove('hidden');

  const allStars = document.querySelectorAll('.left img, .right img');
    
    allStars.forEach(star => {
        star.src = 'icons/empty-star.png';
    });
})
