//Cloze card constructor
function Cloze(fullText, toDelete){
	if (this instanceof Cloze) {
		this.fullText = fullText;
		this.toDelete = toDelete;
	}
	else {
		return new Cloze(fullText, toDelete);
	}
	this.deletion = function(){
		var partial = this.fullText.replace(toDelete,'...');
		console.log (partial);
	}
	this.clozeCompare = function(guess){
		if (this.toDelete === guess){
			console.log(fullText);
			return true;
		}
		else {
			console.log("Oops, wrong answer. The answer is " + this.fullText);
			return false;
		}
	}
}

module.exports = Cloze;


