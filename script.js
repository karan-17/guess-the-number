'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!'; 

// document.querySelector('.guess').value = 23;
// document.querySelector('.number').value = 17;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.score').value=20;
// let val = document.querySelector('.score').value;

// document.querySelector('.check').addEventListener('click', function(){
//     console.log(document.querySelector('.guess').value);
//     if(document.querySelector('.guess').value === document.querySelector('.number').value){
//         document.querySelector('.message').textContent = 'Correct Number!'; 
//         document.querySelector('.number').value = document.querySelector('.guess').value;
//         console.log(document.querySelector('.score').value);
//     } else if(document.querySelector('.guess').value > document.querySelector('.number')){
//         document.querySelector('.message').textContent = 'Too High!'; 
//         document.querySelector('.score').value = val--;
//         document.querySelector('.score').textContent = val;
//         console.log(document.querySelector('.score').value);
//     }else if(document.querySelector('.guess').value < document.querySelector('.number')){
//         document.querySelector('.message').textContent = 'Too Low!'; 
//         document.querySelector('.score').value = val--;
//         document.querySelector('.score').textContent = val;
//         console.log(document.querySelector('.score').value);
//     }
// });

// if(document.querySelector('.score').value === 0){
//     document.querySelector('.message').textContent = 'You Lost the Game!'; 
//     document.querySelector('.number').value = document.querySelector('.guess').value;
//     console.log(document.querySelector('.score').value);
// }

const secretNumber = Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore;

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = "15rem";
})

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(score>1){
        if(!guess){
            document.querySelector('.message').textContent = 'No Number!';  
        }
    
        else if(guess === secretNumber){
            document.querySelector('.message').textContent = 'Correct Number!';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = "30rem";
            highScore = score;
        }
        else if(guess > secretNumber){
            document.querySelector('.message').textContent = 'Too High!';
            // document.querySelector('.number').textContent = secretNumber;
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#222';
        }
        else if(guess < secretNumber){
            document.querySelector('.message').textContent = 'Too Low!';
            // document.querySelector('.number').textContent = secretNumber;
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#222';
        }
    }
    else{
        document.querySelector('.message').textContent = 'You Lost the Game!';
        document.querySelector('.score').textContent = 0;
        //change color to red
        document.querySelector('body').style.backgroundColor = 'red';
    }
});