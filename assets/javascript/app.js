// My variables
var correctAnswers = 0; 
var wrongAnswers = 0;
var countDown = 31;
var decreasingNum;
var appIsRunning = false;
var nextQuestion = false;
var currentQuestion;
var questionOneOptions = questions[0].answer;
var questionOneAnswer = questions[0].correctAnswer; 
var firstQuestion = questions[0].answer[0];
var rightAnswer = questions[0].correctAnswer;

// My questions as an array of objects 
var questions = [
	{
		question: "What color was Spock's skin color originally going to be?",
		answer: ["BLUE ", "GREEN ", "RED ", "ORANGE "],
		correctAnswer: 2
	}, {
		question: "Which character's actor originated the Klingon language?",
		// All possible answer options are listed in an array.
		answer: ["DR. MCCOY", "SPOCK", "UHURA", "SCOTTY"],
		correctAnswer: 3
	}, {
		question: "Which Star Trek series had the highest ratings of any Star Trek series?",
		// All possible answer options are listed in an array.
		answer: ["TOS", "VOYAGER", "TNG", "DS9"],
		correctAnswer: 2 
	}, {
		question: "What were the Borg originally supposed to be designed after?",
		// All possible answer options are listed in an array.
		answer: ["CACTUS", "BIRDS", "WORMS", "INSECTS"], 
		correctAnswer: 3
	}, {
		question: "What does the name of the alien race Ferengi mean?",
		// All possible answer options are listed in an array.
		answer: ["SETTLERS", "FOREIGNER", "OUTCAST", "WANDERER"], 
		correctAnswer: 1
	},
];

// After the document loads
$(document).ready(function(){

// Display the start button
	$(".startButton").on("click", function(){
		appStart();
	});

	$("#optionOne").on("click", function(){
		if (questionOneOptions === questionOneAnswer) {
			correctAnswerOne();
		}
	}); 

});


function appStart() {
	$("#image").hide();
		$(".startButton").hide();
		theTimer();
		displayQuestionOne();
};

// The Timer. This function decreased the number by a second. 
function theTimer() {
	decreasingNum = setInterval(decrement, 1000);
};

// Subtracts from the count down number, shows the timer in the htmla, and stops the interval from decreasing once it reaches zero.
function decrement() {
	countDown--;
	$("#timer").html(countDown);
	if (countDown === 0) {
		clearInterval(decreasingNum); //Hide this for the answer page. 
	}
};


function correctFirstAnswer() {
	if (firstQuestion === rightAnswer) {
		$("#answer").html("A very logical response.");
	}
};

// Displaying questions. There's most likely a way to simplify this code. Look into it.
function displayQuestionOne() {
	$("#question").html(questions[0].question);
	$("#optionOne").html(questions[1].answer[0]);
	$("#optionTwo").html(questions[1].answer[1]);
	$("#optionThree").html(questions[1].answer[2]);
	$("#optionFour").html(questions[1].answer[3]);
};

function correctAnswerOne() {
	$("#answer").html("A most logical response!");
};


function displayQuestionTwo() {
	$("#question").html(questions[1].question);
	$("#optionOne").html(questions[1].answer[0]);
	$("#optionTwo").html(questions[1].answer[1]);
	$("#optionThree").html(questions[1].answer[2]);
	$("#optionFour").html(questions[1].answer[3]);
};

function displayQuestionThree() {
	$("#question").html(questions[2].question);
	$("#optionOne").html(questions[2].answer[0]);
	$("#optionTwo").html(questions[2].answer[1]);
	$("#optionThree").html(questions[2].answer[2]);
	$("#optionFour").html(questions[2].answer[3]);
};

function displayQuestionFour() {
	$("#question").html(questions[3].question);
	$("#optionOne").html(questions[3].answer[0]);
	$("#optionTwo").html(questions[3].answer[1]);
	$("#optionThree").html(questions[3].answer[2]);
	$("#optionFour").html(questions[3].answer[3]);
};

function displayQuestionFive() {
	$("#question").html(questions[4].question);
	$("#optionOne").html(questions[4].answer[0]);
	$("#optionTwo").html(questions[4].answer[1]);
	$("#optionThree").html(questions[4].answer[2]);
	$("#optionFour").html(questions[4].answer[3]);
};


// Show start button.
// On button click, start game. 

// Show timer and start timer (30 seconds.)
// Show first question.
// Show answer options for first question.

// On selection of answer, tally if option selected is correct.
// If answer is correct, congratulate the user.
// If answer is wrong, notify and show correct answer.

// For either outcome, wait a few seconds and start the next question.

// After all questions have been answered show the following: 
// correct answers, wrong answers, option to restart the app.