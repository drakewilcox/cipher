var sentence = prompt("Enter a sentence");

console.log(sentence);

var firstLetter = sentence.charAt(0);
var lastLetter = sentence.charAt(sentence.length-1);

console.log(firstLetter, lastLetter);


//function for taking first & last letter and capitalizing them
var firstLast;
function capitalize(firstLetter, lastLetter) {
  return firstLast = (firstLetter + lastLetter).toUpperCase();
};


//function for taking first & last letter and reversing them
var letterReverse;
function reverse(firstLast) {
  return letterReverse = firstLast.split("").reverse().join("").toLowerCase();
};

//function for taking original sentence and squishes reversed letters at end.
var nextVar;
function squish(sentence, letterReverse) {
  nextVar = sentence + letterReverse;
}

capitalize(firstLetter, lastLetter);
reverse(firstLast);
squish(sentence, letterReverse.toUpperCase());
console.log(firstLast);
console.log(letterReverse);

alert(firstLast);
alert(letterReverse);
alert(nextVar);
