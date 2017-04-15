var inquirer = require("inquirer");

var Basic = require("./basicCard.js");

var fs = require("fs");

var cards = [];

var amt = 0; //Counter for which card is being read

var pts = 0; //Counter for points user 
//
fs.readFile("logBasic.txt", "utf8", function(error, data) {

  // We will then print the contents of data
  // console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split("\n");

  // We will then re-display the content as an array for later use.
  // console.log(dataArr);

  for (var i = 0; i < dataArr.length-1;i++){
  	var cardArr = dataArr[i].split("+");
  	var card = new Basic(cardArr[0],cardArr[1]);
  	cards.push(card);
  	// console.log(cards);
  }

//Prints the front text of the flashcard
var promptUser = function(){
	if (amt < cards.length){
		console.log(cards[amt].front);
		//Asks the user to input their answers
		inquirer.prompt([
			{
				type: "input",
				name: "answer",
				message: "Answer: ",
			}
			]).then(function(answers) {
				if(answers.answer === cards[amt].back){
					pts++;
					amt++;
				}
				//Prints the correct answer if user answered incorrectly
				else {
					console.log("Oops, the correct answer is " + cards[amt].back);
					amt++;
				}
				promptUser();
			});
		}
	else {
		console.log("Game over!");
		console.log("Score: "+pts);
	}
}



promptUser();


}); //ends readfile 
