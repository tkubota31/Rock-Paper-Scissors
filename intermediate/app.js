const userChoiceDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const gameGrid = document.getElementById("game")

gameGrid.append(userChoiceDisplay,computerChoiceDisplay,resultDisplay)

let userChoice;
let computerChoice;

const choices = ['rock','paper','scissors'];

const handleClick = (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = `User Choice: ${userChoice}`
    generateComputerChoice()
    getResult()
}

for(let i = 0; i<choices.length; i++){
    const button = document.createElement("button")
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click',handleClick)
    gameGrid.append(button)
}

const generateComputerChoice = () =>{
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = `Computer Choice: ${computerChoice}`
}

const getResult = () => {
    switch(userChoice + computerChoice){
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = "YOU WIN"
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = "YOU LOSE"
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = "TIE"
            break

    }
}
