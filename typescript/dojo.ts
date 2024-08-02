// Exercise 1: Basic Types
// Define variables with the following types: string, number, boolean, array of numbers, and any.

let x: string = 'yomama'
let a: number = 1
let b: boolean = true
let arr: number[] = [1, 2, 3]
let yomama: any = 'is fat xd'

// Exercise 2: Functions
// Write a function that takes two numbers as parameters and returns their sum

function addin(x: number, y: number) {
  return x + y
}

// Exercise 3: Interfaces
// Create an interface for a Person with properties: name (string), age (number), and email (string).
// Then create an object that implements this interface.

interface Personini {
  name: string
  age: number
  email: string
}

let yomamaini: Personini = {
  name: 'anna',
  age: 3,
  email: 'to@yo.com',
}

// Exercise 4: Classes
// Define a class called Car with properties: make (string), model (string), year (number).
// Add a method called getInfo() that returns a string with the car's details.

class Car {
  make: string
  model: string
  year: number

  constructor(make: string, model: string, year: number) {
    this.make = make
    this.model = model
    this.year = year
  }

  getInfo(): string {
    return `Hello this car is made by ${this.make} model ${this.model} in ${this.year}`
  }
}

const car = new Car('ford', 'focus', 1998)
console.log(car.getInfo())

// Exercise 5: Generics
// Write a generic function that takes an array of any type and returns the first element of the array.

// Exercise 6: Enums
// Create an enum for days of the week. Then write a function that takes a day as a parameter and returns whether it's a weekday or weekend.

// Exercise 7: Union Types
// Create a function that takes a parameter which can be either a string or number, and returns its length if it's a string or the number itself if it's a number.

// Exercise 8: Type Assertions
// Create a variable of type 'any' with a string value. Then use type assertion to treat it as a string and call a string method on it.

// Exercise 9: Optional Properties
// Create an interface for a Product with properties: id (number), name (string), price (number), and description (optional string).
// Then create an object that implements this interface.

// Exercise 10: Mapped Types
// Create a mapped type that makes all properties of an interface optional.
// Then use it with the Person interface from Exercise 3.
