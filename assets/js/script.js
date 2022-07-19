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

// Answer Buttons //

const answerOne = document.getElementById('answer-one');
const answerTwo = document.getElementById('answer-two');
const answerThree = document.getElementById('answer-three');
const answerFour = document.getElementById('answer-four');

let currentQuestion = {};
let availableQuestions = [];
let quizScore = 0;
const maxQuestions = 10;
const scorePoints = 1;

// Event Listeners //

answerOne.addEventListener('click', checkAnswerOne);
answerTwo.addEventListener('click', checkAnswerTwo);
answerThree.addEventListener('click', checkAnswerThree);
answerFour.addEventListener('click', checkAnswerFour);

// Questions //

const questions = [
    {
        question: 'What movie is this track from?',
        audio: 'one.mp3',
        answer1: 'Home Alone',
        answer2: 'Richie Rich',
        answer3: 'Mrs Doubtfire',
        answer4: 'The Polar Express',
        correct: 'Home Alone'
    },
    {
        question: 'What movie is this track from?',
        audio: 'two.mp3',
        answer1: 'Pans Labyrinth',
        answer2: 'The Dark Crystal',
        answer3: 'The Lord of the Rings: The Fellowship of the Ring',
        answer4: 'The Hobbit: An Unexpected Journey',
        correct: 'The Lord of the Rings: The Fellowship of the Ring'
    },
    {
        question: 'What movie is this track from?',
        audio: 'three.mp3',
        answer1: 'The Boy in the Striped Pyjamas',
        answer2: 'Schindlers List',
        answer3: 'The Pianist',
        answer4: 'Saving Private Ryan',
        correct: 'Schindlers List'
    },
    {
        question: 'What movie is this track from?',
        audio: 'four.mp3',
        answer1: 'Star Wars: Attack of the Clones',
        answer2: 'Star Wars: The Phantom Menace',
        answer3: 'Star Wars: A New Hope',
        answer4: 'Star Wars: The Empire Strikes Back',
        correct: 'Star Wars: Attack of the Clones'
    },
    {
        question: 'What movie is this track from?',
        audio: 'five.mp3',
        answer1: 'A Beautiful Mind',
        answer2: 'American Beauty',
        answer3: 'Requiem for a Dream',
        answer4: 'Good Will Hunting',
        correct: 'American Beauty'
    },
    {
        question: 'What movie is this track from?',
        audio: 'six.mp3',
        answer1: 'Sleepy Hollow',
        answer2: 'Corpse Bride',
        answer3: 'The Nightmare Before Christmas',
        answer4: 'Edward Scissorhands',
        correct: 'Edward Scissorhands' 
    },
    {
        question: 'What movie is this track from?',
        audio: 'seven.mp3',
        answer1: 'Spirited Away',
        answer2: 'Princess Mononoke',
        answer3: 'Howls Moving Castle',
        answer4: 'My Neighbour Totoro',
        correct: 'Howls Moving Castle' 
    },
    {
        question: 'What movie is this track from?',
        audio: 'eight.mp3',
        answer1: 'Big',
        answer2: 'The Terminal',
        answer3: 'The Truman Show',
        answer4: 'Forrest Gump',
        correct: 'Forrest Gump' 
    },
    {
        question: 'What movie is this track from?',
        audio: 'nine.mp3',
        answer1: 'Jurassic Park',
        answer2: 'Independence Day',
        answer3: 'E.T',
        answer4: 'Star Wars: A New Hope',
        correct: 'Jurassic Park' 
    },
    {
        question: 'What movie is this track from?',
        audio: 'ten.mp3',
        answer1: 'Troy',
        answer2: 'Gladiator',
        answer3: 'Alexander',
        answer4: 'The Patriot',
        correct: 'Gladiator' 
    },
    {
        question: 'What movie is this track from?',
        audio: 'eleven.mp3',
        answer1: 'Indiana Jones',
        answer2: 'Jungle Cruise',
        answer3: 'Pirates of the Caribbean',
        answer4: 'National Treasure',
        correct: 'Pirates of the Caribbean' 
    },
    {
        question: 'What movie is this track from?',
        audio: 'twelve.mp3',
        answer1: 'Superman',
        answer2: 'Guardians of the Galaxy',
        answer3: 'Thor',
        answer4: 'The Avengers',
        correct: 'The Avengers' 
    }
];

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

function startGame() {
    console.log('game started!');
    quizScore = 0;
    availableQuestions = [...questions];
    shuffle(availableQuestions);
    // Take first question in available questions array and put it in current question object //
    console.log(availableQuestions[0]);
    currentQuestion = availableQuestions[0];
    showQuestion(currentQuestion);
}

startGame();

// Display Current Question //

function showQuestion(currentQuestion) {
    questionElement.innerText = currentQuestion.question;
    player.setAttribute('src', "assets/audio/" + currentQuestion.audio);
    answerOne.innerText = currentQuestion.answer1;
    answerTwo.innerText = currentQuestion.answer2;
    answerThree.innerText = currentQuestion.answer3;
    answerFour.innerText = currentQuestion.answer4;
}

// Next Question //

function nextQuestion() {

}

// Question Randomizer //
// Fisher-Yates Shuffle //

function shuffle(availableQuestions) {
    let currentIndex = availableQuestions.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [availableQuestions[currentIndex], availableQuestions[randomIndex]] = [availableQuestions[randomIndex], availableQuestions[currentIndex]];
    }
    return availableQuestions;
}

// Last Question //

function lastQuestion() {

}

// Answer Question //

function checkAnswerOne() {
    if (answerOne.innerHTML === currentQuestion.correct) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
}

function checkAnswerTwo() {
    if (answerTwo.innerHTML === currentQuestion.correct) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
}

function checkAnswerThree() {
    if (answerThree.innerHTML === currentQuestion.correct) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
}

function checkAnswerFour() {
    if (answerFour.innerHTML === currentQuestion.correct) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
}

console.log(currentQuestion.correct);
console.log(answerFour.innerHTML);


// Time Out //

function timeOut() {

}

// End //

function end() {

}

// Stop Music //

function stopMusic () {

}
