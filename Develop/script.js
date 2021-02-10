var passwordLength = prompt("Number of Characters? Choose a number between 8 and 128.");

let useLowerCase = confirm("Include lowercase letters?");
alert(useLowerCase); // True if OK is pressed.

let useUpperCase = confirm("Include uppercase letters?");
alert(useUpperCase); // True if OK is pressed.

let useNumbers = confirm("Include numbers?");
alert(useNumbers); // True if OK is pressed.

let useSymbols = confirm("Include symbols?");
alert(useSymbols); // True if OK is pressed.

function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()10)+48);
}

function getRandomSymbol(){
  var symbol = "!@#$%^&*=+?";
  return symbol[Math.floor(Math.random()*symbol.length)];
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
