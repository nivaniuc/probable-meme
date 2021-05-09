
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("data type check" + typeof password)
}


generateBtn.addEventListener("click", writePassword);

//VARIABLES FOR PASSWORD
var character = {
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  specialCharacters: '!@#$%^&*()_+-=<>?'
}

function generatePassword() {
  var password = checkLengthValidation(length);
  return password
}

//FUNCTION TO CHECK PASSWORD AND RETURN USER INPUT VALUES
function checkLengthValidation(parselength) {

  var length = prompt("Enter the length of password");
  var parselength = parseInt(length);
  if (parselength < 8 || parselength > 128 || isNaN(parselength)) {
    alert("Enter a valid number between 8 to 128")
    return "This input is invalid."
  } 

  else if (isNaN(parselength)) {
    alert("Length can not be string");
    return "This input is invalid."

  }
  else {

    return propmtMessageForUser(parselength);
  }
}

//FUNCTION TO TAKE USER INPUT AND INCLUDE CHOSEN VARIABLES
function propmtMessageForUser(parselength){

    var upperCaseConfirmBox = confirm("Do you want to include upper-case letters?")
    var lowerCaseConfirmBox = confirm("Do you want to include lower-case letters?")
    var numConfirmBox = confirm("Do you want to include numbers?");
    var symConfirmBox = confirm("Do you want to include special characters?");

        var characters = "";

   if(!upperCaseConfirmBox && !lowerCaseConfirmBox && !numConfirmBox && !symConfirmBox){
     alert("Please select at least one character")
     return "Selection invalid. Try again."
   }
   else{

    //OPERATION TO INCLUDE GIVEN CHARACTERS
    (upperCaseConfirmBox) ? characters += character.upperCase : '';
    (lowerCaseConfirmBox) ? characters += character.lowerCase : '';
    (numConfirmBox) ? characters += character.numbers : '';
    (symConfirmBox) ? characters += character.specialCharacters : '';

    //CALL FUNCTION
    return password(parselength, characters); 
  }
}

//FUNCTION TO GET RANDOM VALUES AND STORE THEM IN PWD
function password(l, characters) {
  console.log("Inside Function : " + l);
  var pwd = '';
  for (var i = 0; i < l; i++) {
    console.log("Inside Function before loop pwd is:" + pwd);
    pwd = pwd + characters.charAt(Math.floor(Math.random() * characters.length));
    console.log("Inside Function loop pwd is:" + pwd);

  }
  return pwd;
}