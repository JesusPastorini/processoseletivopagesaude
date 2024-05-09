import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/common/Navbar';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne recarregamento da página

        if (!name || !email || !message) {
            setErrorMessage('Todos os campos são obrigatórios.');
            return;
        }

        try {
            await axios.post('http://localhost:3000/contact', {
                name,
                email,
                message,
            });
            setSuccessMessage('Mensagem enviada com sucesso!');
            setName('');
            setEmail('');
            setMessage('');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Erro ao enviar a mensagem. Tente novamente mais tarde.');
        }
    };

    return (
        <div>
            <Navbar />
            <h2>Contato</h2>
            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
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
                </div>
                <div>
                    <label>
                        Mensagem:
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
            <h3>Informações de Contato</h3>
            <p>Email: contato@exemplo.com</p>
            <p>Telefone: (123) 456-7890</p>
            <p>Endereço: Rua Exemplo, 123, Cidade, País</p>
        </div>
    );
};

export default Contact;
