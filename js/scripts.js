var sentence = prompt("Enter a sentence");
console.log(sentence);

var firstLetter = sentence.charAt(0);
console.log(firstLetter);

var bigLetter = firstLetter.toUpperCase();


var newSentence = sentence.replace(firstLetter, bigLetter);

alert(newSentence);