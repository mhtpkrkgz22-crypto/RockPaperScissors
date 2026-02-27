let humanScore = 0;
let computerScore = 0;
let humanChoice = null;
const WIN_SCORE = 5;

const content = document.querySelector('.content');
const title = document.querySelector('.title');
const container = document.querySelector('.container');
const playBtn = document.querySelector('#play-btn');
const resetBtn = document.querySelector('#reset-btn');
const rock = document.querySelector('#rock-icon');
const paper = document.querySelector('#paper-icon');
const scissors = document.querySelector('#scissors-icon');
const message = document.querySelector('.message');
const leftStar = document.querySelectorAll('.stars-left img');
const rightStar = document.querySelectorAll('.stars-right img');
const startBtn = document.querySelector('.start-btn');
const overlay = document.querySelector('.overlay');


startBtn.addEventListener("click", () => {
    content.style.display = "flex";
    title.style.display = "flex";
    startBtn.classList.add('hidden');
    overlay.classList.add('hide-bg')
});


function resetSelection() {
    [rock, paper, scissors].forEach(item => {
        item.classList.remove("selected-rock", "selected-paper", "selected-scissors", "not-selected");
    });
}

function selectChoice(choice, element, selectedClass) {
    resetSelection();
    element.classList.add(selectedClass);

    const arr = [rock, paper, scissors];

    arr.forEach((item) => {
        if (item !== element) item.classList.add('not-selected')
    })

    humanChoice = choice;
}

rock.addEventListener("click", () => {
    selectChoice("rock", rock, 'selected-rock');
});

paper.addEventListener("click", () => {
    selectChoice("paper", paper, 'selected-paper');
});

scissors.addEventListener("click", () => {
    selectChoice("scissors", scissors, 'selected-scissors');
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function addMessage(msg) {
    message.classList.add('on-message-active');
    message.textContent = msg;
}

function updateStar(direction) {
    for (let i = 0; i < direction.length; i++) {
        if (direction[i].src.includes('icons/empty-star.png')) {
            direction[i].src = 'icons/star-icon.png';
            break;
        }
    }
}

function checkWinner(human, computer) {
    if (human === computer) return "tie";

    if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock")
    ) {
        return "human";
    }

    return "computer";
}

function updateScore(result) {
    if (result === "human") {
        humanScore++;
    } else if (result === "computer") {
        computerScore++;
    }
}

function updateMessage(result, humanChoice, computerChoice) {
    if (result === "tie") {
        addMessage(`It's a tie. Both chose: ${humanChoice}`);
    }

    if (result === "human") {
        addMessage(`Congratulations! 🎉 ${humanChoice} 🤜🏼 ${computerChoice}`);
    }

    if (result === "computer") {
        addMessage(`Ohh Noo! 🤖 ${computerChoice} 🤜🏼 ${humanChoice}`);
    }
}

function playRound(humanChoice, computerChoice) {

    const result = checkWinner(humanChoice, computerChoice);

    updateScore(result);

    updateMessage(result, humanChoice, computerChoice);

    if (result === "human") {
        updateStar(leftStar)
    }

    if (result === "computer") {
        updateStar(rightStar)
    }

}

playBtn.addEventListener("click", () => {
    if (!humanChoice) {
        addMessage("⚠️ Please, Choice Any Icon! ⚠️");
        return;
    } else {
        message.classList.remove('on-message-active');
    }
    if (humanScore === WIN_SCORE || computerScore === WIN_SCORE) return;

    const comp = getComputerChoice();
    playRound(humanChoice, comp);

    if (humanScore === WIN_SCORE || computerScore === WIN_SCORE) {
        resetSelection();

        if (humanScore === WIN_SCORE) {
            addMessage("🏆 You won the game!");
        } else {
            addMessage("🤖 Computer won the game!");
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

    playBtn.disabled = false;
    playBtn.classList.remove('hidden');

    const allStars = document.querySelectorAll('.stars-left img, .stars-right img');

    allStars.forEach(star => {
        star.src = 'icons/empty-star.png';
    });
})
