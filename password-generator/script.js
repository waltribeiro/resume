// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var generateAfterText = document.querySelector("#afterText");

// don't use an array, use strings here instead
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()?";

// run the button function
function myButton() {
  var passwordLength = parseInt(prompt("Choose a password length from 8 to 128 characters"));
  
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Choose a password length from 8 to 128 characters");
  } else {
    var charactersChoices = ""; // start with an empty string
    var uppercaseConfirm = confirm("Click OK to confirm including lowercase characters.");

    if (uppercaseConfirm == true) {
      charactersChoices += uppercase
    }
    var lowercaseConfirm = confirm("Click OK to confirm including uppercase characters.");

    if (lowercaseConfirm == true) {
      charactersChoices += lowercase
    }
    var numbersConfirm = confirm("Click OK to confirm including numbers.");

    if (numbersConfirm == true) {
      charactersChoices += numbers
    }
    var symbolsConfirm = confirm("Click OK to confirm including special characters.");
    if (symbolsConfirm == true) {
      charactersChoices += symbols
    }

    charactersChoices = charactersChoices.split(""); // Vip's split method, much simpler than the array 

    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var charactersAll = charactersChoices[Math.floor(Math.random() * charactersChoices.length)];

      password += charactersAll; // concatenate empty string + all the password strings

    }

    passwordText.value = password; // print the password into the textarea id="password"

  }
}

generateBtn.addEventListener("click", myButton)
var newContent = document.createTextNode("Hello!"); 