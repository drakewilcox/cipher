var sentence = prompt("Enter a sentence");

console.log(sentence);

var firstLetter = sentence.charAt(0);
var lastLetter = sentence.charAt(sentence.length-1);

console.log(firstLetter, lastLetter);

var firstLast;
function capitalize(firstLetter, lastLetter) {
  return firstLast = (firstLetter + lastLetter).toUpperCase();
};

capitalize(firstLetter, lastLetter);

console.log(firstLast);

alert(firstLast);