const result = document.querySelector('.result')
const humanScore = document.querySelector('.human-score')
const machineScore = document.querySelector('.machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

/*ENUMS*/
const GAMER_OPSTIONS = {
    PAPER: 'abacate',
    ROCK: 'rock',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {

    playThegame(humanChoice, playMachine())
}


/*ESCOLHAS DA MAQUINA */
const playMachine = () => {
    const coices = [
        GAMER_OPSTIONS.ROCK, GAMER_OPSTIONS.PAPER, GAMER_OPSTIONS.SCISSORS]
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
        (human === GAMER_OPSTIONS.PAPER && machine === GAMER_OPSTIONS.ROCK) ||
        (human === GAMER_OPSTIONS.ROCK && machine === GAMER_OPSTIONS.SCISSORS) ||
        (human === GAMER_OPSTIONS.SCISSORS && machine === GAMER_OPSTIONS.PAPER)
    )
    /*RESULTADO DO HUMANO */ {
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
