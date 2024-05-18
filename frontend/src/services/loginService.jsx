import { api } from './baseURL';

const getLogin = async (email, password) => {
    try {
        const response = await api.post('/', {
            email,
            password
        });
        const token = response.data.token;
        sessionStorage.setItem('authToken', token); // Armazena no Session Storage
        window.location.reload();
    } catch (error) {
        console.error('Senha ou Email invalidos:', error);
    }
};

export { getLogin };