import axios from 'axios';

// Interceptor para adicionar o token de autorização a todas as solicitações
axios.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('authToken'); // Recupera do Session Storage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Adiciona ao cabeçalho
        }
        return config;
    },
    (error) => Promise.reject(error)
);
