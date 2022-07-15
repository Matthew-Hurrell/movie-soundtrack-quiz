const player = document.getElementById('player');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const volumeDown = document.getElementById('volume-down');
const volumeUp = document.getElementById('volume-up');
const audio = document.getElementsByTagName('audio');
const progressBar = document.getElementsByClassName('progress-bar');
const progressBarText = document.getElementsByClassName('progress-bar-text');
const score = document.getElementsByClassName('score');
const questionElement = document.getElementsByClassName('question');

// Questions //

const questions = [
    {
        question: 'Testing!',
        audio: 'one.mp3',
        answer1: 'Home Alone',
        answer2: 'Richie Rich',
        answer3: 'Mrs Doubtfire',
        answer4: 'The Polar Express'
    }
]

let quizScore = 0;
let countdownTimer = 30;


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
    questionElement.innerText = questions[0].question;
    console.log(questions[0].question);
}

showQuestion();