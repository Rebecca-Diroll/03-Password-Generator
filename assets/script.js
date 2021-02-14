// Set variables
let passwordLength;
let useLowerCase;
let useUpperCase;
let useNumber;
let useSymbol;

// Wait for the user to click the Generate Password button.
document.querySelector("#generate").addEventListener("click", writePassword)

// Write password to the #password input so it is displayed on the webpage.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// This function calls the userInput function and the characterOptions functions and returs a password output.
function generatePassword() {
  userInput();
  var output = characterOptions(passwordLength);
  return output;
}

// This function record the user input regarding the length of the password and types of characters used.
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

// Arrays of the ASCII numbers for possible values for each type of character is generated. 
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

// This function creates an array of numbers beginning with a low number and ending with a high number.
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// This function takes selected symbols and creates an array of all possible ACII numbers
// for the symbols for the password.
function characterOptions(passwordLength) {
  let charCodes = [];
  if (useLowerCase) charCodes = charCodes.concat(lowerCaseCharCodes);
  if (useUpperCase) charCodes = charCodes.concat(upperCaseCharCodes);
  if (useNumber) charCodes = charCodes.concat(numberCharCodes);
  if (useSymbol) charCodes = charCodes.concat(symbolCharCodes);
  
  // Random characters are chosen from possible options and made into an array.
  const passwordCharacters = []
  for (let i = 0; i < passwordLength; i++) {
    const characterCode = charCodes[Math.floor(Math.random()*charCodes.length)]
    passwordCharacters.push(characterCode)
  }
  
  // The ASCII (Unicode) numbers are converted to characters.
  for(let i = 0; i < passwordCharacters.length; i++) {
    passwordCharacters[i] = String.fromCharCode(passwordCharacters[i]);
  }

  // The characters are joined together into a string.
  return passwordCharacters.join("");
}
