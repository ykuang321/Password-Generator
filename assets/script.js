// Assignment code here

//Declare variables
var userInput = Array(3).fill(false);
var userSel = 0;
var passwordLength = 0;
var finalResult;
var newString;
var resultArray = [];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const specialChar =[" ","!",",",",","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",];
const numeric = ["0","1","2","3","4","5","6","7","8","9"];

function generatePassword () {
 
  //Prompt user to input password length
  passwordLength = window.prompt("Enter the password length:\nPassword length must be a number between 8 - 128");

  //Check user's input length
  if (passwordLength >= 8 && passwordLength <= 128) {

    //Confirm user's choice for different password category/preference
    userInput[0] = confirm ("Would you like to include lowercase alphabet?");
    userInput[1] = confirm ("Would you like to include uppercase alphabet?");
    userInput[2] = confirm ("Would you like to include numeric?");
    userInput[3] = confirm ("Would you like to include special characters?\nsuch as ~, !, @, #, $, %, ^, &, *, (, ), _, +, -, =, etc.");

    //Based on the user's selection, convert array of boolean to a int for case selection
    var n = 0;
    for (i = 0; i < userInput.length; i++){
      n = (n << 1) + (userInput[i] ? 1 : 0);
      userSel = n;
    }

      //Based on user selection, use switch statement to combine different array 
      if (userSel === 0){
      alert("Invalid password criteria chosen, please try again");
      }

      else{
      switch(userSel){
        case 1:
          var newString = specialChar;
          break;
        case 2:
          var newString = numeric;
          break;
        case 3:
          var newString = numeric.concat(specialChar);
          break;
        case 4:
          var newString = uppercase;
          break;
        case 5:
          var newString = uppercase.concat(specialChar);
          break;
        case 6:
          var newString = uppercase.concat(numeric);
          break;
        case 7:
          var newString = uppercase.concat(numeric,specialChar);
          break;
        case 8:
          var newString = lowercase;
          break;
        case 9:
          var newString = lowercase.concat(specialChar);
          break;
        case 10:
          var newString = lowercase.concat(numeric);
          break;
        case 11:
          var newString = lowercase.concat(numeric,specialChar);
          break;
        case 12:
          var newString = lowercase.concat(uppercase);
          break;
        case 13:
          var newString = lowercase.concat(uppercase,specialChar);
          break;
        case 14:
          var newString = lowercase.concat(uppercase,numeric);
          break;
        case 15:
          var newString = lowercase.concat(uppercase,numeric,specialChar);
          break;
        }
      for (i = 0; i < passwordLength; i++){
        var index = Math.floor(Math.random() * newString.length);
        resultArray [i] = newString[index];
        }
      }   
  }

  //Alert user the input password length invalid
  else alert("Invalid password length, please try again");

  //Return results
  return finalResult = resultArray.join("");   
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
