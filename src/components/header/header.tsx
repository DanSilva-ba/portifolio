import './header.css';
import './headerMobile.css';
import React, { useState } from "react";
import logo from "../../assets/Design_sem_nome-removebg-preview 1.png";
import menu from "../../assets/menu.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(prev => !prev);
  }

  return (
    <div className='containner__header'>
      <header id="header_component">
        <div id="box_logo">
          <img src={logo} alt="logo" id="logo" />
        </div>

        <ul className='menu_desktop'>
          <li><a href="#pj">Projetos</a></li>
          <li><a href="#container-tecnologies">Habilidades</a></li>
          <li><a href="https://www.linkedin.com/in/danilo-s-a94187242/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          <li><a href="https://github.com/DanSilva-ba" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>

        <div id="menu_mobile" onClick={()=> toggleMenu()}>
          <img src={menu} alt="menu" width="30px" height="30px" />
        </div>
      </header>

      {menuOpen && (
        <div className='menu'>
          <ul>
            <li><a href="#pj">Projetos</a></li>
            <li><a href="#container-tecnologies">Habilidades</a></li>
            <li><a href="https://www.linkedin.com/in/danilo-s-a94187242/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
            <li><a href="https://github.com/DanSilva-ba" target="_blank" rel="noopener noreferrer">Github</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
