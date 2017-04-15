# Flashcard-Generator

Command line application that lets the user create two different type of flashcards.

## Description on how to use the app

* Use command "node basicCollectCards.js" to create basic flashcards.
	1. Input the amount of cards to create.
	2. Input the front text of your flashcard.
	3. Input the back text of your flashcard.

* Use command "node playBasic.js" to start your basic flashcards.
	1. Type your answers into the terminal.

* Use command "node clozeCollectCard.js" to create cloze flashcards.
	1. Input the amount of cards to create.
	2. Input the full text of your flashcard.
	3. Input the cloze text to be deleted.

* Use command "node playCloze.js" to start your cloze flashcards.
	1. Type your answers into the terminal.
 
## Requirements

* Create a BasicCard constructor that accepts front and back arguments
* Create a ClozeCard constructor that accepts text and cloze arguments
* Use prototypes to attach these methods, wherever possible
* Write constructors so that users can call them with or without the new keyword

## Technologies Used 
* nodeJS
* npm

## Code Explanation

* I created the constructors in a separate file and exported them to my CollectCard.js files using

```
module.exports = Basic;

```

* The CollectCard.js files prompt the user to add flashcards and stores them in the log.txt files.

```
var collectCards = function(){
	console.log("Please enter your flashcard text.");
	if (amt  < numCards){
		inquirer.prompt([
		{
			name: "full",
			message: "Front: "
		},
		{
			name: "answer",
			message: "Back: "
		}
		]).then(function(answers) {
				var card = new Basic(answers.full, answers.answer);
				cards.push(card);
				amt++;
				collectCards();		
		});
	}
	else {
		console.log(cards);
		for (var i = 0; i < cards.length ; i++){
			fs.appendFile("logBasic.txt",cards[i].front + "+" +cards[i].back + "\n");
		}	
	}
};
```

* The play.js files read the stored cards from the log.txt files and prints them to the terminal of the user one by one.

* The user inputs their answers and they get a response. Once the user goes through all the cards, the final score is displayed. 
