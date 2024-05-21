import axios from 'axios';

const api = axios.create({
    baseURL: 'https://processoseletivopagesaude-production.up.railway.app',
});

api.interceptors.request.use(config => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export { api };