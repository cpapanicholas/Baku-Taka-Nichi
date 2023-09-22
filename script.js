// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
const securityCodeLength = parseInt(prompt("How long would you like your password to be?"));
const inclUpper = confirm("Would you like your password to include uppercase characters?");
const inclLower = confirm("Would you like your password to include lowercase characters?");
const inclSymbol = confirm("Would you like your password to include symbols?");
const inclNumber = confirm("Would you like your password to include numbers?");
// Assignment code here
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "123456789"
const symbols = "!@#$%^&*()-_=+~`?<>"

if(isNaN(securityCodeLength) || securityCodeLength <=8) {}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

let passwordcombo = lowerCase;
if (includeupperCase) passwordcombo += upperCase;
if (includenumbers) passwordcombo += numbers;
if (includesymbols) passwordcombo += symbols;

let password ='';


for (let i=0; i<length; i++) {
  const randomness = Math.floor(math.random() * passwordcombo.length);
  password += passwordcombo[randomness];



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function askLowercase() {
  if (confirm())






prompt("do you want lowercase characters?")

prompt("do you want uppercase characters?")

prompt("do you want numbers?")

prompt("do you want special characters?")