
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	// ----- My Stuff ----- //
  	// -------------------- //


	var randomNumber = 1 + Math.floor(Math.random() * 100);
	var guessCount = $("#count")


	console.log(randomNumber);

	// var validGuess = function(userGuess)	{

	// 	// var userGuess = $("#userGuess").val();
	// 	var compareNumbers = Math.abs(userGuess - randomNumber)
	// 	// var newOutputLine;
	// 	// var output;
	// 	// var boxColor;

	// 	if (userGuess == randomNumber) {
	// 		output = "you did it!";
	// 		boxColor = "#be9b0d";
	// 		}

	// 	else if (compareNumbers < 5) {
	// 		output = "super hot!";
	// 		boxColor = "#be0000";
	// 		}

	// 	else if (compareNumbers < 10) {
	// 		output = "hot!";
	// 		boxColor = "#c23939";
	// 		}

	// 	else if (compareNumbers < 15) {
	// 		output = "warm";
	// 		boxColor = "#c26f6b";
	// 		}

	// 	else if (compareNumbers < 20) {
	// 		output = "luke warm";
	// 		boxColor = "#c2a791";		
	// 		}

	// 	else if (compareNumbers < 30) {
	// 		output = "chilly";
	// 		boxColor = "#268dc2";
	// 		}

	// 	else if (compareNumbers < 40) {
	// 		output = "cold";
	// 		boxColor = "#be9b0d";		
	// 		}		

	// 	else if (compareNumbers < 50) {
	// 		output = "super cold";
	// 		boxColor = "#1257be";
	// 		}

	// 	else if (compareNumbers < 60) {
	// 		output = "frigid";
	// 		boxColor = "#0911be";	
	// 		}

	// 		guessCount.html(function(i, val) { return val *1+1});

	// 		// newOutputLine = $("<li>" + output + "</li>");

	// 		// newOutputLine.css("background-color", boxColor);

	// 		// $("#guessList")
	// 		// 	.prepend(newOutputLine);

	// }



	// ----- Hot or Cold Indicators ------ //


	var invalidGuess = function() {

		// var userGuess = $("#userGuess").val();


		if (userGuess.length == 0)	{
			tempOutput = "need a number!";
		}

		else if (userGuess <= 0)	{
			tempOutput = "too low! over 0 please";
		}

		else if (userGuess > 100)	{
			tempOutput = "too high! under 100 please";
		}

		else if (userGuess % 1 != 0) {
			tempOutput = "invalid number";
		}

		else {
			output = false;
		}

		return tempOutput;
		return output;
		
	}


	$(".game")
		.on("click", "#guessButton", function() {

			// var userGuess = $("#userGuess").val();
			var userGuess = $("#userGuess").val();
			var compareNumbers = Math.abs(userGuess - randomNumber)
			var output;
			var newOutputLine;
			var boxColor;
			var tempOutputline;
			var tempOutput;

			// console.log(userGuess);


			if (invalidGuess()) {
				
				tempOutputLine = $("<li>" + tempOutput + "</li>");

				$("#guessList")
					.prepend(tempOutputLine);

			}

			
			else {

					tempOutput = false;

					if (userGuess == randomNumber) {
						output = "you did it!";
						boxColor = "#be9b0d";
						}

					else if (compareNumbers < 5) {
						output = "super hot!";
						boxColor = "#be0000";
						}

					else if (compareNumbers < 10) {
						output = "hot!";
						boxColor = "#c23939";
						}

					else if (compareNumbers < 15) {
						output = "warm";
						boxColor = "#c26f6b";
						}

					else if (compareNumbers < 20) {
						output = "luke warm";
						boxColor = "#c2a791";		
						}

					else if (compareNumbers < 30) {
						output = "chilly";
						boxColor = "#268dc2";
						}

					else if (compareNumbers < 40) {
						output = "cold";
						boxColor = "#be9b0d";		
						}		

					else if (compareNumbers < 50) {
						output = "super cold";
						boxColor = "#1257be";
						}

					else if (compareNumbers < 60) {
						output = "frigid";
						boxColor = "#0911be";	
						}

					guessCount.html(function(i, val) { return val *1+1});

			}

			// guessCount.html(function(i, val) { return val *1+1});

			newOutputLine = $("<li>" + output + "</li>");

			newOutputLine.css("background-color", boxColor);

			$("#guessList")
				.prepend(newOutputLine);


			$("#userGuess").val('');

			return false;
	
		})
	;


	// ----- New Game Reset----- //

	$("nav")
		.on("click", ".new", function() {
			randomNumber = 0;
			randomNumber = 1 + Math.floor(Math.random() * 100);

			console.log(randomNumber);

			$("#guessList").empty();

			$("#count").empty();
			guessCount.html(function(i, val) { return val *0});
		})
	;






});


