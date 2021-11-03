'use strict';
const buttonRoll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const currentAScoreElement = document.querySelector('#current--0'); 
const currentBScoreElement = document.querySelector('#current--1');
const totalAScoreElement = document.querySelector('#score--0'); 
const totalBScoreElement = document.querySelector('#score--1');
let totalAScore,totalBScore,currentAScore,currentBScore;

function init() {
    totalAScore = 0;
    totalBScore = 0;
    currentAScore = 0;
    currentBScore = 0;
    totalAScoreElement.textContent = 0;
    totalBScoreElement.textContent = 0;
}
init();

buttonRoll.addEventListener('click',function() {
    let random = Math.floor(Math.random() * 6) + 1;
    init();
    dice.src = `dice-${random}.png`;
});

