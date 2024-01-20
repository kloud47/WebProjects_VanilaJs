'use strict';

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

////////(For check button)//////////////////
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    if( !guess ) {
        displayMessage("Wrong Guess!!!");
    }
    //When player wins:
    else if(guess === secretNumber) {
        displayMessage("🥳 Correct Guess...");
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    ////(If guess is wrong)//////////
    else if(guess !== secretNumber && score > 1) { 
        let ans = guess > secretNumber ? "📈 Too high?" : "📉 Too low?";
        displayMessage(ans);
        score--;
        document.querySelector('.score').textContent = score;
    }

    // when player looses
    else {
        displayMessage("😵 You loose");
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#F14045';
        document.querySelector('.number').style.width = '30rem';
    }
});

/////////(For Again Button)/////////////////////
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = null;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222'
})