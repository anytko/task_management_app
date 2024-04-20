import React from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import './nav_bar.css';

function Navbar() {
    return (
        <Router>
            <nav className="navbar">
                <ul>
                    <li>
                    <NavLink exact to="/" activeClassName="active">Today</NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </Router>
    );
}

export default Navbar;