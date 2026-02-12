// const { createElement } = require("react");

//Make score variables and set them to 0
let humanScore = 0
let computerScore = 0

//Start game
// playGame()

const btns = document.querySelectorAll('.btn')
const rockBtn = document.querySelector('#rockBtn')
const paperBtn = document.querySelector('#paperBtn')
const scissorsBtn = document.querySelector('#scissorsBtn')
const resultsDiv = document.querySelector('#results')
const scoreDiv = document.querySelector('#score')

const scoreText = document.createElement("p")
scoreDiv.appendChild(scoreText)

const winnerText = document.createElement("p")
scoreDiv.appendChild(winnerText)


btns.forEach((item)=>item.addEventListener('click', playIt))

function playIt(e){

    const resultText = document.createElement("p")
resultText.textContent = playRound(e.target.textContent,getComputerChoice())
resultsDiv.appendChild(resultText)
scoreText.textContent = `You have ${humanScore} point${humanScore>1?'s':''}, the computer has ${computerScore} point${computerScore>1?'s':''}` 

if(humanScore < 5 && computerScore < 5){
winnerText.textContent = `The score is you: ${humanScore} vs computer: ${computerScore}, ${humanScore>computerScore?'you are in the lead!':humanScore<computerScore? 'you are losing...':'it goes neck to neck!'} `
}else if(humanScore == 5){
winnerText.textContent = `You won!!!`
}else if(computerScore == 5){
    winnerText.textContent = `Better luck next time...`
} else {
    winnerText.textContent = `Stop!`
}

}


//Function that plays a game of maximum 5 rounds
function playGame() {

    //Plays games until the human or the computer has 3 wins
    while (humanScore < 3 && computerScore < 3) {

        //Gets a choice from the user and a random choice from the computer
        let humanSelection = getHumanChoice();
        if (humanSelection == null) {
            return '';
        }
        let computerSelection = getComputerChoice();

        //Plays a round
        playRound(humanSelection, computerSelection);
    }

    //Checks who was the best of 5 games and respondes with appropriate message
    if (humanScore > computerScore) {
        alert('Congratz, you won the game!')
    } else if (humanScore < computerScore) {
        alert('Better luck next time!')
    } else {
        console.log('Nobody won...')
    }

    //Resets the scores for next game
    humanScore = 0
    computerScore = 0

}


//Write a function that plays a round 
function playRound(humanChoice, computerChoice) {

    //Humanchoice parameter should be case-insensitive
    let humanChoiceLower = humanChoice.toLowerCase()
    let computerChoiceLower = computerChoice.toLowerCase()

    //Check the winner and respond with appropriate message
    //Increment score by 1
    switch (humanChoiceLower + computerChoiceLower) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            humanScore++
            return `You win! ${humanChoice} beats ${computerChoice}`
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            computerScore++
            return `You lose! ${computerChoice} beats ${humanChoice}`
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            return `It's a draw!`
            break;
        default:
            return 'No score'
            break;
    }



}



//write a function that returns rock, paper or scissors
function getComputerChoice() {

    //Generate rondom number between 1 and 3 and store it in a variable
    const randNum = Math.floor(Math.random() * 3) + 1

    let choice = ''
    //Convert the random number to Rock, Paper or Scissors
    switch (randNum) {
        case 1:
            choice = 'Rock'
            break;
        case 2:
            choice = 'Paper'
            break;
        case 3:
            choice = 'Scissors'
            break;
        default:
            break;

    }
    //Return the choice
    return choice
}

//Write a function that takes the user choice and returns it
function getHumanChoice() {

    //Open a prompt for the user to enter their choice and store it to a variabel
    const userChoice = prompt('Rock, paper or scissors?', '')
    if (typeof userChoice != 'string') {
        return null;
    }

    //Check if the answer is valid
    if (userChoice.toLowerCase() != 'rock' && userChoice.toLowerCase() !== 'paper' && userChoice.toLowerCase() != 'scissors') {

        alert(`${userChoice} is not a valid choice!`)
        return ''
    }

    //Return the choice
    console.log(userChoice)
    return userChoice

}