'use strict';
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const currentElement = [document.querySelector('#current--0'),document.querySelector('#current--1')];
const totalElement = [document.querySelector('#score--0'),document.querySelector('#score--1')];
const playerActive = document.querySelector('.player--active');
const playerWinner = document.querySelector('.player--winner');

//Player Main Elements
let activePlayer;
let totalScores,currentScores;

function init() {
    currentScores = [0,0];
    totalScores = [0,0];
    totalElement[0].textContent = 0;
    totalElement[1].textContent = 0;
    activePlayer = 0;
}
init();

function switchPlayer() {
    activePlayer = !activePlayer;
}

buttonRoll.addEventListener('click',function() {
    let random = Math.floor(Math.random() * 6) + 1;
    dice.src = `dice-${random}.png`;
    if(random>1) {
        currentScores[activePlayer] += random;
        currentElement[activePlayer].textContent = currentScores[activePlayer];
    }
    else {
        currentScores[activePlayer] = 0;
    }
});

buttonHold.addEventListener('click',function() {
    totalScores[activePlayer] += currentScores[activePlayer];
    totalElement[activePlayer].textContent = totalScores[activePlayer];
    switchPlayer();
});

