import styled, { keyframes } from 'styled-components';

// Header fixo no topo
export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  z-index: 1000;
  font-family: 'Cyne', sans-serif;
`;

// Logo do lado esquerdo
export const Logo = styled.img`
  height: 100px;
`;

// Container dos links de navegação
export const Nav = styled.nav`
  display: flex;
  gap: 60px;
  margin-left: 180px;
`;

// Links de navegação
export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #0077cc;
  }
`;

// Botão "Entre em contato"
export const ContactButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 16px 32px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 4px 0 #0056b3;
  position: relative;
  top: 0;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    top: 4px;
    box-shadow: 0 0px 0 #0056b3;
  }
`;

// Espaço para compensar o header fixo
export const Spacer = styled.div`
  height: 80px;
`;

// Estilização genérica das seções
export const Section = styled.section`
  min-height: 100vh;
  padding: 60px 40px;
  background-color: ${({ bg }) => bg || '#f9f9f9'};

  h2 {
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding: 0 80px;
  background: #fff;
`;

export const HeroContent = styled.div`
  max-width: 600px;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-family: 'Cyne Semi Bold', sans-serif;
  margin-bottom: 20px;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 40px;
  line-height: 1.6;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ButtonNormal = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  padding: 10px 30px;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  color: #0052cc;
  margin-left: auto;
  top: -50px;
  left: 50px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  gap: 8px;
`;

export const Button3D = styled.button`
  background-color: #007bff;
  color: white;
  padding: 16px 32px;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 4px 0 #0056b3;
  position: relative;
  top: 0;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    top: 4px;
    box-shadow: 0 0 0 #0056b3;
  }
`;

// Animações para os painéis dos projetos
const slideRight = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(20px); }
`;

const slideLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-20px); }
`;

// Container para as linhas dos projetos
export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
`;

// Linha com 2 painéis animados para a direita ou esquerda
export const ProjectRow = styled.div`
  display: flex;
  gap:0px;
  width: 100%;
  justify-content: ${({ direction }) =>
    direction === 'right' ? 'flex-end' : 'flex-start'};
  padding: 0px 100px 70px; /* padding lateral para afastar só um pouco da borda */
  animation: ${({ direction }) =>
    direction === 'right' ? slideRight : slideLeft} 3s ease-in-out infinite alternate;
`;

// Cada painel do projeto (com imagem)
export const ProjectPanel = styled.div`
  width: 360px;
  height: 202px; // 360 / 16 * 9 = 202.5 (mantendo a proporção 16:9)
  overflow: hidden;
  border-radius: 12px;
  margin: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;     // preenche sem distorcer
    object-position: center;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
  }
`;


