import axios from 'axios';

const handleClick = async () => {
    try {
        const response = await axios.post('URL_DA_SUA_API/login', {
            email,
            password
        });
        // Se a solicitação for bem-sucedida, redirecione o usuário ou faça qualquer outra ação necessária
        console.log('gogogogogogog')
        navigate("/");
    } catch (error) {
        // Se ocorrer um erro, você pode exibir uma mensagem de erro para o usuário
        console.error('Erro ao fazer login:', error);
    }
};
