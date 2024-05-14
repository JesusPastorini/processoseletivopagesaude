import React, { useState } from 'react';
import { getLogin } from '../services/loginService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { GiSoccerBall } from "react-icons/gi";
import { Link } from 'react-router-dom';
import '../components/styles/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setDisabled] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);

    const isValidEmail = (testEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(testEmail);
    };

    const isValidPassword = (testPassword) => {
        const min = 6;
        const validPass = testPassword.length > min;
        return validPass;
    };

    const handleClick = async () => {
        localStorage.setItem('user', JSON.stringify({
            email,
        }));
        await getLogin(email, password);
        if (rememberMe) {
            localStorage.setItem('authToken', sessionStorage.getItem('authToken'));
        }
    };

    return (
        <div className="login-background">
            <main className="login-container">
                <div className="login-form">
                    <GiSoccerBall className="login-icon" />
                    <div className="login-inputs">
                        <div className="input-wrapper">
                            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                            <input
                                value={email}
                                name="email"
                                type="email"
                                autoComplete="off"
                                placeholder="E-mail"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setDisabled(!isValidEmail(e.target.value) || !isValidPassword(password));
                                }}
                            />
                        </div>
                        <div className="input-wrapper">
                            <FontAwesomeIcon icon={faLock} className="input-icon" />
                            <input
                                value={password}
                                name="password"
                                type="password"
                                placeholder="*********"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setDisabled(!isValidEmail(email) || !isValidPassword(e.target.value));
                                }}
                            />
                        </div>
                    </div>
                    <div className="container-checkbox">
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="rememberMe">Lembrar-me</label>
                        </div>
                        <div className="forgot-password">
                            <Link to="/forgot-password">Esqueceu sua senha?</Link>
                        </div>
                    </div>
                    <button className="btn-login" onClick={handleClick} disabled={isDisabled}>
                        Entrar
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Login;