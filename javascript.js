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
    } else {
        computerScore ++;
        return `You lose! ${computerChoice} Beats ${humanChoice}`;
    }
}

let humanScore = 0
let computerScore = 0


//block for buttons
const rockButton = document.querySelector('#rockBtn')
const paperButton = document.querySelector('#paperBtn')
const scissorsButton = document.querySelector('#scissorsBtn')

//results box
const resultsBox = document.querySelector('#resultsBox')

//block for scores
const humanHTML = document.createElement('p')
const computerHtml = document.createElement('p')
humanHTML.textContent = `Your score: ${humanScore}`
computerHtml.textContent = `Computer score: ${computerScore}`
resultsBox.appendChild(humanHTML)
resultsBox.appendChild(computerHtml)

//P tags
const PTag1 = document.createElement('p')
const ptag2 = document.createElement('p')

//Winner
ptag2.textContent = 'The winner is: '
resultsBox.appendChild(ptag2)



//Events
rockButton.addEventListener("click", () => {
    let result = playRound('rock', getComputerChoice())
    PTag1.textContent = `${result}`
    resultsBox.appendChild(PTag1)
    humanHTML.textContent = `Your score: ${humanScore}`
    computerHtml.textContent = `Computer score: ${computerScore}`
    
})

paperButton.addEventListener("click", () => {
    let result = playRound('paper', getComputerChoice())
    PTag1.textContent = `${result}`
    resultsBox.appendChild(PTag1)
    humanHTML.textContent = `Your score: ${humanScore}`
    computerHtml.textContent = `Computer score: ${computerScore}`
    
})

scissorsButton.addEventListener("click", () => {
    let result = playRound('scissors', getComputerChoice())
    PTag1.textContent = `${result}`
    resultsBox.appendChild(PTag1)
    humanHTML.textContent = `Your score: ${humanScore}`
    computerHtml.textContent = `Computer score: ${computerScore}`
    
})

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (humanScore === 5){
            ptag2.textContent = 'The winner is: HUMAN'
            resultsBox.appendChild(ptag2)
        }
        else if (computerScore === 5){
            ptag2.textContent = 'The winner is: Computer'
            resultsBox.appendChild(ptag2)
        }
    });
});













