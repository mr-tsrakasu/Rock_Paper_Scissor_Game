const rock = document.querySelector('.playerSelectionRock')
const paper = document.querySelector('.playerSelectionPaper')
const scissor = document.querySelector('.playerSelectionScissor')
const playerName = ''
let randomChoice = Math.floor(Math.random() * choices.length)
let computerChoice = choices[randomChoice]
let userChoice = ''
let user = 0
let agorkoli = 0

function playRound() {
	
};

function generateRandomChoice() {
    randomChoice = Math.floor(Math.random() * choices.length)
    computerChoice = choices[randomChoice]
    return computerChoice
};