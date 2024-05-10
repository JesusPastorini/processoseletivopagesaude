import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

function AboutPage() {
    return (
        <div>
            <Navbar />
            <h1>Sobre o Projeto Pessoal de Estudo</h1>
            <p>
                Olá! Seja bem-vindo(a) ao meu projeto pessoal de estudo. Permita-me compartilhar um pouco sobre essa jornada e o que você pode esperar deste trabalho.
            </p>
            <p>
                <strong>1. Motivação e Contexto:</strong> Este projeto nasceu da minha paixão por aprender e explorar novas tecnologias. Como um desenvolvedor, decidi mergulhar de cabeça em um projeto completo, abrangendo tanto o desenvolvimento do back-end quanto do front-end. A motivação por trás disso é simples: aprender fazendo. Acredito que a prática é a melhor maneira de consolidar conhecimentos e enfrentar desafios reais.
            </p>
            <p>
                <strong>2. Escopo e Objetivos:</strong> O escopo deste projeto abrange a criação de um aplicativo web completo, desde a configuração do servidor até a interface do usuário. Meus objetivos são aprofundar meus conhecimentos em linguagens de programação, frameworks e ferramentas, desenvolver habilidades de resolução de problemas e tomada de decisões, e criar algo funcional e útil, mesmo que seja apenas para mim.
            </p>
            <p>
                <strong>3. Tecnologias Utilizadas:</strong> No back-end, estou explorando linguagens como Python, Node.js ou Ruby, dependendo do contexto do projeto. Para o front-end, estou trabalhando com HTML, CSS e JavaScript, além de frameworks como React, Angular ou Vue.js. Também estou experimentando bancos de dados relacionais e não relacionais.
            </p>
            <p>
                <strong>4. Desafios Enfrentados:</strong> Como estou fazendo tudo sozinho, enfrento desafios diários. Desde depurar erros de sintaxe até projetar uma interface amigável, cada etapa é uma oportunidade de aprendizado. A falta de colegas de equipe significa que sou responsável por todas as decisões, o que pode ser assustador, mas também empoderador.
            </p>
            <p>
                <strong>5. Aprendizado Contínuo:</strong> Este projeto é uma jornada de aprendizado contínuo. Cada linha de código, cada bug corrigido e cada funcionalidade implementada me ensina algo novo. Estou documentando minhas descobertas e compartilhando-as com a comunidade, pois acredito que o conhecimento deve ser compartilhado.
            </p>
            <p>
                <strong>6. Conclusão:</strong> Este projeto é mais do que apenas código. É uma expressão da minha curiosidade, determinação e amor pela tecnologia. Espero que, ao longo dessa jornada, eu possa inspirar outros a também se aventurarem em seus próprios projetos pessoais de estudo.
            </p>
            <p>Obrigado por acompanhar minha jornada! 🚀</p>
            <Footer />
        </div>
    );
}

export default AboutPage;
