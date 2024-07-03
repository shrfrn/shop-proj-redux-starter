

export function AppFooter({ isCartShown, setIsCartShown }) {

    // TODO: move to storeState
    const count = 101
    const carsCount = 0
    const cart = []

    return <footer className="app-footer">
        
        <section className='cart-stats'>
            <p>{carsCount} cars in the shop</p>
            <p className="product-count">{cart.length} products in your Cart</p>
            <button onClick={() => setIsCartShown(!isCartShown)}>
                {(isCartShown) ? 'hide 🛒' : 'show 🛒'}
            </button>
        </section>
        <p>Coffeerights &copy; 2024 - Count: {count}</p>
    </footer>
}
