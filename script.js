const result = document.querySelector('.result')
const humanScore = document.querySelector('.human-score')
const machineScore = document.querySelector('.machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playThegame(humanChoice, playMachine())
}


/*ESCOLHAS DA MAQUINA */
const playMachine = () => {
    const coices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return coices[randomNumber]
}

const playThegame = (human, machine) => {

    console.log('humano:' + human + 'maquina:' + machine)

    if (human === machine) {
        result.innerHTML = 'Empatou!'
    }
    /*POSSIBILIDADE DE VITORIA */
    else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) 
    /*RESULTADO DO HUMANO */
    {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você GANHOU!'
    }
    /*RESULTADO DA MAQUINA */
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você PERDEU!'
    }
}
