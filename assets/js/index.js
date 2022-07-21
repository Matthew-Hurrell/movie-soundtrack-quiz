const startButton = document.querySelector('#start-button');
const rulesButton = document.getElementById('rules-button');
const unmuteElement = document.querySelector('.unmute-div');
const introText = document.querySelector('.intro-text');
const introTextElement = document.querySelector('.intro-text-div');
const backButton = document.getElementById('back-button');


rulesButton.addEventListener('click', rules);

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
