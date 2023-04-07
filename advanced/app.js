const resultDisplay = document.querySelector("#result")
const choicesDisplay = document.querySelector("#choices")
const choices = ['rock', 'paper','scissors']

const handleClick = (e) =>{
    const userChoice = e.target.innerHTML
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    getResults(userChoice, computerChoice)
}

choices.forEach((choice) =>{
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
})

const getResults = (user,computer) =>{
    switch(user + computer){
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = `You chose ${user}, computer chose ${computer}. You win!`
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = `You chose ${user}, computer chose ${computer}. You lose!`
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = `You chose ${user}, computer chose ${computer}. It's a tie`
            break
    }
}
