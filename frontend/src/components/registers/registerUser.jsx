// src/components/RegisterUser.jsx
import React, { useState } from 'react';
import { registerUser } from '../../services/register';
import { validateRegistration } from '../auth/Register';
import '../styles/Register.css';

const RegisterUser = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = async () => {
        const newErrors = validateRegistration(username, email, password);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const user = await registerUser(username, email, password);
            setSuccessMessage(`Usuário ${user.username} cadastrado com sucesso!`);
            setErrors({});
            setUsername('');
            setEmail('');
            setPassword('');
        } catch (error) {
            setErrors({ general: error });
        }
    };

    return (
        <div className="register-form">
            <h2>Registrar Usuário</h2>
            <div>
                <label>
                    Nome de Usuário:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                {errors.username && <div className="error-message">{errors.username}</div>}
            </div>
            <div>
                <label>
                    E-mail:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            <div>
                <label>
                    Senha:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {errors.password && <div className="error-message">{errors.password}</div>}
            </div>
            {errors.general && <div className="error-message">{errors.general}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
            <button onClick={handleRegister}>Registrar</button>
        </div>
    );
};

export default RegisterUser;
