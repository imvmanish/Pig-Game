'use strict';
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const currentElement = [document.querySelector('#current--0'),document.querySelector('#current--1')];
const totalElement = [document.querySelector('#score--0'),document.querySelector('#score--1')];
const buttonNew = document.querySelector('.btn--new');

//Player Main Elements
const playerMain = [document.querySelector('.player--0'),document.querySelector('.player--1')];

let activePlayer;
let totalScores,currentScores;

function init() {
    currentScores = [0,0];
    totalScores = [0,0];
    totalElement[0].textContent = 0;
    totalElement[1].textContent = 0;
    dice.style.display = 'none';
    activePlayer = 0;
}
init();

function switchPlayer() {
    activePlayer = Number(!activePlayer);
    playerMain[0].classList.toggle('player--active');
    playerMain[1].classList.toggle('player--active');
}

function addScore(random) {
    currentScores[activePlayer] += random;
    currentElement[activePlayer].textContent = currentScores[activePlayer];
}

buttonRoll.addEventListener('click',function() {
    let random = Math.floor(Math.random() * 6) + 1;
    dice.src = `dice-${random}.png`;
    dice.style.display = 'inline';
    if(random>1) {
        addScore(random);
    }
    else {
        currentScores[activePlayer] = 0;
        currentElement[activePlayer].textContent = 0;
        switchPlayer();
    }
});

buttonHold.addEventListener('click',function() {
    totalScores[activePlayer] += currentScores[activePlayer];
    totalElement[activePlayer].textContent = totalScores[activePlayer];
    if(totalScores[activePlayer] >= 100) {
        playerMain[activePlayer].classList.add('player--winner');
        dice.style.display = 'none';
    }
    currentScores[activePlayer] = 0;
    currentElement[activePlayer].textContent = 0;
    switchPlayer();
});

buttonNew.addEventListener('click',function() {
    playerMain[0].classList.remove('player--winner');
    playerMain[1].classList.remove('player--winner');
    playerMain[0].classList.add('player--active');
    playerMain[1].classList.remove('player--active');
    init();
});