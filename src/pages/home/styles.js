import styled from 'styled-components';


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
  gap: 30px;
  margin-left: 150px;
`;

// Links de navegação
export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 16px;
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
