// Assignment Code
var generateBtn = document.querySelector("#generate");

// create an array to draw characters from
var alphaU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var alphaL = "abcdefghijklmnopqrstuvwxyz".split("");
var number = "1234567890".split("");
var other = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
// create empty arrys to push letters to 
var pass = [];
var possibleChar = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  pass = [];
  possibleChar = [];
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword); {

  // create function to begin after button push
  function generatePassword() {
    var passLenght = prompt("please select how many characters between 8 and 128 long");

    // Add prompt and alert buttons to get data from person 

    if (passLenght < 8) {
      alert("Invalad selection");
      return;
    }
    else if (passLenght > 128) {
      alert("Invalid selection");
      return;
    }
    //get information and add it to pass array
    else {
      var upper = confirm("Would you like upper-case letters");
      if (upper) {
        var lower = confirm("Would you like lower-case letters");
        possibleChar = possibleChar.concat(alphaU);
      }
      else {
        lower = confirm("Would you like lower-case letters");
      }

      if (lower) {
        var special = confirm("Would you like Special characters");
        possibleChar = possibleChar.concat(alphaL);
      }
      else {
        special = confirm("Would you like Special characters");

      }
      if (special) {
        var num = confirm("Would you like numbers?");
        possibleChar = possibleChar.concat(other);
      }
      else {
        num = confirm("Would you like numbers?");
      }
      if (num) {
        alert("Thank you for your selection Generating password");
        possibleChar = possibleChar.concat(number);
      }
      else {
        alert("Thank you for your selection Generating password");
      }
    }
    // using inputs from user create password
    if (upper && lower && special && num ) {

      for (var i = 0; i < passLenght; i++) {
        pass.push((possibleChar[Math.floor(Math.random() * possibleChar.length)]));
      }
    }
    else if (lower && special && num ) {
      for (var i = 0; i < passLenght; i++) {

        pass.push((possibleChar[Math.floor(Math.random() * possibleChar.length)]));
      }
    }
    else if (special && num ) {
      for (var i = 0; i < passLenght; i++) {

        pass.push((possibleChar[Math.floor(Math.random() * possibleChar.length)]));
      }
    }
    else {
      for (var i = 0; i < passLenght; i++) {

        pass.push((possibleChar[Math.floor(Math.random() * possibleChar.length)]));
      }
    }
    // turn arry into string for output 
    return pass.join("")
  }
}
