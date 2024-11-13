import React from "react";

function Header() {
  return (
    <header>
      <h1>Meu Portfólio</h1>
      <nav>
        <button
          className="nav-button"
          onClick={() => (window.location.hash = "#about")}
        >
          Sobre
        </button>
        <button
          className="nav-button"
          onClick={() => (window.location.hash = "#projects")}
        >
          Projetos
        </button>
        <button
          className="nav-button"
          onClick={() => (window.location.hash = "#contact")}
        >
          Contacto
        </button>
      </nav>
    </header>
  );
}

export default Header;
