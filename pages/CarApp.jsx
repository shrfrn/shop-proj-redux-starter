const { useState, useEffect } = React

import { carService } from '../services/car.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function CarApp() {

    // TODO: move to storeState
    const [cars, setCars] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        carService.query()
            // TODO: use dispatch
            .then(setCars)
    }, [])

    function onRemoveCar(carId) {
        // TODO: move to a function and use dispatch
        carService.remove(carId)
            .then(() => {
                showSuccessMsg('Car removed')
                // TODO: use dispatch
                setCars(cars.filter(c => c._id !== carId))
            })
            .catch(err => {
                console.log('Cannot remove car', err)
                showErrorMsg('Cannot remove car')
            })
    }

    function onAddCar() {
        const carToSave = carService.getEmptyCar()

        // TODO: move to a function and use dispatch
        carService.save(carToSave)
            .then((savedCar) => {
                showSuccessMsg(`Car added (id: ${savedCar._id})`)
                // TODO: use dispatch
                setCars([...cars, savedCar])
            })
            .catch(err => {
                console.log('Cannot add car', err)
                showErrorMsg('Cannot add car')
            })


    }
    function onEditCar(car) {
        const price = +prompt('New price?')
        const carToSave = { ...car, price }

        // TODO: move to a function and use dispatch
        carService.save(carToSave)
            .then((savedCar) => {
                // TODO: use dispatch
                setCars(cars.map(c => (c._id === car._id) ? carToSave : c))
                showSuccessMsg(`Car updated to price: $${savedCar.price}`)
            })
            .catch(err => {
                console.log('Cannot update car', err)
                showErrorMsg('Cannot update car')
            })
    }

    function addToCart(car) {
        console.log(`Adding ${car.vendor} to Cart`)
        // TODO: use dispatch
        setCart([...cart, car])
        showSuccessMsg('Added to Cart')
    }

    return (
        <div>
            <h3>Cars App</h3>
            <main>
                <button onClick={onAddCar}>Add Car ⛐</button>
                <ul className="car-list">
                    {cars.map(car =>
                        <li className="car-preview" key={car._id}>
                            <h4>{car.vendor}</h4>
                            <h1>⛐</h1>
                            <p>Price: <span>${car.price.toLocaleString()}</span></p>
                            <p>Owner: <span>{car.owner && car.owner.fullname}</span></p>
                            <div>
                                <button onClick={() => {
                                    onRemoveCar(car._id)
                                }}>x</button>
                                <button onClick={() => {
                                    onEditCar(car)
                                }}>Edit</button>
                            </div>
                            <button className="buy" onClick={() => {
                                addToCart(car)
                            }}>Add to Cart</button>

                        </li>)}
                </ul>
                <hr />
                <pre>{JSON.stringify(cart, null, 2)}</pre>
            </main>
        </div>
    )

}