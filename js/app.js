
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
	var guessCount = $("#count");


	console.log(randomNumber);



	// ----- New Game Reset----- //


	$(".new")
		.click (function(){
			randomNumber = 0;
			randomNumber = 1 + Math.floor(Math.random() * 100);

			console.log(randomNumber);

			$("#guessList").empty();

			$("#count").empty();
			guessCount.html(function(i, val) { return val *0});

			$("#userGuess").focus();
		})
	;





	// ----- Hot or Cold Indicators ------ //

	$(".game")
		.on("click", "#guessButton", function() {

			var userGuess = $("#userGuess").val();
			var compareNumbers = Math.abs(userGuess - randomNumber);
			var output;
			var newOutputLine;
			var boxColor;

			var tempOutput;
			
			var addTempLine = function() {

				var makeTemp = $("<li>" + tempOutput + "</li>").addClass("temp").css("display", "inline");
				
				$("#guessList")
					.prepend(makeTemp.fadeIn(100));

			}

			$("#guessList li.temp").remove();

			if (userGuess.length == 0)	{
				tempOutput = "need a number!";
				addTempLine();
			}

			else if (userGuess <= 0)	{
				tempOutput = "too low! over 0 please";
				addTempLine();
			}

			else if (userGuess > 100)	{
				tempOutput = "too high! under 100 please";
				addTempLine();
			}

			else if (userGuess % 1 != 0) {
				tempOutput = "invalid number";
				addTempLine();
			}

			else {

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

					else if (compareNumbers < 25) {
						output = "chilly";
						boxColor = "#268dc2";
						}

					else if (compareNumbers < 30) {
						output = "cold";
						boxColor = "#1a6fa0";		
						}		

					else {
						output = "frigid";
						boxColor = "#0911be";	
						}

					guessCount.html(function(i, val) { return val *1+1});

					newOutputLine = $("<li>" + output + "</li>");

					newOutputLine.css("background-color", boxColor);

					$("#guessList")
						.prepend(newOutputLine);
			}

			$("#userGuess").val('');

			return false;
	
		})
	;




});


