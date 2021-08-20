// Assignment Code
var generateBtn = document.querySelector("#generate");addEventListener("click", writePassword);

var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','?','<','>',':',';','/'];
var numberChar = ['1','2','3','4','5','6','7','8','9'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = window.promt("How many Characters?");
  var lowerQuestion = window.prompt("Lower Case?");
  var upperQuestion = window.prompt("Upper Case?");
  var specialQuestion = window.prompt("Special Characters?");
  var numberQuestion = window.prompt("Numbers?");


  var possibleCharactors = []
    if (lowerQuestion) {
      possibleCharactors.concat(lowerChar);
    }
    if (upperQuestion) {
      possibleCharactors.concat(upperChar);
    }
    if (specialQuestion) {
      possibleCharactors.concat(specialChar);
    }
    if (numberQuestion) {
      possibleCharactors.concat(numberChar);
    }

    var randomPassword = []
  for(var i=0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * possibleCharactors.length);
    var randomCharacter = possibleCharactors[randomNumber];
    randomPassword.push(randomCharacter);
  }

  }

var myPassword = lowerQuestion.concat(upperQuestion,numberQuestion, specialQuestion);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);