class Person {
  constructor(name, email, phone, age) {
    this.id = this.getUUID()
    this.name = this.validateName(name)
    this.email = this.validateEmail(email)
    this.phone = this.validatePhoneNumber(phone)
    this.age = this.validateAge(age)
  }

  validateEmail(email) {
    this.stringCheck(email)
    var pattern = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    var errorMessage = "Email format is not correct"
    return this.validator(pattern, email, errorMessage)
  }

  validatePhoneNumber(phone) {
    this.stringCheck(phone)
    var pattern = new RegExp("^[0-9]{10}$")
    var errorMessage = "Phone number format is not correct"
    return this.validator(pattern, phone, errorMessage)

  }

  validateAge(age) {
    this.stringCheck(age)
    var numberAge = parseInt(age)
    if (isNaN(numberAge)) throw "Age format is wrong"
    if (numberAge < 0 || numberAge > 120) {
      throw "Please enter the age under 0 to 120 range"
    } else {
      return age;
    }
  }

  validateName(name) {
    this.stringCheck(name)
    return name
  }

  validator(pattern, input, errorMessage) {
    if (pattern.test(input)) {
      return input
    } else {
      throw errorMessage
    }
  }

  stringCheck(input) {
    if (typeof input === 'string' || input instanceof String) {
      return true
    } else {
      throw "Please input string value"
    }
  }

  getUUID() {
    //got this method from internet to generate a uuid
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

var person1 = new Person("Sahil", "sahil@gmail.com", "9899191991", "56")
var person2 = new Person("Abhijit", "abhijit@gmail.com", "9899191992", "24")
var person3 = new Person("Rekha", "rekha@gmail.com", "9899191993", "35")
var person4 = new Person("Amit", "amit@gmail.com", "9899191994", "42")
var person5 = new Person("Sundar", "sundar@gmail.com", "9899191995", "61")
var person6 = new Person("Tim", "tim@gmail.com", "9899191996", "90")

var personArray = [person1, person2, person3, person4, person5, person6]
personArray.sort((a, b) => {
  return a.age - b.age
})
console.log(personArray)
