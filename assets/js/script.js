const containerZero = document.querySelector('.container-0');
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
const homeButton = document.getElementById('home-button');
const startButton = document.querySelector('#start-button');
const rulesButton = document.getElementById('rules-button');
const unmuteElement = document.querySelector('.unmute-div');
const introText = document.querySelector('.intro-text');
const introTextElement = document.querySelector('.intro-text-div');
const backButton = document.getElementById('back-button');

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

// Answer Buttons //

for(let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', checkAnswer);
}

nextButton.addEventListener('click', nextQuestion);
endButton.addEventListener('click', end);
rulesButton.addEventListener('click', rules);
startButton.addEventListener('click', startGame);

score.innerText = quizScore;

// Rules //

function rules() {
    unmuteElement.classList.add('hide');
    introText.classList.add('hide');
    backButton.classList.remove('hide');
    rulesButton.classList.add('hide');
    startButton.classList.add('hide');
    introTextElement.innerHTML = `<ul id=“rules-list”>
	<li>There are twelve questions</li>
	<li>You have 60 seconds per question to choose your answer</li>
	<li>Each question has four answers, only one is correct</li>
	<li>Click the play button to hear the audio for your question</li>
	<li>You get one point for each correct answer</li>
	<li>You can also use the audio control icons to pause, increase and decrease the audio volume</li>
	<li>When the next button appears, click it to continue to the next question</li>
 	<li>When the end button appears, click it to end the quiz</li>
</ul>`;
}

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
    },
    {
        question: 'What movie is this track from?',
        audio: 'thirteen.mp3',
        answer1: 'Batman',
        answer2: 'Superman',
        answer3: 'Ironman',
        answer4: 'Spiderman',
        correct: 'Batman'
    },
    {
        question: 'What movie is this track from?',
        audio: 'fourteen.mp3',
        answer1: 'Tenet',
        answer2: 'Inception',
        answer3: 'Interstellar',
        answer4: 'Shutter Island',
        correct: 'Inception'
    },
    {
        question: 'What movie is this track from?',
        audio: 'fifteen.mp3',
        answer1: 'The Goonies',
        answer2: 'E.T',
        answer3: 'Back To The Future',
        answer4: 'Indiana Jones',
        correct: 'Back To The Future'
    },
    {
        question: 'What movie is this track from?',
        audio: 'sixteen.mp3',
        answer1: 'The Notebook',
        answer2: 'Romeo and Juliet',
        answer3: 'Me Before You',
        answer4: 'Titanic',
        correct: 'Titanic'
    },
    {
        question: 'What movie is this track from?',
        audio: 'seventeen.mp3',
        answer1: 'Indiana Jones',
        answer2: 'The Mummy',
        answer3: 'The Great Escape',
        answer4: 'National Treasure',
        correct: 'Indiana Jones'
    },
    {
        question: 'What movie is this track from?',
        audio: 'eighteen.mp3',
        answer1: 'James Bond',
        answer2: 'Mission: Impossible',
        answer3: 'Jack Reacher',
        answer4: 'The Bourne Identity',
        correct: 'Mission: Impossible'
    },
    {
        question: 'What movie is this track from?',
        audio: 'nineteen.mp3',
        answer1: 'Scarface',
        answer2: 'GoodFellas',
        answer3: 'The Godfather',
        answer4: 'Reservoir Dogs',
        correct: 'The Godfather'
    },
    {
        question: 'What movie is this track from?',
        audio: 'twenty.mp3',
        answer1: 'Minority Report',
        answer2: 'Equilibrium',
        answer3: 'Blade Runner',
        answer4: 'The Matrix',
        correct: 'The Matrix'
    },
    {
        question: 'What movie is this track from?',
        audio: 'twenty-one.mp3',
        answer1: 'Sherlock Holmes',
        answer2: 'Murder on the Orient Express',
        answer3: 'Enola Holmes',
        answer4: 'Pirates of the Caribbean',
        correct: 'Sherlock Holmes'
    },
    {
        question: 'What movie is this track from?',
        audio: 'twenty-two.mp3',
        answer1: 'Labyrinth',
        answer2: 'E.T',
        answer3: 'Close Encounters Of The Third Kind',
        answer4: 'Indiana Jones',
        correct: 'E.T'
    },
    {
        question: 'What movie is this track from?',
        audio: 'twenty-three.mp3',
        answer1: 'Ex Machina',
        answer2: 'Total Recall',
        answer3: 'Blade Runner',
        answer4: '2001 A Space Odyssey',
        correct: 'Blade Runner'
    },
    {
        question: 'What movie is this track from?',
        audio: 'twenty-four.mp3',
        answer1: 'Mission: Impossible',
        answer2: 'North By Northwest',
        answer3: 'Die Hard',
        answer4: 'James Bond',
        correct: 'James Bond'
    },
    {
        question: 'What movie is this track from?',
        audio: 'twenty-five.mp3',
        answer1: 'The Pink Panther',
        answer2: 'Johnny English',
        answer3: 'Ace Ventura Pet Detective',
        answer4: 'Austin Powers',
        correct: 'The Pink Panther'
    },
    {
        question: 'What movie is this track from?',
        audio: 'twenty-six.mp3',
        answer1: 'The Avengers',
        answer2: 'Spiderman',
        answer3: 'Doctor Strange',
        answer4: 'X-MEN',
        correct: 'Spiderman'
    },
    {
        question: 'What movie is this track from?',
        audio: 'twenty-seven.mp3',
        answer1: 'Zoolander',
        answer2: 'Dodgeball',
        answer3: 'Austin Powers',
        answer4: 'Anchorman',
        correct: 'Austin Powers'
    }

];

