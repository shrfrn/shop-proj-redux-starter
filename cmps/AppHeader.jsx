const { NavLink } = ReactRouterDOM

import { userService } from '../services/user.service.js'

import { LoginSignup } from './LoginSignup.jsx'

export function AppHeader() {

    // TODO: get from storeState
    var user = userService.getLoggedinUser()

    function onLogout() {
        // TODO: move to a function and use dispatch
        userService.logout()
            .then(() => {
                user = null         
            })
    }

    return (
        <header className="app-header">
            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/car">Cars</NavLink> |
                <NavLink to="/about">About</NavLink> |
                <a href="#" onClick={(ev) => {
                    ev.preventDefault()
                    console.log('TODO: toggle cart shown')
                }}>
                    🛒 Cart
                </a>
            </nav>
            <h1>My App</h1>
            {user && <section className="user-info">
                <p>{user.fullname} <span>${user.score.toLocaleString()}</span></p>
                <button onClick={onLogout}>Logout</button>
            </section>}
            {!user && <section className="user-info">
                <LoginSignup />
            </section>}
        </header>
    )
}

