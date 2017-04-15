var inquirer = require("inquirer");

var Cloze = require("./clozeCard.js");

var fs = require("fs");

var cards = [];

var amt = 0;

var numCards;

//Prompts user to input 
var collectCards = function(){
	console.log("Please enter your flashcard text.");
	if (amt  < numCards){
		inquirer.prompt([
		{
			name: "full",
			message: "Full Text: "
		},
		{
			name: "answer",
			message: "Cloze text: "
		}
		]).then(function(answers) {
			if (answers.full.indexOf(answers.answer) < 0){
				console.log("Please enter cloze text that appears in full text");
			}
			else {
				var card = new Cloze(answers.full, answers.answer);
				cards.push(card);
				amt++;
			}
			collectCards();		
		});
	}
	else {
		console.log(cards);
		for (var i = 0; i < cards.length ; i++){
			fs.appendFile("logCloze.txt",cards[i].fullText + "+" +cards[i].toDelete + "\n");
		}	
	}
};

inquirer.prompt([
		{
			name: "amount",
			message: "How many cards do you want to make?"
		}
		]).then(function(answers) {
			numCards = answers.amount;
			collectCards();
		});

