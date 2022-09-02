// variables for input into the function
var generateBtn = document.querySelector("#generate");
var lowercaseCharacters = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseCharacters = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]

// Write password to the #password input
function writePassword() {
  for (var i = 0, n = charset.length; i < length; ++i) {
    var value = math.floor(Math.random() * n);
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// prompts to get input for passworsd
  var passwordLength = window.prompt(
    "Choose password length between 8-128."
  )

  if (passwordLength < 8) {
    window.alert("Choose a password with 8 characters or more")
    return null;
  }

  if (passwordLength > 128) {
    window.alert("Choose a password with less than 128 characters.")
    return null;
  }

// varibles for confirmation
  var lowercaseCharacters = window.confirm("Do you want to use lowercase letters?");
  var uppercaseCharacters = window.confirm("Do you want to use uppercase letters?");
  var numbers = window.confirm("Do you want to use numbers?");
  var specialCharacters = window.confirm("Do you want to use special characters?");
// checking for imput and seeing if it is true or false, returns value
  if (
    lowercaseCharacters === false
    && uppercaseCharacters ===false
    && numbers === false
    && specialCharacters === false
    )
  {
  windows.alert("You need to choose at least one password element.")
  return null;
  }

  if (
    lowercaseCharacters === true
    || uppercaseCharacters === true
    || numbers === true
    || specialCharacters === true
    )
  {
    window.alert("Your special password is:")
  }


  passwordText.value = password;

}