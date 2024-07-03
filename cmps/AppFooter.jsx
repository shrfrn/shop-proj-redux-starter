const { useState, useEffect } = React

import { UserMsg } from './UserMsg.jsx'
import { ShoppingCart } from './ShoppingCart.jsx'

export function AppFooter() {

    const [isCartShown, setIsCartShown] = useState(false)

    // TODO: move to storeState
    const count = 101
    const carsCount = 0
    const cart = []

    return (
        <footer>
            <h5>
                Currently {carsCount} cars in the shop
            </h5>
            <p>
                Coffeerights to all - Count: {count}
            </p>
            {
                <h5>
                    <span>{cart.length}</span> Products in your Cart
                    <a href="#" onClick={(ev) => {
                        ev.preventDefault()
                        setIsCartShown(!isCartShown)
                    }}>
                        ({(isCartShown) ? 'hide' : 'show'})
                    </a>
                </h5>
            }
            <ShoppingCart isCartShown={isCartShown} />
            <UserMsg />
        </footer>
    )
}
