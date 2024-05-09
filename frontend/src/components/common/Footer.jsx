import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Sobre Nós</h4>
                    <p>
                        Empresa dedicada a fornecer os melhores serviços para nossos clientes.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Links Úteis</h4>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">Sobre</a></li>
                        <li><a href="/contact">Contato</a></li>
                        <li><a href="/privacy-policy">Política de Privacidade</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contato</h4>
                    <p>Email: info@example.com</p>
                    <p>Telefone: (11) 1234-5678</p>
                    <p>Endereço: Rua Exemplo, 123, São Paulo, SP, Brasil</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Empresa. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
