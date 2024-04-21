import React from 'react';
import { Link, Router } from 'react-router-dom';
import './nav_bar.css';

function Navbar() {
    return (
            <nav className="navbar">
                <ul>
                    <li>
                    <Link to="/todos" activeClassName="active">Today</Link>
                    </li>
                    <li>
                    <Link to="/contact" activeClassName="active">Contact</Link>
                    </li>
                </ul>
            </nav>
    );
}

export default Navbar;