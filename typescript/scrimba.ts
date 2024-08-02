let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1
const orderQueue: Order[] = []

type Pizza = {
  id: number
  name: string
  price: number
}

type Order = {
  id: number
  pizza: Pizza
  status: 'ordered' | 'completed'
}

const menu: Pizza[] = [
  { id: nextPizzaId++, name: 'Margherita', price: 8 },
  { id: nextPizzaId++, name: 'Pepperoni', price: 10 },
  { id: nextPizzaId++, name: 'Hawaiian', price: 10 },
  { id: nextPizzaId++, name: 'Veggie', price: 9 },
]

function addNewPizza(pizzaObj: Pizza): Pizza[] {
  menu.push(pizzaObj)
  pizzaObj.id++
  return menu
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === 'string') {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase(),
    )
  } else if (typeof identifier === 'number') {
    return menu.find((pizza) => pizza.id === identifier)
  } else {
    throw new TypeError(
      'Parameter `identifier` must be either a string or a number',
    )
  }
}

// addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 })
// addNewPizza({ name: 'BBQ Chicken', price: 12 })
// addNewPizza({ name: 'Spicy Sausage', price: 11 })

// placeOrder("Chicken Bacon Ranch")
// placeOrder("Pepperoni")
// completeOrder(1)
// placeOrder("Anchovy")
// placeOrder("Veggie")
// completeOrder(2)

// console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)
