const preparingSeconds = 3;
const MIN_NUMBER = 0;
const MAX_NUMBER = 50;
const MAX_INPUT = 3;
const CORRECT_POINTS = 15;
const PENALTY_POINTS = -5;
const TIME_START = 60;
const EQUATIONS = ['-', '+', '*', '÷'];
const MAX_COMPLEX_NUM = 10;
const MIN_DIVIDE = 1;

const win_Audio = new Audio('correct_Sound.mp3');
const lost_Audio = new Audio('incorrect_Sound.mp3');
const countdown_Audio = new Audio('countdown_Sound.mp3');
const timesup_Audio = new Audio('timesup_Sound.mp3');
const timeslow_Audio = new Audio('timeLow_Sound.mp3');
let playerScore = 0;
let answer = '';

//NEED IS CORRECT INDEX 

document.getElementById('buttonStart').addEventListener('click', startGame);
document.addEventListener('keydown', event => {
    setAnswers(event.key);
})

function setAnswers(event){
    if(document.getElementById('questionDisplay').textContent == 'GAME OVER!' || document.getElementById('questionDisplay').textContent == ''){
    }
    else{
        switch(true){
            case event == 1:
                if(answer.length >= MAX_INPUT){
                    break;
                }
                else{
                    answer += '1';
                    document.getElementById('questionDisplay').textContent += event;
                    break;
                }
            case event == 2:
                if(answer.length >= MAX_INPUT){
                    break;
                }
                else{
                    answer += '2';
                    document.getElementById('questionDisplay').textContent += event;
                    break;
                }
            case event == 3:
                if(answer.length >= MAX_INPUT){
                    break;
                }
                else{
                    answer += '3';
                    document.getElementById('questionDisplay').textContent += event;
                    break;
                }
            case event == 4:
                if(answer.length >= MAX_INPUT){
                    break;
                }
                else{
                    answer += '4';
                    document.getElementById('questionDisplay').textContent += event;
                    break;
                }
            case event == 5:
                if(answer.length >= MAX_INPUT){
                    break;
                }
                else{
                    answer += '5';
                    document.getElementById('questionDisplay').textContent += event;
                    break;
                }
            case event == 6:
                if(answer.length >= MAX_INPUT){
                    break;
                }
                else{
                    answer += '6';
                    document.getElementById('questionDisplay').textContent += event;
                    break;
                }
            case event == 7:
                if(answer.length >= MAX_INPUT){
                    break;
                }
                else{
                    answer += '7';
                    document.getElementById('questionDisplay').textContent += event;
                    break;
                }
            case event == 8:
                if(answer.length >= MAX_INPUT){
                    break;
                }
                else{
                    answer += '8';
                    document.getElementById('questionDisplay').textContent += event;
                    break;
                }
            case event == 9:
                if(answer.length >= MAX_INPUT){
                    break;
                }
                else{
                    answer += '9';
                    document.getElementById('questionDisplay').textContent += event;
                    break;
                }
            case event == 'Backspace':
                if(answer.length > 0){
                    answer = answer.slice(0, answer.length - 1);
                    const text = document.getElementById('questionDisplay').textContent;
                    const newAnswer = text.slice(0, -1);
                    document.getElementById('questionDisplay').textContent = newAnswer;
                }
                break;
            case event == 'Enter':
                isCorrect();
                break;
            case event == 0:
                if(answer.length > 0){
                    if(answer[0] != 0){
                        if(answer.length >= MAX_INPUT){
                            break;
                        }
                        else{
                            answer += '0';
                            document.getElementById('questionDisplay').textContent += event;
                            break;
                        }
                    }
                }
                else{
                    answer += '0';
                    document.getElementById('questionDisplay').textContent += event;
                    break;
                }
            default:
                break;
        }
    }
}

function isCorrect(){
    const theIndex = document.getElementById('questionDisplay').textContent.indexOf('=');
    let theQuestions = document.getElementById('questionDisplay').textContent.slice(0, theIndex - 1);
    theQuestions = theQuestions.replace('÷', '/');
    theQuestions = theQuestions.replace('x', '*');
    let theAnswer = eval(theQuestions);
    if(answer == theAnswer){
        playerScore += CORRECT_POINTS;
        document.getElementById('updateScore').textContent = `+ ${CORRECT_POINTS}`;
        document.getElementById('updateScore').style.color = '#248B37';
        win_Audio.play();
    }
    else{
        if(playerScore + PENALTY_POINTS >= 0){
            playerScore += PENALTY_POINTS;
            document.getElementById('updateScore').textContent = PENALTY_POINTS;
            document.getElementById('updateScore').style.color = '#CF0B0E';
            lost_Audio.play();
        }
        else{
            document.getElementById('updateScore').textContent = PENALTY_POINTS;
            document.getElementById('updateScore').style.color = '#CF0B0E';
            playerScore = 0;
            lost_Audio.play();
        }
    }
    document.getElementById('pointsDisplay').textContent = playerScore;
    answer = '';
    setNewQuestion();
}

