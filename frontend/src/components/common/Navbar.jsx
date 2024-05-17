import React from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { PiSoccerBall } from "react-icons/pi";
import '../styles/Navbar.css';

function Navbar() {
    const handleLogout = () => {
        sessionStorage.removeItem('authToken');
        window.location.reload();
    };

    const isAdmin = () => {
        const token = sessionStorage.getItem('authToken');
        if (!token) return false;

        try {
            const decodedToken = jwtDecode(token);
            return decodedToken.role === 'admin';
        } catch (error) {
            console.error('Token inválido', error);
            return false;
        }
    };

    return (
        <nav className="navbar">
            <PiSoccerBall className="navbar-icon" />
            <ul className="navbar-menu">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                {isAdmin() && (
                    <li>
                        <Link to="/registration">Cadastro</Link>
                    </li>
                )}
                <li>
                    <Link to="/contact">Contato</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <button onClick={handleLogout} className="btn btn-link">
                        Sair
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
