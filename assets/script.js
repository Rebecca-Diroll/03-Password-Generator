let passwordLength;
let useLowerCase;
let useUpperCase;
let useNumber;
let useSymbol;
/*
document.querySelector("#generate").addEventListener("click", writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  userInput();
  var output = characterOptions(passwordLength);
  return output;
}
*/
function userInput() {
    passwordLength = prompt("Number of Characters? Choose a number between 8 and 128.");
    passwordLength = parseInt(passwordLength)
    while (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Number of Characters? Choose a number between 8 and 128.");
    } 
    
    useLowerCase = confirm("Include lowercase letters?");
    useUpperCase = confirm("Include uppercase letters?");
    useNumber = confirm("Include numbers?");
    useSymbol = confirm("Include symbols?");
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

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function characterOptions(passwordLength) {
  let charCodes = [];
  if (useLowerCase) charCodes = charCodes.concat(lowerCaseCharCodes);
  if (useUpperCase) charCodes = charCodes.concat(upperCaseCharCodes);
  if (useNumber) charCodes = charCodes.concat(numberCharCodes);
  if (useSymbol) charCodes = charCodes.concat(symbolCharCodes);
  
  const passwordCharacters = []
  for (let i = 0; i < passwordLength; i++) {
    const characterCode = charCodes[Math.floor(Math.random()*charCodes.length)]
    passwordCharacters.push(characterCode)
  }
  
  for(let i = 0; i < passwordCharacters.length; i++) {
    passwordCharacters[i] = String.fromCharCode(passwordCharacters[i]);
  }

  return passwordCharacters.join("");
}