// Audio Controls //

function audioControls() {

if (player.paused && player.currentTime > 0 && !player.ended) {

    pause.classList.add('hide');
    play.classList.remove('hide');

} else {

    play.classList.add('hide');
    pause.classList.remove('hide');

}

}

audioControls();

play.addEventListener('click', () => {
    player.play();
    audioControls();
})

pause.addEventListener('click', () => {
    player.pause();
    audioControls();
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

function resetCountdownTimer() {
    timerElement.innerText = 60;
    timer = 59;
    intervalTimer = setInterval(countdownTimer, 1000);
}

let intervalTimer;

// Start Game //

function startGame() {
    containerZero.classList.add('hide');
    containerOne.classList.remove('hide');
    quizScore = 0;
    availableQuestions = [...questions];
    shuffle(availableQuestions);
    // Take first question in available questions array and put it in current question object //
    currentQuestion = availableQuestions[0];
    showQuestion(currentQuestion);
    player.play();
    intervalTimer = setInterval(countdownTimer, 1000);
}

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
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', checkAnswer);
    }
    nextButton.classList.add('hide');
    // Increment Score //
    questionCount.innerText = ++questionNumber;
    // Increment Progress Bar //
    progressBar.style.width = (questionNumber - 1) * 8.33 + '%';
    player.play();
    resetCountdownTimer();
    audioControls();
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

function checkAnswer() {
    for (let i = 0; i < answerButtons.length; i++){
        if(this.innerHTML === currentQuestion.correct) {
            this.classList.add('correct');
            correct();
            return;
        } else {
            this.classList.add('incorrect');
            incorrect();
            return;
        }
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
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].removeEventListener('click', checkAnswer);
    }
    if (availableQuestions.length === 16){
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
    for(let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].removeEventListener('click', checkAnswer);
    }
    if (availableQuestions.length === 16){
        endButton.classList.remove('hide');
    } else {
        nextButton.classList.remove('hide');
    }
}

// End //

function end() {

    containerOne.classList.add('hide');
    containerTwo.classList.remove('hide');
    endScore.innerText = quizScore;
    player.pause();
}

