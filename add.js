function getComputerChoise(){
    let select = Math.floor(Math.random() * 3);

    if(select === 0){
        return "rock";
    }else if(select === 1){
        return "paper";
    }else{
        return "scissors";
    }
}

console.log(getComputerChoise());



