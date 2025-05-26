import React from 'react';
import {
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  ContactButton,
  Spacer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  Button3D,
  ButtonNormal,
  ProjectsContainer,
  ProjectRow,
  ProjectPanel,
} from './styles';

function Home() {
  return (
    <>
      <HeaderContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Logo src="src/IMG/ChatGPT Image 26 de mai. de 2025, 09_09_32.png" alt="CearaBytes Logo" />
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

      <Spacer /> {/* componente styled para espaçar */}

      <HeroSection>
        <HeroContent>
          <HeroTitle>Transformamos ideias em soluções digitais</HeroTitle>
          <HeroSubtitle>
            Desenvolvimento de sistemas, sites, automações e muito mais.
          </HeroSubtitle>

          <Button3D>Entre em contato</Button3D>

          <ButtonNormal>
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
          </ButtonNormal>
        </HeroContent>

        <ProjectsContainer>
          <ProjectRow direction="right">
            <ProjectPanel>
              <img src="/imagens/projeto1.jpg" alt="Projeto 1" />
            </ProjectPanel>
            <ProjectPanel>
              <img src="/imagens/projeto2.jpg" alt="Projeto 2" />
            </ProjectPanel>
          </ProjectRow>

          <ProjectRow direction="left">
            <ProjectPanel>
              <img src="/imagens/projeto3.jpg" alt="Projeto 3" />
            </ProjectPanel>
            <ProjectPanel>
              <img src="/imagens/projeto4.jpg" alt="Projeto 4" />
            </ProjectPanel>
          </ProjectRow>
        </ProjectsContainer>
      </HeroSection>
    </>
  );
}

export default Home;
