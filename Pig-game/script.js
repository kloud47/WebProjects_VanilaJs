'use strict';

//Selecting Element:
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;// stores the current state of game:

diceEl.classList.add('hidden');

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function() {
    if(playing) {
        // 1. Generating a random dice roll:
        const dice = Math.trunc(Math.random() * 6) + 1;
    
        // 2. Display dice:
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Check for rolled 1:
        if(dice !== 1) {
            //Add dice to the current score:
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player:
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if(playing) {
        // 1. Add current score to active player's Total:
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        // 2. Check if player's score is >= 100:
        if(score[activePlayer] >= 50) {
            // Finish the game:
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // 3. Switch to next player:
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', function() {
    currentScore = 0; activePlayer = 0;
    score[0] = 0; score[1] = 0;
    playing = true;
    diceEl.classList.add('hidden');

    score0El.textContent = 0;
    score1El.textContent = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
})

