import React from 'react';
import {
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  ContactButton,
} from './styles';

function Home() {
  return (
    <>
      <HeaderContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Logo src="/logo.png" alt="CearaBytes Logo" />
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

      {/* Espaço para a header fixa */}
      <div style={{ paddingTop: '80px' }}>
        <section id="trabalho" style={{ height: '100vh', background: '#eee', padding: '40px' }}>
          <h2>Nosso Trabalho</h2>
          <p>Conteúdo da seção nosso trabalho.</p>
        </section>

        <section id="orcamentos" style={{ height: '100vh', background: '#ddd', padding: '40px' }}>
          <h2>Orçamentos</h2>
          <p>Conteúdo da seção orçamentos.</p>
        </section>

        <section id="visao" style={{ height: '100vh', background: '#ccc', padding: '40px' }}>
          <h2>Nossa Visão</h2>
          <p>Conteúdo da seção nossa visão.</p>
        </section>

        <section id="parceiros" style={{ height: '100vh', background: '#bbb', padding: '40px' }}>
          <h2>Parceiros</h2>
          <p>Conteúdo da seção parceiros.</p>
        </section>
        
      </div>
    </>
  );
}

export default Home;
