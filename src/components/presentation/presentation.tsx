import style from "./presentation.module.css";
import React from "react";
import foto from "../../assets/eu.jpg";
import DownloadButton from "../../services/curriculo";
import code from "../../assets/Code.png";
import seta from "../../assets/CaretDoubleDown.png";


export default function Presentation() {
  return (
    <div id={style.presentation}>
      <div className={style.info}>
        <div className={style.profile}>
          <div className={style.circle}>
            <img id={style.img_presentation} src={foto} alt="" />
          </div>
          <img src={code} alt="" className={style.terminal_img} />
        </div>
        <h1>Hello World! Meu nome é Danilo Silva e sou</h1>
        <h2>Desenvolvedor Fullstack</h2>
        <p>
          Transformo necessidades em aplicações reais, evolventes e funcionais.
          Desenvolvo sistemas através da
          <br /> minha paixão pela tecnologia, contribuindo com soluções
          inovadoras e eficazes para desafios complexos.
        </p>
        <div id={style.btn_action}>
          <div id={style.btn} onClick={DownloadButton}>
            <h1>Baixar curriculo</h1>
          </div>
        </div>

        <div>
          <img src={seta} alt="" className={style.arrow}/>
        </div>
      </div>
    </div>
  );
}
