const { useState } = React

const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { ShoppingCart } from './cmps/ShoppingCart.jsx'

import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { CarIndex } from './pages/CarIndex.jsx'

export function App() {

    const [isCartShown, setIsCartShown] = useState(false)

    return <Router>
        <section className="main-layout app">
            <AppHeader />
            <main>
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<AboutUs />} path="/about" />
                    <Route element={<CarIndex />} path="/car" />
                </Routes>
            </main>
            <AppFooter 
                isCartShown={isCartShown} 
                setIsCartShown={setIsCartShown}/>
            <ShoppingCart isCartShown={isCartShown}/>
            <UserMsg />
        </section>
    </Router>
}