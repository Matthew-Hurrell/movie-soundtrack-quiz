/* Variables */

// Containers
const containerZero = document.querySelector('.container-0');
const containerOne = document.querySelector('.container-1');
const containerTwo = document.querySelector('.container-2');

// Audio Player
const player = document.getElementById('player');
const play = document.getElementById('play');
const pause = document.getElementById('pause');

// Progress Bar
const progressBar = document.getElementById('progress-bar-inner');
const progressBarText = document.getElementsByClassName('progress-bar-text');

// Question Count
const questionCount = document.getElementById('question-count');

// Score
const score = document.getElementById('score');
const endScore = document.getElementById('end-score');

// Question
const questionElement = document.getElementById('question');

// Timer
const timerElement = document.getElementById('timer');

// Buttons
const nextButton = document.getElementById('next-button');
const answerButtons = document.getElementsByClassName('answer-button');
const endButton = document.getElementById('end-button');
const homeButton = document.getElementById('home-button');
const startButton = document.querySelector('#start-button');
const rulesButton = document.getElementById('rules-button');
const backButton = document.getElementById('back-button');
const secondHomeButton = document.getElementById('second-home-button');

// Home Page 
const unmuteElement = document.querySelector('.unmute-div');
const introText = document.querySelector('.intro-text');
const introTextElement = document.querySelector('.intro-text-div');

// End Page
const movieQuote = document.getElementById('movie-end-quote');
const quoteCaption = document.getElementById('quote-caption');

// Answer Buttons 
const answerOne = document.getElementById('answer-one');
const answerTwo = document.getElementById('answer-two');
const answerThree = document.getElementById('answer-three');
const answerFour = document.getElementById('answer-four');

// Let Variables
let currentQuestion = {};
let availableQuestions = [];
let quizScore = 0;
let questionNumber = 1;
let progressBarWidth = 0;

/* Event Listeners */

// Answer Buttons //
for(let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', checkAnswer);
}

// Buttons
nextButton.addEventListener('click', nextQuestion);
endButton.addEventListener('click', end);
rulesButton.addEventListener('click', rules);
startButton.addEventListener('click', startGame);
backButton.addEventListener('click', goHome);
homeButton.addEventListener('click', goHome);
secondHomeButton.addEventListener('click', goHome);

// Score  
score.innerText = quizScore;

/* Rules */

// Function to add rules HTML element and remove other elements. Called when rules button is clicked
function rules() {
    unmuteElement.classList.add('hide');
    introText.classList.add('hide');
    backButton.classList.remove('hide');
    rulesButton.classList.add('hide');
    startButton.classList.add('hide');
    introTextElement.innerHTML = `<ul id=rules-list>
	<li>There are twelve questions</li>
	<li>You have 60 seconds per question to choose your answer</li>
	<li>Audio will autoplay for each question</li>
    <li>Use the button to pause or play the audio</li>
	<li>You get one point for each correct answer</li>
	<li>When the next button appears, click it to continue to the next question</li>
 	<li>When the end button appears, click it to end the quiz</li>
    </ul>`;
}

// Function to open the home page. Called when the back or home buttons are clicked

function goHome() {
    window.open("index.html", "_self");
}

/* Questions */

// Question Array
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
        answer2: 'Star Trek',
        answer3: 'Willow',
        answer4: 'Arrival',
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

/* Movie Quotes */

// Quotes Array
const quotes = [
    {
        quote: `“Well, nobody's perfect.”`,
        caption: 'Some Like It Hot (1959)'
    },
    {
        quote: `“Houston, we have a problem.”`,
        caption: 'Apollo 13 (1995)'
    },
    {
        quote: `“Take your stinking paws off me, you damned dirty ape!”`,
        caption: 'Planet of the Apes (1968)'
    },
    {
        quote: `“Frankly, my dear, I don't give a damn”`,
        caption: 'Gone With The Wind (1939)'
    },
    {
        quote: `“Toto, I've a feeling we're not in Kansas anymore.”`,
        caption: 'The Wizard of Oz (1939)'
    },
    {
        quote: `“You're gonna need a bigger boat.”`,
        caption: 'Jaws (1975)'
    },
    {
        quote: `“Just keep swimming.”`,
        caption: 'Finding Nemo (2003)'
    },
    {
        quote: `“I'll be back.”`,
        caption: 'The Terminator (1984)'
    },
    {
        quote: `“Say “Hello” to my little friend!”`,
        caption: 'Scarface (1983)'
    },
    {
        quote: `“I'll have what she's having.”`,
        caption: 'When Harry Met Sally (1989)'
    },
    {
        quote: `“Here's looking at you, kid.”`,
        caption: 'Casablanca (1942)'
    },
    {
        quote: `“Elementary, my dear Watson.”`,
        caption: 'The Adventures of Sherlock Holmes (1939)'
    },
    {
        quote: `“Made it, Ma. Top of the world!”`,
        caption: 'White Heat (1949)'
    }
]

/* Audio Controls */

// Function to check if audio is playing and display the correct audio icon
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

// Functions to play and pause audio for audio icons
play.addEventListener('click', () => {
    player.play();
    audioControls();
})

pause.addEventListener('click', () => {
    player.pause();
    audioControls();
})

/* Countdown Timer */

// Timer Countdown Number
let timer = 59;

