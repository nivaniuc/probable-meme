// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //This will validate the length of a password! (Hopefully)
  var password = checkLengthValidation(length);
  return password
}


function checkLengthValidation(parselength) {

  var length = prompt("Enter the length of password");
  var parselength = parseInt(length);
  if (parselength < 8 || parselength > 128) {
    alert("Enter a valid number between 8 to 128")
  }

  else if (isNaN(parselength)) {
    alert("Length can not be string");

  }
  else {
   return lowerCase(parselength);
  }
}


function lowerCase(l) {

  console.log("value of l is " + l)
  var lowerCases = confirm("Do you want to include lower case")

  if (lowerCases === false) {
    upperCase(lowerCases);
  }
  else {
      //Lowercase character codes start from 97 to 122...I think! 
      lowerCases = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      console.log("lower caseS : " + lowerCases);
      return upperCase(lowerCases);
  }
}