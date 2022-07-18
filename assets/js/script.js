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
const startButton = document.querySelector('#start-button');

let currentQuestion = {};
let availableQuestions = [];
let quizScore = 0;

// Event Listeners //


// Questions //

const questions = [
    {
        question: 'What movie is this track from?',
        audio: 'one.mp3',
        answer1: 'Home Alone',
        answer2: 'Richie Rich',
        answer3: 'Mrs Doubtfire',
        answer4: 'The Polar Express',
        correct: 'answer1'
    },
    {
        question: 'What movie is this track from?',
        audio: 'two.mp3',
        answer1: 'Pans Labyrinth',
        answer2: 'The Dark Crystal',
        answer3: 'The Lord of the Rings: The Fellowship of the Ring',
        answer4: 'The Hobbit: An Unexpected Journey',
        correct: 'answer3'
    },
    {
        question: 'What movie is this track from?',
        audio: 'three.mp3',
        answer1: 'The Boy in the Striped Pyjamas',
        answer2: 'Schindlers List',
        answer3: 'The Pianist',
        answer4: 'Saving Private Ryan',
        correct: 'answer2'
    },
    {
        question: 'What movie is this track from?',
        audio: 'four.mp3',
        answer1: 'Star Wars: Attack of the Clones',
        answer2: 'Star Wars: The Phantom Menace',
        answer3: 'Star Wars: A New Hope',
        answer4: 'Star Wars: The Empire Strikes Back',
        correct: 'answer1'
    },
    {
        question: 'What movie is this track from?',
        audio: 'five.mp3',
        answer1: 'A Beautiful Mind',
        answer2: 'American Beauty',
        answer3: 'Requiem for a Dream',
        answer4: 'Good Will Hunting',
        correct: 'answer2'
    },
    {
        question: 'What movie is this track from?',
        audio: 'six.mp3',
        answer1: 'Sleepy Hollow',
        answer2: 'Corpse Bride',
        answer3: 'The Nightmare Before Christmas',
        answer4: 'Edward Scissorhands',
        correct: 'answer4' 
    },
    {
        question: 'What movie is this track from?',
        audio: 'seven.mp3',
        answer1: 'Spirited Away',
        answer2: 'Princess Mononoke',
        answer3: 'Howls Moving Castle',
        answer4: 'My Neighbour Totoro',
        correct: 'answer3' 
    },
    {
        question: 'What movie is this track from?',
        audio: 'eight.mp3',
        answer1: 'Big',
        answer2: 'The Terminal',
        answer3: 'The Truman Show',
        answer4: 'Forrest Gump',
        correct: 'answer4' 
    },
    {
        question: 'What movie is this track from?',
        audio: 'nine.mp3',
        answer1: 'Jurassic Park',
        answer2: 'Independence Day',
        answer3: 'E.T',
        answer4: 'Star Wars: A New Hope',
        correct: 'answer1' 
    },
    {
        question: 'What movie is this track from?',
        audio: 'ten.mp3',
        answer1: 'Troy',
        answer2: 'Gladiator',
        answer3: 'Alexander',
        answer4: 'The Patriot',
        correct: 'answer2' 
    },
    {
        question: 'What movie is this track from?',
        audio: 'eleven.mp3',
        answer1: 'Indiana Jones',
        answer2: 'Jungle Cruise',
        answer3: 'Pirates of the Caribbean',
        answer4: 'National Treasure',
        correct: 'answer3' 
    },
    {
        question: 'What movie is this track from?',
        audio: 'twelve.mp3',
        answer1: 'Superman',
        answer2: 'Guardians of the Galaxy',
        answer3: 'Thor',
        answer4: 'The Avengers',
        correct: 'answer4' 
    }
];

// Audio Controls //

play.addEventListener('click', () => {
    player.play();
});

pause.addEventListener('click', () => {
    player.pause();
});

volumeDown.addEventListener('click', () => {
    player.volume -= 0.1;
});

volumeUp.addEventListener('click', () => {
    player.volume += 0.1;
});

function showQuestion(question) {
    console.log(questions[0].question);
    questionElement.innerText = questions[0].question;
};



showQuestion();

// Countdown Timer //

let timer = 29;

function countdownTimer() {
    timerElement.innerText = timer;
    --timer;
    if (timer === -1) {
        console.log('Time Out!');
        clearInterval(intervalTimer);
    }
}

const intervalTimer = setInterval(countdownTimer, 1000);

// Start Game //

function startGame(event) {
    window.location.href = "quiz.html";
    console.log('game started');
    countdownTimer();
}

// Next Question //

function nextQuestion() {

}

// Question Randomizer //


// Last Question //

function lastQuestion() {

}

// Answer Question //

function answerQuestion() {

}

// Time Out //

function timeOut() {

}

// End //

function end() {

}

// Stop Music //

function stopMusic () {

}
