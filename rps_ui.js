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
let computerChoice = ""
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
    //winner.textContent = ("")
    userSelection.textContent = ("")
    computerSelection.textContent = ("")
    user = 0
    computer = 0
}

function displayChoices() {
    userSelection.textContent = (userChoice)
    computerSelection.textContent = (computerChoice)
}

function compareChoices(us, comp){
    if (comp === us){
        gameText.textContent = ("It's a tie!! ")
    }
    else if (us === 'R' && comp === 'P'){
        computer++
        gameText.textContent = ("Computer wins, Paper beats Rock")
    }
    else if (us === 'R' && comp === 'S'){
        user++
        gameText.textContent = ("You win, Rock beats Scissors")
    }
    else if (us === 'P' && comp === 'R'){
        user++
        gameText.textContent = ("You win, Paper beats Rock")
    }
    else if (us === 'P' && comp === 'S'){
        computer++
        gameText.textContent = ("Computer wins, Scissors beats Rock")
    }
    else if (us === 'S' && comp === 'R'){
        computer++
        gameText.textContent = ("Computer wins, Rock beats Scissors")
    }
    else if (us === 'S' && comp === 'P'){
        user++
        gameText.textContent = ("User wins, Scissors beats Paper")
    }
    else gameText.textContent = ("Something Fatale occurred, please reset the game.")
}

function checkWinner(compScore, usScore){
    if(compScore === 5){
        winner.textContent = ("GAME OVER, COMPUTER WINS! Click on reset to start a new game")
        resetEverything()
    }
    else if(usScore === 5){
        winner.textContent = ("GAME OVER, USER WINS!! Click on reset to start a new game")
        resetEverything()
    }
    else winner.textContent = ("")
}

function displayScores(){
    userScore.textContent = (user)
    computerScore.textContent = (computer)
}

rock.addEventListener('click', function() {
    userChoice = 'R'
    computerChoice = generateRandomChoice()
    displayChoices()
    compareChoices(userChoice, computerChoice)
    checkWinner(computer, user)
    displayScores()
})

paper.addEventListener('click', function(){
    userChoice = 'P'
    computerChoice = generateRandomChoice()
    compareChoices(userChoice, computerChoice)
    checkWinner(computer, user)
    displayChoices()
    displayScores()
})

scissor.addEventListener('click', function(){
    userChoice = 'S'
    computerChoice = generateRandomChoice()
    compareChoices(userChoice, computerChoice)
    checkWinner(computer, user)
    displayChoices()
    displayScores()
})

reset.addEventListener('click', function(){
    resetEverything()
})