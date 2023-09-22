// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var password = "";
  const securityCodeLength = parseInt(prompt("How long would you like your password to be?"));
console.log(securityCodeLength)
if(isNaN(securityCodeLength) || securityCodeLength <=8) {
  alert("Password needs to be at least 8 characters, please meet the password requirements");
  return "";
 
} 

  



const inclUpper = confirm("Would you like your password to include uppercase characters?");
const inclLower = confirm("Would you like your password to include lowercase characters?");
const inclSymbol = confirm("Would you like your password to include symbols?");
const inclNumber = confirm("Would you like your password to include numbers?");
console.log(securityCodeLength, inclUpper, inclLower, inclNumber, inclSymbol);
if (!inclLower && !inclUpper && !inclNumber && !inclSymbol) {
  alert("You must choose at least one character type")
  return "";


}

// Assignment code here

const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "123456789"
const symbols = "!@#$%^&*()-_=+~`?<>"



let passwordcombo = lowerCase;
if (inclUpper) passwordcombo += upperCase;
if (inclNumber) passwordcombo += numbers;
if (inclNumber) passwordcombo += symbols;




for (let i=0; i<securityCodeLength; i++) {
  var randomness = Math.floor(Math.random() * passwordcombo.length);
  password += passwordcombo[randomness];



}

// Add event listener to generate button
return password; 
}

