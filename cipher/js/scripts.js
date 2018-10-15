
var saySomething = function(whatToSay) {
  alert(whatToSay);
};

var sentence = prompt("Please enter a sentence.");
//alert(sentence);
//var firstLetter = (sentence.charAt(0));
//var lastLetter = (sentence.charAt(sentence.length-1));
//var firstLast = firstLetter.toUpperCase() + lastLetter.toUpperCase();
//alert(firstLast);
function capString(sentence) {
  var firstLetter = (sentence.charAt(0));
  var lastLetter = (sentence.charAt(sentence.length-1));
  return firstLetter.toUpperCase() + lastLetter.toUpperCase();
};
saySomething(capString(sentence));

function reverseString(sentence) {
  var firstLetter = (sentence.charAt(0));
  var lastLetter = (sentence.charAt(sentence.length-1));
  var firstLast = firstLetter.toUpperCase() + lastLetter.toUpperCase();
  return firstLast.split("").reverse().join("");
};

saySomething(reverseString(sentence));

function comboString(sentence) {
  var comboResult = reverseString(capString(sentence));
  return sentence + comboResult;
};

saySomething(comboString(sentence));

function splitString(sentence) {
  var middleCharInt = (sentence.length)/2;
  var middleChar = sentence.charAt(middleCharInt);
  return middleChar + comboString(sentence);
};

saySomething(splitString(sentence));
