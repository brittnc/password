// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCase = ['!','@','#','$','%','&','*','?','/','+','='];
var userChoiceArray=[];


//Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    var userChoice = window.prompt("How many charaters? Choose between 8-128.")
    var lowerCaseChoice = confirm("Would you like lower case?")
    var upperCaseChoice = confirm("Would you like upper case?")
    var specialCaseChoice = confirm("Would you like special charaters?")
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
    var password = []
    for(var i = 0; i < userChoice; i++){
        var randomIndex = Math.floor(Math.random() * userChoiceArray.length)
        var randomCharacter = userChoiceArray[randomIndex]
        password.push(randomCharacter)
    }

    passwordText.value = password.join("");
    console.log(userChoiceArray)
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
