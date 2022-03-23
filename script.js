// Assignment Code
var generateBtn = document.querySelector("#generate");



// Created Arrays of Possible Options of Special  Characters Choices for the Password to be used
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// The Following Function is to collect the variables from User and conditional to make the password
function questions() {
  
// Variable to be used to create cicle of the requests till all conditions are met
  var control = false;

  do {
    
// This confirmation will be used to Set a begining and also a brake if User does not want to continue executing    
    var BuildPass = window.confirm("Do you want to Generate a New Password");
    if (BuildPass);
    else 
    return;

// Variables collected from User and selection of characters to gather minimun condition for password generation
    var length = prompt(" Hello,  please Select a password length between 8 and 128 characters");
    var askNumbers = confirm("Now, do you want to include numbers in your New password ");
    var askLowerCase = confirm("Also, Select if you want your password to include lower case letters?");
    var askUpperCase = confirm("Do you want your password to include UPPER case letters?");
    var askSpecial = confirm(" For Stronger Password do you want to  include special characters in it?");
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    } 

    //  Conditions to validate Strong Password Policy
    if ((length == null))
    alert(" Password NOT Generated You must Choose a lenght for the password to generate it, Try Again");
    else if((length < 8)||(length > 128))
    alert(" Password NOT Generated You must Choose the lenght between 8 and 128 characters, Try Again");
    else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
    alert(" Pass NOT Generated ,You should select at least one type of special characters, Try Again.");
    else
    control = true;
    
   

  } while(!control);
  
  return responses;
  
}
// The following function joins all the user responses and then creates the result - a strong password.
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";

// Conditionals to add new elements in the array created in Question Function

  if (passwordOptions.askNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askUpperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }


  console.log(possibleCombo);

//  Using For to repeat the agregation of characters in the Password till length assigned by the user
  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    
  }
  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
