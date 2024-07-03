const { useState, useEffect } = React

import { CarList } from '../cmps/CarList.jsx'
import { carService } from '../services/car.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function CarIndex() {

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

    function onAddToCart(car) {
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
                <CarList 
                    cars={cars}
                    onRemoveCar={onRemoveCar}
                    onEditCar={onEditCar}
                    onAddToCart={onAddToCart}/>
                <hr />
                <pre>{JSON.stringify(cart, null, 2)}</pre>
            </main>
        </div>
    )

}