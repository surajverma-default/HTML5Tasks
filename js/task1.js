/**
 Question
 "Create a Right Arrow Star Pattern using ''*"" given an odd number which denotes the number of rows/lines.
 Input: 3

 Output:
 *
 **
 *

 Input: 5

 Output:
 *
 **
 ***
 **
 *

 */

//TIP for testing copy the code and run it in the browser console.K

var input = prompt("Please enter the odd number : ");

task1(input);

function task1(input){
  if (isNaN(input)){
    logIntoConsole("Please input a valid odd number")
  } else{
    checkIfOddAndPrint(input)
  }
}

function checkIfOddAndPrint(input){
  if (isOdd(input)){
    printPattern(input)
  }else{
    logIntoConsole("Your input is even, please enter an odd number")
  }
}

function printPattern(input){
  printUpperStars(input)
  printLowerArrows(input)
}

function printUpperStars(input){

  let middleValue = Math.ceil(input / 2);

  for (let i = 1; i < middleValue; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star+= "*"
    }
    logIntoConsole(star)
  }
}

function printLowerArrows(input){
  var middleValue = Math.ceil(input/2)

  for (let i = middleValue; i > 0; i--) {
    var star = ""
    for (let j = 0; j < i; j++) {
      star+= "*"
    }
    logIntoConsole(star)
  }
}

function logIntoConsole(message){
  console.log(message)
}

function isOdd(input){
  return input % 2 !== 0;
}
