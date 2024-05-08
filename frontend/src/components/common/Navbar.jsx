import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-icon">
                <FontAwesomeIcon icon={faFutbol} />
            </div>
            <ul className="navbar-menu">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contato</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
