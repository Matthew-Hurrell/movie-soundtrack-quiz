const player = document.getElementById('player');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const volumeDown = document.getElementById('volume-down');
const volumeUp = document.getElementById('volume-up');
const audio = document.getElementsByTagName('audio');
const progressBar = document.getElementsByClassName('progress-bar');
const progressBarText = document.getElementsByClassName('progress-bar-text');
const score = document.getElementsByClassName('score');
const questionElement = document.getElementById('question');
const timerElement = document.getElementById('timer');

// Questions //

const questions = [
    {
        question: 'What movie is this track from?',
        audio: 'one.mp3',
        answer1: 'Home Alone',
        answer2: 'Richie Rich',
        answer3: 'Mrs Doubtfire',
        answer4: 'The Polar Express'
    }
]

let quizScore = 0;


// Audio Controls //

play.addEventListener('click', () => {
    player.play();
})

pause.addEventListener('click', () => {
    player.pause();
})

volumeDown.addEventListener('click', () => {
    player.volume -= 0.1;
})

volumeUp.addEventListener('click', () => {
    player.volume += 0.1;
})

function showQuestion(question) {
    console.log(questions[0].question);
    questionElement.innerText = questions[0].question;
} 



showQuestion();

// Countdown Timer //

let timer = 29;

function countdownTimer() {
    timerElement.innerText = timer;
    --timer;
    if (timer === -1) {
        console.log('You lose!');
        clearInterval(intervalTimer);
    }
}

const intervalTimer = setInterval(countdownTimer, 1000);

