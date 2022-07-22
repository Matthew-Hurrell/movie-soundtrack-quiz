const containerOne = document.querySelector('.container-1');
const containerTwo = document.querySelector('.container-2');
const player = document.getElementById('player');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const volumeDown = document.getElementById('volume-down');
const volumeUp = document.getElementById('volume-up');
const audio = document.getElementsByTagName('audio');
const progressBar = document.getElementById('progress-bar-inner');
const progressBarText = document.getElementsByClassName('progress-bar-text');
const score = document.getElementById('score');
const questionElement = document.getElementById('question');
const timerElement = document.getElementById('timer');
const nextButton = document.getElementById('next-button');
const answerButtons = document.getElementsByClassName('answer-button');
const questionCount = document.getElementById('question-count');
const endButton = document.getElementById('end-button');
const endElement = document.getElementById('end-div');
const endScore = document.getElementById('end-score');
const replayButton = document.getElementById('replay-button');
const homeButton = document.getElementById('home-button');

// Answer Buttons //

const answerOne = document.getElementById('answer-one');
const answerTwo = document.getElementById('answer-two');
const answerThree = document.getElementById('answer-three');
const answerFour = document.getElementById('answer-four');

let currentQuestion = {};
let availableQuestions = [];
let quizScore = 0;
let questionNumber = 1;
let progressBarWidth = 0;

// Event Listeners //

answerOne.addEventListener('click', checkAnswerOne);
answerTwo.addEventListener('click', checkAnswerTwo);
answerThree.addEventListener('click', checkAnswerThree);
answerFour.addEventListener('click', checkAnswerFour);
nextButton.addEventListener('click', nextQuestion);
endButton.addEventListener('click', end);


score.innerText = quizScore;

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

let timer = 59;

function countdownTimer() {

    timerElement.innerText = timer;
    --timer;
    if (timer === -1) {
        clearInterval(intervalTimer);
        timeOut();
    }
}

let intervalTimer = setInterval(countdownTimer, 1000);

function resetCountdownTimer() {
    timerElement.innerText = 60;
    timer = 59;
    intervalTimer = setInterval(countdownTimer, 1000);
}

// Start Game //

function startGame() {
    quizScore = 0;
    availableQuestions = [...questions];
    shuffle(availableQuestions);
    // Take first question in available questions array and put it in current question object //
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

    // check if last question
    availableQuestions.shift();
    currentQuestion = availableQuestions[0];
    showQuestion(currentQuestion);
    for (let i = 0; i < answerButtons.length; i++) {
        if (answerButtons[i].classList.contains('correct')) {
            answerButtons[i].classList.remove('correct');
        } else {
            answerButtons[i].classList.remove('incorrect');
        }
    }
    answerOne.addEventListener('click', checkAnswerOne);
    answerTwo.addEventListener('click', checkAnswerTwo);
    answerThree.addEventListener('click', checkAnswerThree);
    answerFour.addEventListener('click', checkAnswerFour);
    resetCountdownTimer();
    nextButton.classList.add('hide');
    // Increment Score //
    questionCount.innerText = ++questionNumber;
    // Increment Progress Bar //
    progressBar.style.width = (questionNumber - 1) * 8.33 + '%';
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

// Check User Answer //

function checkAnswerOne() {
    if (answerOne.innerHTML === currentQuestion.correct) {
        correct();
        answerOne.classList.add('correct');
    } else {
        answerOne.classList.add('incorrect');
        incorrect();
    }
}

function checkAnswerTwo() {
    if (answerTwo.innerHTML === currentQuestion.correct) {
        correct();
        answerTwo.classList.add('correct');
    } else {
        answerTwo.classList.add('incorrect');
        incorrect();
    }
}

function checkAnswerThree() {
    if (answerThree.innerHTML === currentQuestion.correct) {
        correct();
        answerThree.classList.add('correct');
    } else {
        answerThree.classList.add('incorrect');
        incorrect();
    }
}

function checkAnswerFour() {
    if (answerFour.innerHTML === currentQuestion.correct) {
        correct();
        answerFour.classList.add('correct');
    } else {
        answerFour.classList.add('incorrect');
        incorrect();
    }
}

// Time Out //

function timeOut() {
    questionElement.innerText = 'Sorry you have run out of time!';
    incorrect();
}

// Correct Choice //

function correct() {

    // When user guesses correct change background colour of selected answer to green and others to red, stop countdown, remove event listeners, increment score, add next button

    clearInterval(intervalTimer);
    ++quizScore;
    score.innerText = quizScore;
    answerOne.removeEventListener('click', checkAnswerOne);
    answerTwo.removeEventListener('click', checkAnswerTwo);
    answerThree.removeEventListener('click', checkAnswerThree);
    answerFour.removeEventListener('click', checkAnswerFour);
    if (availableQuestions.length === 1){
        endButton.classList.remove('hide');
    } else {
        nextButton.classList.remove('hide');
    }
}

// Incorrect Choice //

function incorrect() {

    // for loop? Check the innerHTML of each answer and if it matches currentQuestion.correct add the class correct, else add the class incorrect
    for (let i = 0; i < answerButtons.length; i++) {
        if (answerButtons[i].innerHTML === currentQuestion.correct) {
            answerButtons[i].classList.add('correct');
        } 
    }

    clearInterval(intervalTimer);
    answerOne.removeEventListener('click', checkAnswerOne);
    answerTwo.removeEventListener('click', checkAnswerTwo);
    answerThree.removeEventListener('click', checkAnswerThree);
    answerFour.removeEventListener('click', checkAnswerFour);
    if (availableQuestions.length === 1){
        endButton.classList.remove('hide');
    } else {
        nextButton.classList.remove('hide');
    }
}

// End //

homeButton.addEventListener('click', home);

function end() {

    containerOne.classList.add('hide');
    containerTwo.classList.remove('hide');
    endScore.innerText = quizScore;
}

