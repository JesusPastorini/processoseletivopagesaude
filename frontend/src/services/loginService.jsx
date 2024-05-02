import axios from 'axios';

const baseURL = 'http://localhost:3000/';
const getLogin = async (email, password, navigate) => {
    try {
        const response = await axios.post(baseURL, {
            email,
            password
        });
        const token = response.data.token;
        sessionStorage.setItem('authToken', token); // Armazena no Session Storage
        navigate("/home");
    } catch (error) {
        console.error('Senha ou Email invalidos:', error);
    }
};

export { getLogin };