import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { PiSoccerBall } from "react-icons/pi";
import '../styles/Navbar.css';

function Navbar() {
    const handleLogout = () => {
        sessionStorage.removeItem('authToken');
        window.location.reload();
    };

    return (
        <nav className="navbar">
            <PiSoccerBall className="navbar-icon" />
            <ul className="navbar-menu">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/registration">Cadastro</Link>
                </li>
                <li>
                    <Link to="/contact">Contato</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <button onClick={handleLogout} className="navbar-logout-button">
                        Sair
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
