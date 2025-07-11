import ParticleBackground from "../../components/ParticleBackground";
import Scroll from "../../components/ScrollNew";
import "./styles.css";
import React from "react";

function Home() {
  return (
    <>
      <ParticleBackground />

      <header className="header-container">
        <div className="header-content">
          <img
            className="logo"
            src="/ChatGPT Image 26 de mai. de 2025, 09_09_32.png"
            alt="CearaBytes Logo"
          />
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <nav className="nav">
            <a className="nav-link" href="#projetos">
              Projetos
            </a>
            <a className="nav-link" href="#planos">
              Orçamentos
            </a>
            <a className="nav-link" href="#sobrenos">
              Sobre Nós
            </a>
            <a className="nav-link" href="#contatos">
              Contatos
            </a>
          </nav>
        </div>
        <a className="contact-button" href="https://wa.me/+5583999715961">
          Entre em Contato
        </a>
      </header>

      <div className="spacer"></div>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Transformamos ideias em soluções digitais
          </h1>
          <p className="hero-subtitle">
            Desenvolvimento de sites e muito mais.
          </p>

          <a href="#contatos" className="button-3d">
            Entre em contato
          </a>

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
              style={{ marginRight: "10px" }}
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
              <img
                src="/Captura de tela 2025-05-26 140143.png"
                alt="Projeto 1"
              />
            </div>
            <div className="project-panel">
              <img
                src="/Captura de tela 2025-05-26 140210.png"
                alt="Projeto 2"
              />
            </div>
          </div>

          <div className="project-row left">
            <div className="project-panel">
              <img
                src="/Captura de tela 2025-05-26 140329.png"
                alt="Projeto 3"
              />
            </div>
            <div className="project-panel">
              <img src="/clinica 1.png" alt="Projeto 4" />
            </div>
          </div>
        </div>
      </section>
      <Scroll>
        <section id="projetos" className="projetos-section">
          <h2 className="Titulo-Projetos">Projetos</h2>
          <div className="projetos-container">
            {/* Lado esquerdo */}
            <div className="projetos-texto">
              <h2>Clínica Eminence</h2>
              <p>
                Projeto para a Clínica Odontológica Eminence, situada na cidade
                de Campina Grande - PB. Trouxe agilidade e eficiencia na
                marcação de consultas, além de captar clientes.
              </p>
              <a
                href="https://www.clinicaeminence.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="botao3d">Ver mais</button>
              </a>
            </div>

            {/* Lado direito */}
            <div className="painel3d-container">
              <img src="/clinica 1.png" alt="Projeto" className="painel3d" />
            </div>

            <div class="projeto invertido-left">
              <div class="painel3d-container-left">
                <div className="painel3d-left">
                  <img
                    src="/Captura de tela 2025-05-26 140329.png"
                    alt="Projeto"
                    className="imagem-projeto"
                  />
                </div>
              </div>
              <div class="projetos-texto-invertido">
                <h2>Portfólio DEV</h2>
                <p>
                  Projeto iniciante de portfólio, com visual simples e de fácil
                  entendimento com uso de HTML,CSS e JS puro, link de whatsapp.
                </p>
                <a
                  href="https://matheuspontes27.github.io/Portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="botao3d-left">Ver mais</button>
                </a>
              </div>
            </div>

            <div className="projetos-container">
              {/* Lado esquerdo */}
              <div className="projetos-texto">
                <h2>MB Engenharia</h2>
                <p>
                  Projeto para a MB Engenharia, sediada em Fortaleza-CE. O novo
                  site trouxe modernidade e profissionalismo à presença digital
                  da empresa, além de facilitar o contato com clientes e
                  apresentar os serviços de forma clara e objetiva.
                </p>
                <a
                  href="https://mbengenharia.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="botao3d">Ver mais</button>
                </a>
              </div>

              {/* Lado direito */}
              <div className="painel3d-container">
                <img
                  src="/Captura de tela 2025-05-26 140210.png"
                  alt="Projeto"
                  className="painel3d"
                />
              </div>
            </div>

            <div class="projeto invertido-left">
              <div class="painel3d-container-left">
                <div className="painel3d-left">
                  <img
                    src="/Captura de tela 2025-05-26 140143.png"
                    alt="Projeto"
                    className="imagem-projeto"
                  />
                </div>
              </div>
              <div class="projetos-texto-invertido">
                <h2>Casamento Aline e Matheus</h2>
                <p>
                  Site de casamento, com visual simples e de fácil entendimento,
                  com convite online, links para presentes e muito mais. Feito
                  com uso de HTML,CSS e JS puro.
                </p>
                <a
                  href="https://www.casamentoalineematheus.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="botao3d-left">Ver mais</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Scroll>
      <Scroll>
        <section className="planos">
          <h2 id="planos" className="Titulo-Projetos1">
            Nossos Planos
          </h2>

          <div className="cards-container">
            <div className="card card-bronze animate-card">
              <div className="card-front">
                <div className="card-icon" aria-hidden="true">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d2691e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3>Bronze</h3>
                <p>
                  <span>Site institucional com 1 página</span>
                  <br />
                  <span>Design simples e moderno</span>
                  <br />
                  <span>Prazo de entrega: 15 dias úteis</span>
                </p>
              </div>
              <div className="card-back">
                <p>R$ 1250,00</p>
                <button className="btn-3d">Contratar</button>
              </div>
            </div>

            <div className="card card-silver animate-card">
              <div className="card-front">
                <div className="card-icon" aria-hidden="true">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4682b4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                  </svg>
                </div>
                <h3>Silver</h3>
                <p>
                  <span>Site completo com até 5 páginas</span>
                  <br />
                  <span>Design profissional e responsivo</span>
                  <br />
                  <span>Prazo de entrega: 30 dias úteis</span>
                </p>
              </div>
              <div className="card-back">
                <p>R$ 1500,00</p>
                <button className="btn-3d">Contratar</button>
              </div>
            </div>

            <div className="card card-gold animate-card">
              <div className="card-front">
                <div className="card-icon" aria-hidden="true">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#daa520"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="12"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3>Gold</h3>
                <p>
                  <span>Site premium com blog, integração e painel</span>
                  <br />
                  <span>Design avançado e performance otimizada</span>
                  <br />
                  <span>Prazo de entrega: 45 dias úteis</span>
                </p>
              </div>
              <div className="card-back">
                <p>R$ 2000,00</p>
                <button className="btn-3d">Contratar</button>
              </div>
            </div>
          </div>
        </section>
      </Scroll>

      <Scroll>
        <section id="sobrenos" className="sobre-nos-section">
          <h2 className="Titulo-Projetos2">Sobre Nós</h2>
          <div className="sobre-nos-container">
            <div className="sobre-nos-texto">
              <p>
                A <strong>CearáBytes</strong> é uma empresa de tecnologia
                fundada em 2024 em Ipueiras/CE, especializada em soluções
                digitais inovadoras. Nosso objetivo é transformar ideias em
                realidade por meio de sistemas modernos, intuitivos e
                acessíveis.
              </p>
              <p>
                Com uma equipe apaixonada por desenvolvimento, oferecemos desde
                sites institucionais até plataformas complexas, sempre focando
                em desempenho, design e experiência do usuário.
              </p>
              <p>
                <em>
                  Conectando pessoas e negócios à tecnologia, com propósito e
                  criatividade.
                </em>
              </p>
            </div>
            <div className="sobre-nos-imagem">
              <img
                src="/eu trabalhando.png"
                alt="Equipe CearáBytes trabalhando"
              />
            </div>
          </div>
        </section>
      </Scroll>
      <Scroll>
        <section id="contatos" className="contato-section">
          <div className="contato-esquerda">
            <h1>Entre em Contato</h1>
            <form className="form-contato" action="sendmail.php" method="POST">
              <input type="text" name="nome" placeholder="Seu nome" required />
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                required
              />
              <textarea
                name="mensagem"
                placeholder="Sua mensagem"
                rows="5"
                required
              ></textarea>
              <button type="submit" className="btn-email">
                Enviar
              </button>
            </form>
          </div>

          <div className="contato-direita">
            <div className="card-contato">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/cearabytes"
                target="_blank"
                rel="noreferrer"
                className="item-contato"
              >
                <i className="fab fa-instagram"></i>
                <div>
                  <h3>@cearabytes</h3>
                  <p>
                    Nos siga no Instagram para ver nossos projetos em tempo
                    real.
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5583999715961"
                target="_blank"
                rel="noreferrer"
                className="item-contato"
              >
                <i className="fab fa-whatsapp"></i>
                <div>
                  <h3>WhatsApp</h3>
                  <p>
                    Entre em contato diretamente para dúvidas ou orçamentos.
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/cearabytes"
                target="_blank"
                rel="noreferrer"
                className="item-contato"
              >
                <i className="fab fa-linkedin"></i>
                <div>
                  <h3>LinkedIn</h3>
                  <p>Conecte-se conosco para oportunidades e parcerias.</p>
                </div>
              </a>

              {/* Localização */}
              <a
                href="https://www.google.com/maps/place/Ipueiras,+CE"
                target="_blank"
                rel="noreferrer"
                className="item-contato"
              >
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Fortaleza - CE</h3>
                  <p>Estamos localizados no interior do Ceará.</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:contato@cearabytes.com" className="item-contato">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>comercial@cearabytes.com</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </Scroll>
      <footer className="footer">
        <div className="footer-content">
          {/* Coluna 1: Sobre Nós */}
          <div className="footer-column">
            <h4>Sobre Nós</h4>
            <p>
              A CearáBytes é especializada em soluções digitais inteligentes
              para empresas modernas. Transformamos ideias em sistemas
              funcionais e visualmente impactantes.
            </p>
          </div>

          {/* Coluna 2: Redes Sociais */}
          <div className="footer-column">
            <h4>Redes Sociais</h4>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/p/Ceará-Bytes-61563199433038/?locale=pt-br"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href="https://www.instagram.com/cearabytes/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>

          {/* Coluna 3: Contato */}
          <div className="footer-column">
            <h4>Entre em Contato</h4>
            <ul>
              <li>
                <i className="fa fa-phone"></i> (83) 9 9971-5961
              </li>
              <li>
                <i className="fa fa-map-marker"></i> Rua C Parque Donatello,
                100, Bl 7 Apt 201, Messejana, Fortaleza-CE
              </li>
              <li>
                <i className="fa fa-envelope"></i> comercial@cearabytes.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Todos os direitos reservados © 2024 CearáBytes</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
