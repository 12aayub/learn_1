// Purpose: Generates random number between 1 and 100, inclusive
// Signature: Takes inputed integers and returns a random one
// Examples:
// getRandomIntInclusive(1,100)
// 97
//
//
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

//create secret number
var secretNumber = getRandomIntInclusive(1,100);

alert (secretNumber);

var userNumber;

//user enters number
function inputNumber() {
    userNumber = prompt("Enter a number between 1 and 100")
}

//checks user number is valid !!!!!
function isUserNumberValid(v) {
  return v <= 100 && v >= 1 && v != NaN && v % 1 == 0;
}

//is number valid
function isNumberValid(v) {
  return isUserNumberValid(userNumber);
}

//valid number
function inputValidNumber() {
  var number = inputNumber();
  //when invalid
  while (!isNumberValid(userNumber)) {
    alert("Number is invalid");
    number = inputNumber();
    isUserNumberValid(number);
  } while (isNumberValid(userNumber)) {
    while (userNumber > secretNumber) {
      userNumber = prompt ("Your number is too high. Please guess again")
    } while (userNumber < secretNumber) {
      userNumber = prompt ("Your number is too low. Please guess again")
    } while (userNumber == secretNumber) {
      alert ("You're correct!");
      break;
    } break;
   }
 }

inputValidNumber();
