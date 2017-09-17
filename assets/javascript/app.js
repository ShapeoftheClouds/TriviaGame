// My variables
var correctAnswers = 0; 
var wrongAnswers = 0;
var countDown = 31;
var decreasingNum;
var appIsRunning = false;
var nextQuestion = false;
var currentQuestion;
var previousQuestion = [];

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

var questionOneOptions = questions[0].answer;
var questionOneAnswer = questions[0].correctAnswer; 
var firstQuestion = questions[0].answer[0];
var rightAnswer = questions[0].correctAnswer;

// After the document loads
$(document).ready(function(){

// Display the start button
	$(".startButton").on("click", function(){
		appStart();
	});

	$("#optionOne").on("click", function(){
		if (questionOneOptions === questionOneAnswer) {
			correctFirstAnswer();
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


var questionAnswer1 = questions[0].correctAnswer;

$(".all").on("click", function() {
	if (this.attr("data-num") == correctAnswer) {
		correctAnswer();
	} else {
		wrongAnswer();
	}
});
				
function correctAnswer() {
	$("#answer").html("A most logical response.");
}

function correctFirstAnswer() {
	if (firstQuestion === rightAnswer) {
		$("#answer").html("A most logical response.");
	}
};

// Displaying questions. There's most likely a way to simplify this code. Look into it.
// If code is repeating itself, 99% of the time it can be refactored.


function displayQuestionOne() {
	$("#question").html(questions[0].question);
	$(".option0").html(questions[0].answer[0]);
	$(".option1").html(questions[0].answer[1]);
	$(".option2").html(questions[0].answer[2]);
	$(".option3").html(questions[0].answer[3]);
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


var newGame = function () {
	num = 0; 
	count = 0; 
	score = 0;
	previousQuestion = [];
};

var selectQuestion = function() {
	var limit = Object.keys(questions).length;
	num = Math.floor((Math.random() * limit) + 1)
};

var findQuestion = function () {
	selectQuestion(); 
	while (wasAsked()) {
		selectQuestion();
	};
};

var questionsAsked = function() {
	var result = false; 
	for (var index = 0; index <= previousQuestion.length; i++) {
		if (num == previousQuestion[i]) {
			result = true;
		};
	};
	return result;
};


var loadQuestion = function() {
    previousQuestion.push(num);    
    $('#icon').html("<i class=\"fa fa-"+quiz_questions[num]["icon"]+"\"></i>");
    $('#text').html(quiz_questions[num]["question"]);
    $('#option-1').html(quiz_questions[num]["options"][1]);
    $('#option-2').html(quiz_questions[num]["options"][2]);
    $('#option-3').html(quiz_questions[num]["options"][3]);
    $('#option-4').html(quiz_questions[num]["options"][4]);
    updateScore();
    count++;
    $('.progress').text(count+"/"+count_limit);
};
var correct = function(user_answer) {
    if (user_answer == quiz_questions[num]["answer"]) {
        return true;
    } else {
        return false;
    }
};
var updateScore = function() {
    $('.score').text(score);
};
var updateRank = function() {
    if (score == 10){
        $('.rank').text('Time Master');
        $('.rank-msg').text('Prefect score!)');
    } else if (score >= 7 && score <=  9) {
        $('.rank').text('Time Lord');
        $('.rank-msg').text('You have mad time travel trivia skillz! Time does your bidding, except for all that time you spent watching time travel movies - you can\'t get that back.');
    } else if (score >= 4 && score <= 6) {
        $('.rank').text('Time Traveler');
        $('.rank-msg').text('You may not be the best, but your not the worst.');
    } else if (score >= 1 && score <= 3) {
        $('.rank').text('Time Traveling Sidekick');
        $('.rank-msg').text('Meh. Not a great score, but if you ever ending up traveling through time you probably know enough to not accidently destroy the universe.');
    } else if (score == 0) {
        $('.rank').text('Time Dunce');
        $('.rank-msg').text('Doh! The only "time traveling" you apparently understand is starring at the clock while drool runs down your chin.');
    }
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