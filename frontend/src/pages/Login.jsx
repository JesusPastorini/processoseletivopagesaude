import React, { useState } from 'react';
import { getLogin } from '../services/loginService';
import { FontAwesomeIcon, faEnvelope, faLock } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import '../components/styles/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setDisabled] = useState(true);

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
    };

    return (
        <main className="login-container">
            <div className="login-form">
                <div className="login-icon">
                    <FontAwesomeIcon icon={faFutbol} size="2x" />
                </div>
                <h2>Login</h2>
                <div className="login-inputs">
                    <div className="input-wrapper">
                        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                        <input
                            value={email}
                            type="email"
                            placeholder="Insira seu email"
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
                            type="password"
                            placeholder="Insira sua senha"
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setDisabled(!isValidEmail(email) || !isValidPassword(e.target.value));
                            }}
                        />
                    </div>
                </div>
                <button onClick={handleClick} disabled={isDisabled}>
                    Entrar
                </button>
            </div>
        </main>
    );
}

export default Login;