function userInput() {
  var passwordLength = prompt("Number of Characters? Choose a number between 8 and 128.");
  let chooseLowerCase = confirm("Include lowercase letters?");
  let chooseUpperCase = confirm("Include uppercase letters?");
  let chooseNumber = confirm("Include numbers?");
  let chooseSymbol = confirm("Include symbols?");
}

function characterTypes() {
  if (chooseLowerCase){
    useLowerCase;
  }
  if (chooseUpperCase){
    useUpperCase;
  }
  if (chooseNumber){
    useNumber;
  }
  if (chooseSymbol){
    useSymbol;
}

const lowerCaseCharCodes = arrayFromLowToHigh(97, 122);
const upperCaseCharCodes = arrayFromLowToHigh(65, 90);
const numberCharCodes = arrayFromLowToHigh(48, 57);
const symbolCharCodes = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
  ).concat(
  arrayFromLowToHigh(91, 96)
  ).concat(
    arrayFromLowToHigh(123, 126)
);

function generatePassword(passwordLength, useLowerCase, 
useUpperCase, useNumber, useSymbol) {
   let charCodes = [];
   if (useLowerCase) charCodes = charCodes.concat(lowerCaseCharCodes);
   if (useUpperCase) charCodes = charCodes.concat(upperCaseCharCodes);
   if (useNumber) charCodes = charCodes.concat(numberCharCodes);
   if (useSymbol) charCodes = charCodes.concat(symbolCharCodes);
}

const passwordCharacters = []
for (let i = 0; i < passwordLength; i++) {
  const character = charCodes[Math.floor(Math.random()*passwordLength)]
  passwordCharacters.push(character)
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {}
    array.push(i)
  }
  return array
}

/* function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol(){
  var symbol = "!@#$%^&*=+?";
  return symbol[Math.floor(Math.random()*symbol.length)];
} */

/*function generatePassword(){
  var i;
  for(let i = 0; i < passwordLength; i++) {

  }
}  */
/*
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
*/