const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(choice =>{
    choice.addEventListener("click", (e) =>{
        userChoice= e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
    })
})

function generateComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3 + 1)

    if(randomNum === 1){
        computerChoice = "rock"
    }
    if(randomNum ===2){
        computerChoice = "paper"
    }
    if(randomNum ==3){
        computerChoice = "scissors"
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = "its a draw!"
    }

    if(computerChoice === "rock" && userChoice ==="paper"){
        result = "you win"
    }

    if(computerChoice === "rock" && userChoice ==="scissors"){
        result = "you lost"
    }

    if(computerChoice === "paper" && userChoice ==="scissors"){
        result = "you win"
    }
    if(computerChoice === "paper" && userChoice ==="rock"){
        result = "you lost"
    }
    if(computerChoice === "paper" && userChoice ==="paper"){
        result = "its a draw"
    }
    if(computerChoice === "scissors" && userChoice ==="rock"){
        result = "you win"
    }
    if(computerChoice === "scissors" && userChoice ==="paper"){
        result = "you lose"
    }
    if(computerChoice === "scissors" && userChoice ==="scissors"){
        result = "its a draw!"
    }

    resultDisplay.innerHTML = result
}
