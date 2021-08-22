// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCase = ['!','@','#','$','%','&','*','?','/','+','='];
var numberCase = ['1','2','3','4','5','6','7','8','9'];
var userChoiceArray=[];

//To begin prompt
window.onload = alert("Please click 'Generate Password' to begin!");

//Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
//How many chars
    var userChoice = window.prompt("How many charaters? Choose between 8-128.")
//Error message if not 8-128 chars
    if(userChoice <8 || userChoice > 128){
         window.prompt("Password must be between 8-128 characters! Please choose between 8-128.");
        };
//Would you like lower,upper,special chars?
    var lowerCaseChoice = confirm("Would you like lower case?")
    var upperCaseChoice = confirm("Would you like upper case?")
    var specialCaseChoice = confirm("Would you like special charaters?")
    var numberCaseChoice = confirm("Would you like numbers?")
 //If statements   
    if(userChoice){
        console.log(userChoice)
    }   else if(!userChoice){
        return
    }

    if(lowerCaseChoice === true){
        userChoiceArray = userChoiceArray.concat(lowerCase)
    }
    if(upperCaseChoice === true){
        userChoiceArray = userChoiceArray.concat(upperCase)

    }
    if(specialCaseChoice === true){
        userChoiceArray = userChoiceArray.concat(specialCase)
    }
    if(numberCaseChoice === true){
        userChoiceArray = userChoiceArray.concat(numberCase)
    }
//Randomizer 
    var password = []
    for(var i = 0; i < userChoice; i++){
        var randomIndex = Math.floor(Math.random() * userChoiceArray.length)
        var randomCharacter = userChoiceArray[randomIndex]
        password.push(randomCharacter)
    }
//Removes the commas from the generated password
    passwordText.value = password.join("");
    console.log(userChoiceArray)
};


// Event listener
generateBtn.addEventListener("click", writePassword);
