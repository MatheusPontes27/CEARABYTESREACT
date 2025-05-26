import React from 'react';
import { HeaderContainer, Logo, Nav, NavLink, ContactButton } from './styles';
import { HeroSection, HeroContent, HeroTitle, HeroSubtitle, Button3D, ButtonNormal } from './styles';

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

      <HeroSection>
        <HeroContent>
         <HeroTitle>
          Transformamos ideias em soluções digitais
         </HeroTitle>
        <HeroSubtitle>
         Desenvolvimento de sistemas, sites, automações e muito mais. 
        </HeroSubtitle>
    
        <Button3D>Entre em contato</Button3D>
        <ButtonNormal>Veja nosso vídeo institucional</ButtonNormal>
       </HeroContent>
      </HeroSection>
    </>
  );
}

export default Home;
