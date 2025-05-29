import React, { useState } from 'react';
import './Navbar.css'; // CSS separado (você pode usar styled-components se preferir)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">MinhaLogo</div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#planos" onClick={() => setMenuOpen(false)}>Orçamentos</a></li>
          <li><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a></li>
          <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
          <li><a href="#sobrenos" onClick={() => setMenuOpen(false)}>Sobre Nós</a></li>
        </ul>

        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={menuOpen}
          role="button"
          tabIndex={0}
          onKeyPress={e => { if (e.key === 'Enter') toggleMenu(); }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
