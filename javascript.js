function getComputerChoice(){
    const randomNum = Math.random()
    if (randomNum <= .33){
        return 'rock'
    } else if (randomNum <= .66){
        return 'paper'
    } else {
        return 'scissors'
    }
}


function getHumanChoice(){
    choice = prompt('Enter either Rock, Paper, or Scissors: ')
    return choice
}



function playRound(humanChoice, computerChoice){
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()){
        return "There was a draw";
    } else if (humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissors'){
        humanScore++;
        return 'You win! Rock Beats Scissors';
    } else if (humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock'){
        humanScore++;
        return 'You win! Paper Beats Rock';
    } else if (humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'paper'){
        humanScore++;
        return 'You win! Scissors Beats Paper';
    } else if (computerChoice.toLowerCase() === 'rock' && humanChoice.toLowerCase() === 'scissors'){
        computerScore++;
        return 'You lose! Rock Beats Scissors';
    } else if (computerChoice.toLowerCase() === 'paper' && humanChoice.toLowerCase() === 'rock'){
        computerScore++;
        return 'You lose! Paper Beats Rock';
    } else if  (computerChoice.toLowerCase === 'scissors' && humanChoice.toLowerCase() === 'paper'){
        computerScore++;
        return 'You lose! Scissors Beats Paper';
    }
}

let humanScore = 0
let computerScore = 0

function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    return playRound(humanSelection, computerSelection);
}

for (i = 1; i <= 5; i++){
    console.log(playGame())
}

console.log(`Results:`)
console.log(`Your Score: ${humanScore}`)
console.log(`Computer Score: ${computerScore}`) //u stupid lols