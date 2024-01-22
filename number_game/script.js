let ans=Math.trunc(Math.random()*20)+1
var score=20
var highScore=0

const displayMessage=function(message){
    document.querySelector('.message').textContent=message
}

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value)
    if(!guess){
        displayMessage('Please enter a number! The field cannot be empty')
    }
    //When player wins
    if(guess===ans){
        displayMessage('🎉 Correct Answer')
        document.querySelector('.number').textContent=guess
        if(score>highScore){
            highScore=score
            document.querySelector('.highscore').textContent=highScore
        }
        score+=1
        document.querySelector('.highscore').textContent=highScore
        document.querySelector('.score').textContent=score
        document.querySelector('body').style.backgroundColor='green'
        document.querySelector('.number').style.width='30rem'
    //When guess is too wrong
    }else if(guess!==ans){
        if(score>1){
            displayMessage(guess>ans ? 'Try Lower📉 number': 'Try Higher 📈 number')
            score--
            document.querySelector('.score').textContent=score
        }else{
            displayMessage('You Lose')
            document.querySelector('body').style.backgroundColor='red'
        }
    }else if(guess>20){
        displayMessage('You fool! Enter a number between 1 and 20')
    }
})

document.querySelector('.again').addEventListener('click',function(){
    ans=Math.trunc(Math.random()*20)+1
    score=20
    document.querySelector('.score').textContent=score
    displayMessage('Start guessing...')
    document.querySelector('.number').value='?'
    document.querySelector('.guess').value=''
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width='15rem'
})