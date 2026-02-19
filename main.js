let humanScore = 0;
let computerScore = 0;

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
  let choice = "";
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  console.log("Human choice:", humanChoice);
  console.log("Computer choice:", computerChoice);


  if(humanChoice === computerChoice){
    console.log("It's a tie. Both choice is: " + humanChoice);
  }else if(humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "scissors" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "rock"){
    humanScore++;
    console.log("Congratulations. You win!");
  }else{
    computerScore++;
    console.log("Oh No! You lose!");
  }
}

function playGame(){
 playRound(getHumanChoice(), getComputerChoice());
 playRound(getHumanChoice(), getComputerChoice());
 playRound(getHumanChoice(), getComputerChoice());
 playRound(getHumanChoice(), getComputerChoice());
 playRound(getHumanChoice(), getComputerChoice());
 
 console.log("Human: " + humanScore + " | Computer: " + computerScore);

 if(humanScore > computerScore){
  console.log("You won! Because you are always perfect!!!")
 }else{
  console.log("You lost. Don't be sorry. Try again!!!")
 }
}

playGame();




/*const icons = document.querySelectorAll('#images img');
const playBtn = document.getElementById('play-btn');

let userChoice = "";

// 1. İkon seçme işlemi
icons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        // Hepsinden silikliği kaldır, sonra seçilmeyenlere ekle
        icons.forEach(i => i.classList.remove('not-selected'));
        
        userChoice = e.target.alt; // 'rock-icon' vb. bilgisini alır
        
        icons.forEach(i => {
            if (i !== e.target) {
                i.classList.add('not-selected');
            }
        });
    });
});

// 2. PLAY butonuna basınca ekranın değişmesi
playBtn.addEventListener('click', () => {
    const container = document.getElementById('images');
    
    // Ekranı temizle ve yeni düzeni kur (Yumruklu düzen)
    container.innerHTML = `
        <img src="icons/${userChoice}.png" class="user-final">
        <img src="icons/punch-icon.png" class="middle-punch">
        <img src="icons/paper-icon.png" class="computer-choice"> 
    `;
    // Not: Buradaki paper-icon yerine JS ile rastgele seçilen icon gelecek
});*/