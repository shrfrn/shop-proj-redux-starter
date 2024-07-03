const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'

import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { CarApp } from './pages/CarApp.jsx'

export function App() {

    return <Router>
        <section className="main-layout app">
            <AppHeader />
            <main>
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<AboutUs />} path="/about" />
                    <Route element={<CarApp />} path="/car" />
                </Routes>
            </main>
            <AppFooter />
        </section>
    </Router>
}