// Function to reduce countdown timer by one and if statement to trigger timeout function
function countdownTimer() {
    timerElement.innerText = timer;
    --timer;
    if (timer === -1) {
        clearInterval(intervalTimer);
        timeOut();
    }
}

// Function to reset countdown timer 
function resetCountdownTimer() {
    timerElement.innerText = 60;
    timer = 59;
    intervalTimer = setInterval(countdownTimer, 1000);
}

let intervalTimer;

/* Start Game */

// Function to start the game. Called when start button is pressed
function startGame() {
    // Remove previous container and add next one
    containerZero.classList.add('hide');
    containerOne.classList.remove('hide');
    // Reset quiz score
    quizScore = 0;
    // Create new array from questions array and shuffle 
    availableQuestions = [...questions];
    shuffle(availableQuestions);
    // Take first question in available questions array and put it in current question object
    currentQuestion = availableQuestions[0];
    showQuestion(currentQuestion);
    // Play audio
    player.play();
    // Begin Countdown Timer
    intervalTimer = setInterval(countdownTimer, 1000);
}

/* Display Current Question */

// Function to take data from current question object and fill it in to the elements on the quiz page. Called with start game and next question functions
function showQuestion(currentQuestion) {
    // Question
    questionElement.innerText = currentQuestion.question;
    // Audio
    player.setAttribute('src', "assets/audio/" + currentQuestion.audio);
    // Answers
    answerOne.innerText = currentQuestion.answer1;
    answerTwo.innerText = currentQuestion.answer2;
    answerThree.innerText = currentQuestion.answer3;
    answerFour.innerText = currentQuestion.answer4;
}

/* Next Question */

// Function to remove current question and add new question. Also reset quiz elements to new question. Called when the user clicks the next button
function nextQuestion() {
    // Remove current question from available question array
    availableQuestions.shift();
    // Set new question
    currentQuestion = availableQuestions[0];
    // Show new question
    showQuestion(currentQuestion);
    // Remove incorrect and correct classes from answer buttons
    for (let i = 0; i < answerButtons.length; i++) {
        if (answerButtons[i].classList.contains('correct')) {
            answerButtons[i].classList.remove('correct');
        } else {
            answerButtons[i].classList.remove('incorrect');
        }
    }
    // Add event listeners back in to answer buttons
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', checkAnswer);
    }
    // Hide next button
    nextButton.classList.add('hide');
    // Increment Score //
    questionCount.innerText = ++questionNumber;
    // Increment Progress Bar //
    progressBar.style.width = (questionNumber - 1) * 8.33 + '%';
    // Play audio
    player.play();
    // Reset countdown timer
    resetCountdownTimer();
    // Check audio is playing and reset player control icons
    audioControls();
}

/* Question Array Randomizer */

// This code used to shuffle the array is taken from the Fisher-Yates Shuffle 
// Shuffle available questions and return shuffled questions array. Called at start game
function shuffle(availableQuestions) {
    let currentIndex = availableQuestions.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [availableQuestions[currentIndex], availableQuestions[randomIndex]] = [availableQuestions[randomIndex], availableQuestions[currentIndex]];
    }
    return availableQuestions;
}

/* Check User Answer */

// Function to check user answer and add the correct or incorrect class to the user button choice. Called when user clicks an answer button 
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

/* Time Out */

// Function to display message when user runs out of time to answer a question. Also calls incorrect function
function timeOut() {
    questionElement.innerText = 'Sorry you have run out of time!';
    incorrect();
}

/* Correct Choice */

// Function called when the user answers correctly
function correct() {
    // Stop timer
    clearInterval(intervalTimer);
    // Increment score
    ++quizScore;
    // Update score display
    score.innerText = quizScore;
    // Remove event listeners
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].removeEventListener('click', checkAnswer);
    }
    // Check if the end of the quiz is reached. If so display end button, otherwise display next button
    if (availableQuestions.length === 16){
        endButton.classList.remove('hide');
    } else {
        nextButton.classList.remove('hide');
    }
}

/* Incorrect Choice */

// Function called when the user answers incorrectly or doesn't answer in time
function incorrect() {
    // Check the answer buttons for the correct answer and add the class correct to the correct button
    for (let i = 0; i < answerButtons.length; i++) {
        if (answerButtons[i].innerHTML === currentQuestion.correct) {
            answerButtons[i].classList.add('correct');
        } 
    }
    // Stop timer
    clearInterval(intervalTimer);
    // Remove event listeners from answer buttons
    for(let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].removeEventListener('click', checkAnswer);
    }
    // Check if the end of the quiz is reached. If so display end button, otherwise display next button
    if (availableQuestions.length === 16){
        endButton.classList.remove('hide');
    } else {
        nextButton.classList.remove('hide');
    }
}

/* End */

// Function called when user clicks the end button at the end of the quiz
function end() {
    // Remove previous element container and add last container
    containerOne.classList.add('hide');
    containerTwo.classList.remove('hide');
    // Show user final score
    endScore.innerText = quizScore;
    // Generate quote function
    endQuoteGenerator();
    // Stop audio
    player.pause();
}

/* End Quote Generator */

// Function to display quote from quote array using user score. Called at the end of the quiz
function endQuoteGenerator() {
    // For loop for quotes array
    for(let i = 0; i < quotes.length; i++) {
        // Displays different quote for each user score possibility
        if(quizScore === i) {
            movieQuote.innerText = quotes[i].quote;
            quoteCaption.innerText = quotes[i].caption;
        }
    }
}