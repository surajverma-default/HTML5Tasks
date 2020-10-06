// for a better understanding a new program with use case of closure

function nameWorker(firstName) {

  //this is a closure. it has access to any local variable present in the nameWorker function.
  function fullNameGenerator(lastName) {
    message(firstName + " " + lastName)
  }

  return fullNameGenerator
}

//this variable stores the reference to fullNameGenerator Function and also has the access to it's parent's parameter
//even though the parent function is executed
var fullName = nameWorker("Ronit")

//And that is why we see a full name as it uses the parameter value of it's parent function.
fullName("Sharma")

//Same first name but different last name.
fullName("Valmiki")

nameWorker("Akhilesh")("Yadav") // this is another way of calling inner function but here the reference
//is not stored anywhere.

//Another example.

function addNumbers(x) {
  return function (y) {
    message(x + y)
  }
}

var addFirstTime = addNumbers(3)
addFirstTime(23)
addFirstTime(209)

//so from these example we can understand that the state of the closure is maintained in the memory even though the parent
//function is executed

function message(text) {
  console.log(text)
}

