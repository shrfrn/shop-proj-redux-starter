const { useState } = React

export function HomePage() {

    // TODO: move to storeState
    const [count, setCount] = useState(10)

    function changeCount(diff) {
        console.log('Changing count by:', diff)
        
        // TODO: use dispatch
        setCount(count + diff)
    }

    return <section className="home-page">
        
        <div className="counter">
            <h2>Count {count}</h2>
            <button onClick={() => changeCount(1)}>+</button>
            <button onClick={() => changeCount(10)}>+10</button>
        </div>

        <img src="assets/img/logo.png" />
    </section >
}