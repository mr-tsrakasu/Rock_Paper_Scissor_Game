const rock = document.querySelector('.playerSelectionRock')
const paper = document.querySelector('.playerSelectionPaper')
const scissor = document.querySelector('.playerSelectionScissor')
const gameText = document.querySelector('.gameText')
const userScore = document.querySelector('.userScore')
const computerScore = document.querySelector('.computerScore')
const winner = document.querySelector('.winnerText')
const reset = document.querySelector('.reset')
const userSelection = document.querySelector('.uSelection')
const computerSelection = document.querySelector('.cSelection')
const choices = ['R', 'P', 'S']
let userChoice = ''
let user = 0
let computer = 0


function generateRandomChoice() {
    randomChoice = Math.floor(Math.random() * choices.length)
    computerChoice = choices[randomChoice]
    return computerChoice
};

function resetEverything() {
    gameText.textContent = ("")
    computerScore.textContent = (0)
    userScore.textContent = (0)
    winner.textContent = ("")
    userSelection.textContent = ("")
    computerSelection.textContent = ("")
    user = 0
    computer = 0
}

rock.addEventListener('click', function() {
    userChoice = 'R'
    computerChoice = generateRandomChoice()

    if ( userChoice === computerChoice ) {
        userSelection.textContent = (userChoice)
        computerSelection.textContent = (computerChoice)
        console.log("It's a tie!")
        gameText.textContent = ("It's a tie!!")
    }
    else if (computerChoice == 'P') {
        userSelection.textContent = (userChoice)
        computerSelection.textContent = (computerChoice)
        console.log( "Paper beats Rock" )
        gameText.textContent = ("Paper beats Rock")
       computer += 1
       computerScore.textContent = (computer)
       if(user == 5){
            winner.textContent = ("GAME OVER, PLAYER WINS. Click on reset to start a new game")
            user = 0
        }
        else if(computer == 5){
            winner.textContent = ("GAME OVER, COMPUTER WINS. Click on reset to start a new game")
            computer = 0
        }
    }
    else if (computerChoice == 'S') {
        userSelection.textContent = (userChoice)
        computerSelection.textContent = (computerChoice)
        console.log( "Rock beats Scissors" )
        gameText.textContent = ("Rock beats Scissors")
        user += 1
        userScore.textContent = (user)
        if(user == 5){
            winner.textContent = ("GAME OVER, PLAYER WINS. Click on reset to start a new game")
            user = 0
        }
        else if(computer == 5){
            winner.textContent = ("GAME OVER, COMPUTER WINS. Click on reset to start a new game")
            computer = 0
        }
    }
})

paper.addEventListener('click', function(){
    userChoice = 'P'
    computerChoice = generateRandomChoice()

    if (computerChoice == userChoice){
        userSelection.textContent = (userChoice)
        computerSelection.textContent = (computerChoice)
        console.log("It's a tie!")
        gameText.textContent = ("It's a tie!!")
    }
    else if (computerChoice == 'S') {
        userSelection.textContent = (userChoice)
        computerSelection.textContent = (computerChoice)
        console.log("Scissor beats Paper")
        gameText.textContent = ("Scissor beats Paper")
        computer += 1
        computerScore.textContent = (computer)
        if(user == 5){
            winner.textContent = ("GAME OVER, PLAYER WINS. Click on reset to start a new game")
            user = 0
        }
        else if(computer == 5){
            winner.textContent = ("GAME OVER, COMPUTER WINS. Click on reset to start a new game")
            computer = 0
        }
    }
    else if (computerChoice == 'R'){
        userSelection.textContent = (userChoice)
        computerSelection.textContent = (computerChoice)
        console.log("Paper beats Rock")
        gameText.textContent = ("Paper beats Rock")
        user += 1
        userScore.textContent = (user)
        if(user == 5){
            winner.textContent = ("GAME OVER, PLAYER WINS. Click on reset to start a new game")
            user = 0
        }
        else if(computer == 5){
            winner.textContent = ("GAME OVER, COMPUTER WINS. Click on reset to start a new game")
            computer = 0
        }
    }
})

scissor.addEventListener('click', function(){
     userChoice = 'S'
     computerChoice = generateRandomChoice()

     if (computerChoice == userChoice){
        userSelection.textContent = (userChoice)
        computerSelection.textContent = (computerChoice)
        console.log("It's a tie!")
        gameText.textContent = ("It's a tie!!")
     }
     else if(computerChoice == 'R'){
        userSelection.textContent = (userChoice)
        computerSelection.textContent = (computerChoice)
        console.log("Rock beats Scissor")
        gameText.textContent = ("Rock beats Scissor")
        computer += 1
        computerScore.textContent = (computer)
        if(user == 5){
            winner.textContent = ("GAME OVER, PLAYER WINS. Click on reset to start a new game")
            user = 0
        }
        else if(computer == 5){
            winner.textContent = ("GAME OVER, COMPUTER WINS. Click on reset to start a new game")
            computer = 0
        }
     }
     else if(computerChoice == 'P'){
        userSelection.textContent = (userChoice)
        computerSelection.textContent = (computerChoice)
        console.log("Scissor beats Paper")
        gameText.textContent = ("Scissor beats Paper")
        user += 1
        userScore.textContent = (user)
        if(user == 5){
            winner.textContent = ("GAME OVER, PLAYER WINS. Click on reset to start a new game")
            user = 0
        }
        else if(computer == 5){
            winner.textContent = ("GAME OVER, COMPUTER WINS. Click on reset to start a new game")
            computer = 0
        }
     }
})

reset.addEventListener('click', function(){
    resetEverything()
})