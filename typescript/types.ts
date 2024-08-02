type Food = string

let favoriteFood: Food = 'pizza'

type Address = {
  street: string
  city: string
  country: string
}

type Person = {
  name: string
  age: number
  isStudent: boolean
  address: Address
}

let person1: Person = {
  name: 'John',
  age: 30,
  isStudent: false,
  address: {
    street: '123 Main St',
    city: 'Springfield',
    country: 'USA',
  },
}

let person2: Person = {
  name: 'Jane',
  age: 25,
  isStudent: true,
  address: {
    street: '456 Elm St',
    city: 'Springfield',
    country: 'USA',
  },
}
