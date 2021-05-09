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


function upperCase(l) {

  var upperCases = confirm("Do you want to include Upper case")

  if (upperCases === false) {
    number(upperCases);
  }
  else {
    upperCases = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    upperCases += l;
    return number(upperCases);
  }

}

function number(l) {

  var numbers = confirm("Do you want to include Numbers ")

  if (numbers === false) {
    symbol(numbers);
  }
  else {
    numbers = String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    numbers += l;
    return symbol(numbers);
  }
}


function symbol(l) {

  var symbols = confirm("Do you want to include special characters ")

  if (symbols === false) {
    checkLengthValidation();
  }
  else {
    const specialCharacters = "!@#$%^&*()_+<>,./"
    symbols = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    symbols += l;
    return symbols;
  }
}