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