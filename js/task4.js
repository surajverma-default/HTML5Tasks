// a program to understand closure how the function execute.
first = function () {
  message("start of first function")
  var a = 12

  var innerFirstFunction = function () {
    message("innerFirstFunction Started")
    a++
    second(a)
    message("The value is :" + a)
    return message("innerFirstFunction returning")
  }

  message("calling the inner function inside first function")
  return innerFirstFunction
}

second = function (value) {
  message("start of second function")
  value++

  var innerSecondFunction = function () {
    message("innerSecondFunction Started")
    value++
    third(value)
    message("The value is :" + value)
    return message("innerSecondFunction returning")
  }

  message("calling the inner function inside second function")
  return innerSecondFunction()
}

third = function (value) {
  message("start of third function")
  value++

  var innerThirdFunction = function () {
    message("innerThirdFunction Started")
    message("that's too deep now, stop!")
    value++
    message("The value is :" + value)
    return message("innerThirdFunction returning")
  }

  message("calling the inner function inside third function")
  return innerThirdFunction()
}


//utility ---

function message(text) {
  console.log(text)
}


var operate = first();
operate();
