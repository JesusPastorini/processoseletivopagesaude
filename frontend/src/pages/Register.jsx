import React, { useState } from 'react';
import registerUser from '../services/registerUser';
import { validateRegistration } from '../components/auth/Register';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import '../components/styles/Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = async () => {
        const newErrors = validateRegistration(username, email, password);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors); // Se houver erros, defina-os no estado
            return; // Para a execução para evitar a tentativa de cadastro com dados inválidos
        }

        try {
            const user = await registerUser(username, email, password);

            // Se o cadastro for bem-sucedido, atualize o estado para indicar sucesso e limpe os campos
            setSuccessMessage(`Usuário ${user.username} cadastrado com sucesso!`);
            setErrors({});
            setUsername('');
            setEmail('');
            setPassword('');
        } catch (error) {
            setErrors({ general: error }); // Exibe a mensagem de erro recebida do serviço
        }
    };

    return (
        <div>
            <Navbar />
            <div className="register-container">
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
            </div>
            <Footer />
        </div>
    );
};

export default Register;
