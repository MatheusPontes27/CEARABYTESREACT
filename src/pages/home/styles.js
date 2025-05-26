import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between; /* espaça logo/nav e botão */
  padding: 20px 40px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
  margin-left: 20px;
`;

export const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #006eff;
  }
`;

export const ContactButton = styled.button`
  background-color: #006eff;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 10px 28px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0055cc;
  }
`;
