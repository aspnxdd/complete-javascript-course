'use strict';

// Selecting Score Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const btnRollDice = document.getElementById('roll-dice');
const btnHold = document.getElementById('hold');
const btnNewGame = document.getElementById('btn-newgame');
const diceEl = document.getElementById('dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const currentscore0 = document.getElementById('current--0');
const currentscore1 = document.getElementById('current--1');


// Initiating variables
let diceNumber = 0;
let score = 0;
let activePlayer = 0;
const scores = [0, 0];


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Function to roll the dice and displays correct picture
const rollDice = () => {
    diceEl.classList.remove('hidden');
    diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${diceNumber}.png`;
    updateCurrentScore();
}

// Function to hold
const hold = () => {
    scores[`${activePlayer}`] += score;
    if (scores[`${activePlayer}`] >= 100) win();
    document.getElementById(`score--${activePlayer}`).textContent = scores[`${activePlayer}`];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    switchPlayer();
}
// Function to switch player
const switchPlayer = () => {
    activePlayer = activePlayer === 0 ? 1 : 0;
    console.log(activePlayer)
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

// Function to start new game
const newGame = () => {
    diceNumber = 0;
    score = 0;
    activePlayer = 0;
    scores[0] = 0;
    scores[1] = 0;
    diceEl.classList.add('hidden');
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentscore1.textContent = 0;
    currentscore0.textContent = 0;
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}

const win = () => {
    alert(`Player ${activePlayer+1} has won!`)
    newGame();
}

//Check for dice===1
const updateCurrentScore = () => {
    if (diceNumber !== 1) {
        // Add dice to the current score
        score += diceNumber;
        if (score >= 100) win();
        document.getElementById(`current--${activePlayer}`).textContent = score;
    } else {
        // Switch to next player
        score = 0;
        document.getElementById(`current--${activePlayer}`).textContent = score;
        switchPlayer();

    }
}

btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);
btnNewGame.addEventListener('click', newGame);