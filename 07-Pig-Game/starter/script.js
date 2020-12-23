'use strict';

// Selecting Score Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const btnRollDice = document.getElementById('roll-dice');
const diceEl = document.getElementById('dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const currentscore0 = document.getElementById('current--0');
const currentscore1 = document.getElementById('current--1');


// Initiating variables
let diceNumber = 0;
let score = 0;


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

btnRollDice.addEventListener('click', rollDice);

//Check for dice===1
const updateCurrentScore = () => {
    if (diceNumber !== 1) {
        console.log(diceNumber);
        score += diceNumber;
        // Add dice to the current score
        if (player0.classList.contains('player--active')) {
            currentscore0.textContent = score;
        }
    } else {
        score = 0;
        // Switch to next player
    }
}