import "./experiences.css";
import React from "react";
import Enterprise from "../../entities/enterprise";
import senaiLogo from "../../assets/SENAI_logo_2024.png";
import appBomLogo from "../../assets/Grouplogo-app-bom.png";

export default function Experiences() {
  let experiences: Enterprise[] = [
    {
      name: "App B.O.M",
      cargo : "Desenvolvedor Full-Stack",
      imagePath: { src: senaiLogo },
      descricaoAtividades : "Atuei como desenvolvedor full-stack, em um projeto de mobilidade urbana, ultilizando como principais linguagens de programação: Kotlin, Dart e usando frameworks como: Flutter e Spring boot."
    },
    {
      name: "Senai",
      imagePath: { src: appBomLogo },
      cargo : "Estagiário tecnico em suporte T.I",
      descricaoAtividades : "Atuo no suporte técnico em uma das unidades do Senai Bahia, realizando manutenções em laboratórios de informatica, cabeamento estruturado, configurações de switches. Trouxe algumas melhorias em processos da unidade, como o desenvolvimento de um chatbot integrado ao whatsapp e o sistema de abertura de chamados da unidade."
    },
  ];

  return (
    <div className="container__experiences">
      {experiences.map((xp, index) => (
        <div key={index} id="box__experiences">
          {/* <img src={xp.imagePath.src} alt="" /> */}
          <h1 id="cargo">{xp.cargo} | {xp.name}</h1>
          <p>{xp.descricaoAtividades}</p>
        </div>
      ))}
    </div>
  );
}