function setNewQuestion(){
    let theEquation = EQUATIONS[(Math.floor(Math.random() * EQUATIONS.length))];
    if(theEquation == '-'){
        let firstNumber = Math.floor(Math.random() * ((MAX_NUMBER - MIN_NUMBER) + 1) + MIN_NUMBER);
        let secondNumber = Math.floor(Math.random() * ((firstNumber - MIN_NUMBER) + 1) + MIN_NUMBER);
        document.getElementById('questionDisplay').textContent = `${firstNumber} - ${secondNumber} = `;
    }
    else if(theEquation == '+'){
        let firstNumber = Math.floor(Math.random() * ((MAX_NUMBER - MIN_NUMBER) + 1) + MIN_NUMBER);
        let secondNumber = Math.floor(Math.random() * ((MAX_NUMBER - MIN_NUMBER) + 1) + MIN_NUMBER);
        document.getElementById('questionDisplay').textContent = `${firstNumber} + ${secondNumber} = `;
    }
    else if(theEquation == '*'){
        let firstNumber = Math.floor(Math.random() * ((MAX_COMPLEX_NUM - MIN_NUMBER) + 1) + MIN_NUMBER);
        let secondNumber = Math.floor(Math.random() * ((MAX_COMPLEX_NUM - MIN_NUMBER) + 1) + MIN_NUMBER);
        document.getElementById('questionDisplay').textContent = `${firstNumber} * ${secondNumber} = `;
    }
    else if(theEquation == '÷'){
        let secondNumber = Math.floor(Math.random() * ((MAX_COMPLEX_NUM - MIN_DIVIDE) + 1) + MIN_DIVIDE);
        let firstNumber = secondNumber * Math.floor(Math.random() * ((MAX_COMPLEX_NUM - MIN_DIVIDE) + 1) + MIN_DIVIDE);
        document.getElementById('questionDisplay').textContent = `${firstNumber} ÷ ${secondNumber} = `;
    }
}

function startGame(){
    playerScore = 0;
    document.getElementById('pointsDisplay').textContent = playerScore;
    document.getElementById('buttonStart').removeEventListener('click', startGame);
    document.getElementById('titleOpening').classList.add('startGameAnimationClass');
    setTimeout(function(){
        document.getElementById('titleOpening').classList.remove('startGameAnimationClass');
        document.getElementById('titleOpening').style.visibility = 'hidden';
    }, 1000);

    let repeat = preparingSeconds;
    function repeating(){
        repeat--;
        if(repeat === 0){
            setTimeout(function(){
                document.getElementById('buttonStart').classList.remove('startGameAnimationClass');
                document.getElementById('buttonStart').style.visibility = 'hidden';
                document.getElementById('secondsDisplay').textContent = TIME_START;
                document.getElementById('timers').style.visibility = 'visible';
                setTimeout(decreaseTime, 1000);
                setNewQuestion();
            }, preparingSeconds * 700)
        }
        document.getElementById('buttonStart').classList.add('startGameAnimationClass');
        setTimeout(function(){
            countdown_Audio.play();
            document.getElementById('buttonStart').textContent = String(repeat + 1);
            document.getElementById('buttonStart').style.color = 'black';
        }, 1000);
        setTimeout(function(){
            if(repeat > 0){
                repeating();
            }
        }, 1000)
    }
    if (repeat > 0){
        repeating();
    }
}

function input_Number(){
    if(document.getElementById('questionDisplay').textContent == 'GAME OVER!' || document.getElementById('questionDisplay').textContent == ''){
    }
    else{
        
    }
}

function decreaseTime(){
    let timeLeft = document.getElementById('secondsDisplay').textContent;
    if(timeLeft - 1 >= 0){
        if(timeLeft == 5){
            timeslow_Audio.play();
        }
        document.getElementById('secondsDisplay').textContent = timeLeft - 1;
        setTimeout(decreaseTime, 1000);
    }
    else{
        gameEnded();
    }
}

function gameEnded(){
    const highscoreDisplay = document.getElementById('highscoreDisplay');
    timesup_Audio.play();
    document.getElementById('questionDisplay').textContent = 'GAME OVER!';
    document.getElementById('updateScore').textContent = '';
    if(highscoreDisplay.textContent === '-'){
        highscoreDisplay.textContent = playerScore;
    }
    else if(highscoreDisplay.textContent < playerScore){
        highscoreDisplay.textContent = playerScore;
    }
    setTimeout(function(){
        document.getElementById('questionDisplay').textContent = '';
        document.getElementById('buttonStart').style.visibility = 'visible';
        document.getElementById('titleOpening').textContent = 'Click to try again!'
        document.getElementById('titleOpening').style.visibility = 'visible';
        document.getElementById('buttonStart').addEventListener('click', startGame);
        document.getElementById('buttonStart').textContent = '⚑';
        document.getElementById('buttonStart').style.color = 'rgb(17, 177, 17)';
    }, 3500);
}