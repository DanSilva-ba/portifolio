import "./header.css";
import React from "react";
import logo from "../../assets/Design_sem_nome-removebg-preview 1.png";

export default function Header() {
  return (
    <header id="header_component">
      <img src={logo} alt="" id="logo" />
      <ul>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Habilidades</li>
        <li><a href="https://www.linkedin.com/in/danilo-s-a94187242/">Linkedin</a></li>
        <li><a href="https://github.com/DanSilva-ba" target="blank">Github</a></li>
      </ul>
    </header>
  );
}
