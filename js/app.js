
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





	// ----- Hot or Cold Indicators ------ //


	$(".game")
		.on("click", "#guessButton", function() {
			
			var userGuess = $("#userGuess").val();
			var output;
			var newOutputLine;
			var boxColor;
			var compareNumbers = Math.abs(userGuess - randomNumber)
			
			guessCount.html(function(i, val) { return val *1+1});
			
			console.log(userGuess);
		
			if (userGuess == randomNumber) {
					output = "you did it!";
					boxColor = "#be9b0d";
			}

			else if (userGuess.length == 0)	{
					output = "need a number!";
			}

			else if (userGuess <= 0)	{
					output = "too low! over 0 please";
			}

			else if (userGuess > 100)	{
					output = "too high! under 100 please";
			}

			else if (userGuess % 1 != 0) {
					output = "invalid number";
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

			newOutputLine = $("<li>" + output + "</li>");

			newOutputLine.css("background-color", boxColor);

			$("#guessList")

				.prepend(newOutputLine)

			$("#userGuess").val('');

			return false;
	
		})
	;




});


