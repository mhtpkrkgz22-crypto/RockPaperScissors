function getComputerChoice(){
  let select = Math.floor(Math.random() * 3);

  if(select === 0){
    return "rock";
  }else if(select === 1){
    return "paper";
  }else{
    return "scissors";
  }
}

function getHumanChoice(){
  let choice = prompt("Write here rock, paper or scissors");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  console.log("Human choice:", humanChoice);
  console.log("Computer choice:", computerChoice);


  if(humanChoice === computerChoice){
    console.log("It's a tie. Both choice is: " + humanChoice);
  }else if(humanChoice === "rock" && computerChoice === "scissors"){
    humanScore++;
    console.log("Congratulations. You win!");
  }else if(humanChoice === "scissors" && computerChoice === "paper"){
    humanScore++;
    console.log("Congratulations. You win!");
  }else if(humanChoice === "paper" && computerChoice === "rock"){
    humanScore++;
    console.log("Congratulations. You win!");
  }else{
    computerScore++;
    console.log("Oh No! You lose!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("Human: " + humanScore + " | Computer: " + computerScore);


