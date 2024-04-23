import axios from 'axios';

const baseURL = 'http://localhost:3000/';
const getLogin = async (email, password, navigate) => {
    try {
        const response = await axios.post(baseURL, {
            email,
            password
        });
        navigate("/home");
    } catch (error) {
        console.error('Senha ou Email invalidos:', error);
    }
};

export { getLogin };