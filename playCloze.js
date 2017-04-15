var inquirer = require("inquirer");

var Cloze = require("./clozeCard.js");

var fs = require("fs");

var cards = [];

var amt = 0; //Counter for which card is being read

var pts = 0; //Counter for points user 
//
fs.readFile("logCloze.txt", "utf8", function(error, data) {

  // We will then print the contents of data
  // console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split("\n");

  // We will then re-display the content as an array for later use.
  // console.log(dataArr);

  for (var i = 0; i < dataArr.length-1;i++){
  	var cardArr = dataArr[i].split("+");
  	var card = new Cloze(cardArr[0],cardArr[1]);
  	cards.push(card);
  }

  // console.log(cards);


// console.log(cards[0]);

var promptUser = function(){
	if (amt < cards.length){
		// console.log(amt);
		cards[amt].deletion();
		inquirer.prompt([
			{
				type: "input",
				name: "answer",
				message: "Answer: ",
			}
			]).then(function(answers) {
				if(cards[amt].clozeCompare(answers.answer)){
					pts++;
					amt++;
				}
				else {
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
