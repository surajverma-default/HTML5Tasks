class Stack {
  constructor() {
    this.items = []
    this.count = 0
  }

  //Add element to top of the stack.
  push(element) {
    this.items[this.count] = element
    // this.items.push(element)  <-- Can also use this to push element into the array.
    this.count++
    logIntoConsole("The size of the stack is : " + this.count.toString())

  }

  //Remove the top element of the stack.
  pop() {
    if (this.isEmpty()) return undefined
    let deleteItem = this.items[this.count - 1]
    this.customDelete(deleteItem)
    // this.items.pop()
    logIntoConsole(deleteItem + "is popped out of the stack")
    logIntoConsole("The size of the stack is : " + this.count.toString())
  }

  //shows the top element of the stack.
  peek() {
    if (this.isEmpty()) return undefined
    let topItem = this.items[this.count - 1]
    logIntoConsole("The Top element in the stack is : " + topItem)
  }

  //checks for empty stack
  isEmpty() {
    return this.count === 0;
  }

  //this method is written by me. there is a default method in javascript to pop element out of array
  customDelete(deleteItem) {
    var temp = []
    var count = this.count
    for (let i = 0; i < this.count; i++) {
      if (this.items[i] !== deleteItem) {
        temp.push(this.items[i])
      }
    }
    this.resetStack()
    this.items = temp
    this.count = count - 1
  }

  resetStack() {
    this.items = []
    this.count = 0
  }

}

function logIntoConsole(message) {
  console.log(message)
}

//can write your own cases for testing.
const stack = new Stack()
stack.push(100)
stack.push(200)
stack.peek()
stack.push(300)
stack.pop()
stack.pop()
