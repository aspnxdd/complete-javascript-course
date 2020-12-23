'use strict';
/*
console.log(document.querySelector('.label-highscore').textContent);


document.querySelector('.message').textContent = 'stfu'*/
// const secretNumber = () => {
//      return 
// }
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber)
let score = 20;
const message = message => {
    document.querySelector('.message').textContent = message;
}


document.querySelector('#check-button').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess, typeof guess);

    if (!guess) { // 0 is a falsy value 
        message('Please enter a number between 1 and 20!');
        //console.log('Please enter a number!');
    } else if (guess === secretNumber) {
        if (score > Number(document.querySelector('.highscore').textContent)) {
            document.querySelector('.highscore').textContent = score;
        }
        message('GoodJob!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else /*if (guess !== secretNumber)*/ {
        score--;
        document.querySelector('.attempts').textContent = `${20-score}/20`;
        if (guess <= secretNumber) message('Too low!');
        else message('Too high!');
    }

    if (score > 0) document.querySelector('.score').textContent = score;
    else document.querySelector('.score').textContent = 'You lost the game!';
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber)
    dmessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;

})