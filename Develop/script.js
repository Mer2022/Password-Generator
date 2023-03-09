// Assignment code here
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specials = "~!@#$%^&*";
var charTypes = ""
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var length = prompt("What length do you want your password to be?")
  if (length < 8 || length > 128){
  alert ("Your password cannot be less than 8 characters or more than 128 characters")
  return generatePassword()
  }
  var upper = confirm ("do you want to use uppercase?")
  if (upper){
    charTypes += uppercase
  }
  var lower = confirm ("do you want to use lowercase?")
  if (lower){
    charTypes += lowercase
  }
  var nmbrs = confirm ("do you want to use numbers?")
  if (nmbrs){
    charTypes += numbers
  }
  var spcls = confirm ("do you want to use specials?")
  if (spcls){
    charTypes += specials
  }

        retVal = "";
    for (var i = 0, n = charTypes.length; i < length; ++i) {
        retVal += charTypes.charAt(Math.floor(Math.random() * n));
    }
    return retVal;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
