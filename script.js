let val = parseInt(((Math.random()) * 100) + 1)
//console.log(val);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const prev = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let guessNum = 1;

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validate_guess(guess)
    })
}

function validate_guess(guess){
    if( isNaN(guess)){
        alert('Please enter a valid number')
    }else if( guess < 1){
        alert('Please enter a valid number')
    }else if( guess > 100){
        alert('Please enter a valid number')
    }else{
        prevGuess.push(guess)
        if(guessNum === 11){
            display_guess(guess)
            display_message(`Game Over the number was ${val}`)
            endGame()
        }else{
            display_guess(guess)
            check_guess(guess)
        }
    }   
}
function check_guess(guess){
    if(guess === val){
        display_message('You guessed it right !!')
        endGame()
    }else if(guess < val){
        display_message('Number is TOO low !!')
    }else if(guess > val){
        display_message('Number is TOO high !!')
    }
}
function display_guess(guess){
    userInput.value = ''
    prev.innerHTML += `${guess}  `
    guessNum++;
    lastResult.innerHTML = `${11 - guessNum}`
}
function display_message(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        val = parseInt(((Math.random()) * 100) + 1)
        prevGuess = []
        guessNum = 1
        prev.innerHTML = '' 
        lastResult.innerHTML = `${11 - guessNum}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}