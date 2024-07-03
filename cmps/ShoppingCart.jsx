const { useState, useEffect } = React
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'

export function ShoppingCart({ isCartShown }) {

  // TODO: get from storeState
  const cart = []

  // TODO: get from storeState
  const user = userService.getLoggedinUser()

  function removeFromCart(carId) {
    console.log(`Todo: remove: ${carId} from cart`)
    // TODO: use dispatch
  }

  function getCartTotal() {
    return cart.reduce((acc, car) => acc + car.price, 0)
  }

  function onCheckout() {
    const amount = getCartTotal()
    // TODO: checkout function that dispatch
    showSuccessMsg(`Charged you: $ ${amount.toLocaleString()}`)
  }

  if (!isCartShown) return <span></span>
  const total = getCartTotal()
  return (
    <section className="cart" >
      <h5>Your Cart</h5>
      <ul>
        {
          cart.map((car, idx) => <li key={idx}>
            <button onClick={() => {
              removeFromCart(car._id)
            }}>x</button>
            {car.vendor} | ${car.price}
          </li>)
        }
      </ul>
      <p>Total: ${total} </p>
      <button disabled={!user || !total} onClick={onCheckout}>Checkout</button>
    </section>
  )
}
