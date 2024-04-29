const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validateRegistration = (username, email, password) => {
    const errors = {};

    if (!username) {
        errors.username = 'O nome de usuário é obrigatório.';
    }

    if (!isValidEmail(email)) {
        errors.email = 'O e-mail deve ser válido.';
    }

    if (password.length < 6) {
        errors.password = 'A senha deve ter pelo menos 6 caracteres.';
    }

    return errors;
};

export { validateRegistration, isValidEmail };
