import React from 'react';
import {
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  ContactButton
} from './styles';

function Home() {
  return (
    <>
      <HeaderContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Logo src="src\IMG\ChatGPT Image 26 de mai. de 2025, 09_09_32.png" alt="CearaBytes Logo" />
          <Nav>
            <NavLink href="#trabalho">Nosso Trabalho</NavLink>
            <NavLink href="#orcamentos">Orçamentos</NavLink>
            <NavLink href="#visao">Nossa Visão</NavLink>
            <NavLink href="#parceiros">Parceiros</NavLink>
            <NavLink href="#contatos">Contatos</NavLink>
          </Nav>
        </div>
        <ContactButton>Entre em contato</ContactButton>
      </HeaderContainer>

      <div className="spacer" /> {/* para espaçar a header fixa */}

      <section id="trabalho">
        <h2>Nosso Trabalho</h2>
        <p>Conteúdo da seção nosso trabalho.</p>
      </section>

      <section id="orcamentos">
        <h2>Orçamentos</h2>
        <p>Conteúdo da seção orçamentos.</p>
      </section>

      <section id="visao">
        <h2>Nossa Visão</h2>
        <p>Conteúdo da seção nossa visão.</p>
      </section>

      <section id="parceiros">
        <h2>Parceiros</h2>
        <p>Conteúdo da seção parceiros.</p>
      </section>
    </>
  );
}

export default Home;
