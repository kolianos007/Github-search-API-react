import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-danger navbar-expand-lg justify-content-between">
            <div className="navbar-brand">
                Github-поиск
            </div>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar