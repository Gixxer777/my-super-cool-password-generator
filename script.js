// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specChar = [" ", '"', "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var userpasswordDecision = [];
var finalPassword = "";
function generatePassword() {

  // Select password length
var passwordLengthDecision = window.prompt("How many characters will your password be? Must be between 8 and 128.");

if (!passwordLengthDecision) {
  window.alert("Must select a number between 8 and 128!")
  return;
}

if (passwordLengthDecision < 8) {
  window.alert("Password must be at least 8 characters!")
  return;
}

if (passwordLengthDecision > 128) {
  window.alert("Password cannot have more than 128 characters!")
  return;
}

// Select if you want lowercase characters
var lowercaseCharDecision = window.confirm("Would you like your password to include lowercase characters?")

if (lowercaseCharDecision) {
  userpasswordDecision = userpasswordDecision.concat(lowercaseChar)
  
}

// Select if you want uppercase characters
var uppercaseCharDecision = window.confirm("Would you like uppercase characters in your password?")

if (uppercaseCharDecision) {
  userpasswordDecision = userpasswordDecision.concat(uppercaseChar)

}

// Select if you want numbers
var numericDecision = window.confirm("Would you like to have numbers included in your password?")

if (numericDecision) {
  userpasswordDecision = userpasswordDecision.concat(numeric)
}

// Select if you want special characters
var specCharDecision = window.confirm("Would you like to have special characters in your password?")

if (specCharDecision) {
  userpasswordDecision = userpasswordDecision.concat(specChar)
}


for (var i = 0; i < passwordLengthDecision; i++) {
  finalPassword += userpasswordDecision[Math.floor(Math.random() * userpasswordDecision.length)]
}
return finalPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);