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
const lowerCase = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
const upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
const numbers = "1 2 3 4 5 6 7 8 9"
const symbols = "! @ # $ % ^ & * ( ) - _ = + ~ ` ? < >"

symbols.split (" ")
numbers.split (" ")
upperCase.split (" ")
lowerCase.split (" ")



if(isNaN(securityCodeLength) || securityCodeLength <=8) {
  alert("Password needs to be at least 8 characters, please meet the password requirements");
  } else
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

