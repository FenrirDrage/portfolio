import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Meu Portfólio</h1>
        <button className="burger-btn" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
          <button className="ios-button">Início</button>
          <button className="ios-button">Sobre</button>
          <button className="ios-button">Projetos</button>
          <button className="ios-button">Contacto</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
