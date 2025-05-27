import ParticleBackground from '../../components/ParticleBackground';
import './styles.css';
import React from 'react';

function Home() {
  return (
    <>
      <ParticleBackground />

      <header className="header-container">
        <div className="header-content">
          <img
            className="logo"
            src="src/IMG/ChatGPT Image 26 de mai. de 2025, 09_09_32.png"
            alt="CearaBytes Logo"
          />
          <nav className="nav">
            <a className="nav-link" href="#trabalho">Projetos</a>
            <a className="nav-link" href="#orcamentos">Orçamentos</a>
            <a className="nav-link" href="#visao">Nossa Visão</a>
            <a className="nav-link" href="#parceiros">Parceiros</a>
            <a className="nav-link" href="#contatos">Contatos</a>
          </nav>
        </div>
        <a className="contact-button" href="#contatos">Entre em contato</a>
      </header>

      <div className="spacer"></div>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Transformamos ideias em soluções digitais</h1>
          <p className="hero-subtitle">Desenvolvimento de Sites e muito mais.</p>

          <a href="#contatos" className="button-3d">Entre em contato</a>

          <button className="button-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0052cc"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: '10px' }}
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="none" />
            </svg>
            Vídeo Institucional
          </button>
        </div>

        <div className="projects-container">
          <div className="project-row right">
            <div className="project-panel">
              <img src="src/IMG/Captura de tela 2025-05-26 140143.png" alt="Projeto 1" />
            </div>
            <div className="project-panel">
              <img src="src/IMG/Captura de tela 2025-05-26 140210.png" alt="Projeto 2" />
            </div>
          </div>

          <div className="project-row left">
            <div className="project-panel">
              <img src="src/IMG/Captura de tela 2025-05-26 140329.png" alt="Projeto 3" />
            </div>
            <div className="project-panel">
              <img src="src/IMG/clinica 1.png" alt="Projeto 4" />
            </div>
          </div>
        </div>
      </section>

      <section className="projetos-section" id="projetos">
        <div className='Titulo-Projetos'>
          <h1>Projetos</h1>
        </div>
        <div className="projetos-container">
          {/* Lado esquerdo */}
          <div className="projetos-texto">
            <h2>Clínica Eminence</h2>
            <p>
              Projeto para a Clínica Odontológica Eminence, situada na cidade de Campina Grande - PB. Trouxe agilidade e eficiencia na marcação de consultas, além de captar clientes.
            </p>
            <button className="botao3d">Ver mais</button>
          </div>

          {/* Lado direito */}
          <div className="painel3d-container">
            <img
              src="src/IMG/clinica 1.png"
              alt="Projeto"
              className="painel3d"
            />
          </div>

          <section class="projeto invertido-left">
            <div class="painel3d-container-left">
             <div className="painel3d-left">
              <img
               src="src/IMG/Captura de tela 2025-05-26 140329.png"
               alt="Projeto"
               className="imagem-projeto"
               />
              </div>
            </div>
            <div class="projetos-texto-invertido">
              <h2>Clínica Eminence</h2>
            <p>
              Projeto para a Clínica Odontológica Eminence, situada na cidade de Campina Grande - PB. Trouxe agilidade e eficiencia na marcação de consultas, além de captar clientes.
            </p>
            <button className="botao3d-left">Ver mais</button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Home;
