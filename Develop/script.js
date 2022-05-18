// Assignment code here
const generatePassword = () => {
  let pswdLength = prompt("How long do you want your password? Type in a whole number between 8 and 128.");
  while (isNaN(pswdLength)) {
    console.log(typeof (pswdLength))
    pswdLength = prompt("That is not a number, please enter a whole number between 8 and 128");
  }
  while (pswdLength < 8 || pswdLength > 128) {
    pswdLength = pswdLength > 128 ? prompt("That number is over 128. Write a number between 8 and 128.") : prompt("That number is less than 8. Write a number between 8 and 128.");
  }
  const lwrcase = confirm("Do you need lowercase letters? 'ok' for yes, 'cancel' for no.");
  const uppercase = confirm("Do you need uppercase letters? 'ok' for yes, 'cancel' for no.");
  const numbers = confirm("Do you need numbers? 'ok' for yes, 'cancel' for no.");
  const spclchar = confirm("Do you need special characters? 'ok' for yes, 'cancel' for no.");

  console.log(pswdLength, lwrcase, uppercase, numbers, spclchar)
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
