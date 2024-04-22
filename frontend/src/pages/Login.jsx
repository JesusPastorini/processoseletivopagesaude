import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getLogin } from '../services/loginService'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setDisabled] = useState(true);

    let navigate = useNavigate();

    const isValidEmail = (testEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validMail = emailRegex.test(testEmail);
        return validMail;
    };

    const isValidPassword = (testPassword) => {
        const min = 6;
        const validPass = testPassword.length > min;
        return validPass;
    };

    const handleClick = () => {
        localStorage.setItem('user', JSON.stringify({
            email,
        }));
        getLogin(email, password, navigate);
    };

    return (
        <main>
            <div className="container__login">
                <div className="form__login">
                    <label htmlFor="email">
                        <span>Login</span>
                        <input
                            value={email}
                            name="email"
                            type="email"
                            autoComplete="off"
                            placeholder="Insira seu email"
                            data-testid="email-input"
                            onChange={({ target }) => {
                                const { value } = target;
                                setEmail(value);
                                setDisabled(!(isValidEmail(value) && isValidPassword(password)));
                            }}
                        />
                    </label>
                    <label htmlFor="password">
                        <span>Password</span>
                        <input
                            value={password}
                            name="password"
                            type="password"
                            placeholder="Insira sua senha"
                            data-testid="password-input"
                            minLength={6}
                            onChange={({ target }) => {
                                const { value } = target;
                                setPassword(value);
                                setDisabled(!(isValidEmail(email) && isValidPassword(value)));
                            }}
                        />
                    </label>
                    <button
                        data-testid="login-submit-btn"
                        type="button"
                        onClick={handleClick}
                        disabled={isDisabled}
                    >
                        Entrar
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Login;