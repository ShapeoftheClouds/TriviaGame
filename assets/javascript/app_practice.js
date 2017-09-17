// My variables
var number = 0;  
var correctGuesses = 0;
var wrongGuesses = 0;
var previousQuestions = [];
// Variables for the timer.
var countDown = 31;
var decreasingNum;

// My questions
var questions = {
	1: {
		"icon": "spock",
		"question": "What color was Spock's skin color originally going to be?",
		"options": {
			1: "BLUE",
			2: "GREEN",
			3: "RED ", 
			4: "ORANGE "
			},
		"correctAnswer": 2,
		"answer-detail": "Spock's skin was originally going to be red, but on the black and white tv screens, he showed up black."
		}, 
	2: {
		"icon": "klingon",
		"question": "Which character's actor originated the Klingon language?",
		"options": {
			1: "DR. MCCOY", 
			2: "SPOCK", 
			3: "UHURA", 
			4: "SCOTTY"
			},
		"correctAnswer": 3,
		"answer-detail": "In the opening scene of the first Trek movie, Klingons shout commands in midst of a space battle. This was the first time Klingonese was spoken on screen. These few bits of dialogue, which were subtitled with commands like 'Tactical, stand by on torpedoes,' were actually created by actor James Doohan who played the Enterprise's chief engineer, Scotty."
		}, 
	3: {
		"icon": "STPoster",
		"question": "Which Star Trek series had the highest ratings of any Star Trek series?",
		"options": {
			1: "TOS",
			2: "VOYAGER",
			3: "TNG",
			4: "DS9"
			},
		"correctAnswer": 2,
		"answer-detail": "Star Trek: The Next Generation, the 1987 follow up that spawned seven seasons and so many of the Internet's favorite gifs and memes, is also the highest rated series overall on IMDB at 8.7." 
		}, 
	4: {
		"icon": "borg",
		"question": "What were the Borg originally supposed to be designed after?",
		"options": {
			1: "CACTUS",
			2: "BIRDS",
			3: "WORMS",
			4: "INSECTS"
			}, 
		"correctAnswer": 3,
		"answer-detail": "The Borg began as a race of insects, a concept dropped for budget reasons."
		}, 
	5: {
		"icon": "ferengi",
		"question": "What does the name of the alien race Ferengi mean?",
		"options": {
			1: "SETTLERS",
			2: "FOREIGNER",
			3: "OUTCAST",
			4: "WANDERER"
			}, 
		"correctAnswer": 1,
		"answer-detail": "The word 'Ferengi' was derived from the Arabic and Persian word faranji (written فرنجي), which meant 'frank', as in the Frankish/European traders who made contact with Arabic traders; the word later came to mean 'foreigner' in general."
		},
	};

// Document ready

$(document).ready(function() {
	// Clicking the start button.
	$(".startButton").on("click", function() {
		appStart();
	});

	$("#answerButtons").on("click", function(){
		console.log("You clicked a button!");

		var userGuess = $("#answerButtons > input[type=button]").val();
		console.log(userGuess);
		correct();
	});


});
	
$("#startOver").on("click", function() {
	$("#endOfGame").fadeOut(500, function() {
		newGame();
		findQuestion();
	});
});

function appStart() {
	$("#image").hide();
		$(".startButton").hide();
		theTimer();
		findQuestion();
		loadQuestion();
	};

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

var newGame = function() {
	number = 0; 
	count = 0; 
	correctGuesses = 0;
	wrongGuesses = 0;
	previousQuestions = [];
};

var findQuestion = function() {
	pickQuestion();
	while (questionsAsked()) {
		pickQuestion();
	}
};

var pickQuestion = function() {
	var limit = Object.keys(questions).length;
	number = Math.floor((Math.random() * limit) + 1);
};

var questionsAsked = function() {
	var result = false;
	for (var index = 0; index <= previousQuestions.length; index++) {
		if (number == previousQuestions[index]) {
			result = true;
		}
	}
	return result;
};

var loadQuestion = function() {
	previousQuestions.push(number); 
	//Iterate through the options and then tell it what to do.
	for (var i = 0; i <= questions[number]["options"]; i++) {
		$("#optionOne").html(questions[number]["options"][i]);
	}
	// $("#question").html(questions[number]["question"]);
	// $("#optionOne").html(questions[number]["options"][1]);
	// $("#optionTwo").html(questions[number]["options"][2]);
	// $("#optionThree").html(questions[number]["options"][3]);
	// $("#optionFour").html(questions[number]["options"][4]);
	// $("#optionFive").html(questions[number]["options"][5]);
};


var correct = function(userGuess) {
	if(userGuess === questions[number]["answer"]) {
		answerPage();
	} else {
		return false;
	};
}

// 

function answerPage() { //Set timeout interval
	$("#answerButtons").hide();
	$("#question").hide();
	$("#timer").hide();
	$("#answer").html("GreatGuess!").hide();

	setTimeout(function()
	{ 
	$("#answerButtons").show();
	$("#question").show();
	$("#timer").show();
	}, 1000);


	$("#answer").html("GreatGuess!");
};

var updateScore = function() {
	$("#numberOfCorrectGuesses").text(correctGuesses);
	$("#numberOfWrongGuesses").text(wrongGuesses);
};