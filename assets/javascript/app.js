// My PseudoCODE!!!

// Have a series of questions and answers.


var correctAnswers = 0; 
var wrongAnswers = 0;
var countDown = 31;
var decreasingNum;
var appIsRunning = false;
var nextQuestion = false;
var currentQuestion;


// Objects have properties and values.
// Refactoring - Rewritting code. Commit often. 

// My questions as an object. 
var questions = [
	{
		question: "What color was Spock's skin originally going to be?",
		answer: ["Blue", "Green", "Red", "Orange"],
		correctAnswer: 2
	}, {
		question: "Which character's actor originated the Klingon language?",
		// All possible answer options are listed in an array.
		answer: ["Dr. McCoy", "Spock", "Uhura", "Scotty"],
		correctAnswer: 3
	}, {
		question: "Which Star Trek series had the highest ratings of any Star Trek series?",
		// All possible answer options are listed in an array.
		answer: ["TOS", "Voyager", "TNG", "DS9"],
		correctAnswer: 2 
	}, {
		question: "What were the Borg originally supposed to be designed after?",
		// All possible answer options are listed in an array.
		answer: ["Cactus", "Birds", "Worms", "Insects"], 
		correctAnswer: 3
	}, {
		question: "What does the name of the alien race Ferengi mean?",
		// All possible answer options are listed in an array.
		answer: ["Settlers", "Foreigner", "Outcast", "Wanderer"], 
		correctAnswer: 1
	},
];

// var questionOne = questions[1].answer[0];
// console.log(questionOne);

// After the document loads
$(document).ready(function(){

// Display the start button

	$(".startButton").on("click", function(){
		$("#image").hide();
		$(".startButton").hide();
		theTimer();
	});

});

function theTimer() {
	decreasingNum = setInterval(decrement, 1000);
};


function decrement() {
	countDown--;
	$("#timer").html(countDown);

	if (countDown === 0) {
		clearInterval(decreasingNum);
	}
};

// Creating a 30 second timer
// function timerCountdown() {
// 	var timeRemaining = seconds = timer
// 	$("#timer").append(counter);	
// }

// function questions() {

// }

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