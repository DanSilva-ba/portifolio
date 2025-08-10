import "./skills.css";
import flutterIcon from "../../assets/icons8-vibrar-50.png";
import javaIcon from "../../assets/java_white.png";
import dart from "../../assets/Dart.png";
import javaScript from "../../assets/java-script.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import spring from "../../assets/spring.png";
import terminal from "../../assets/terminal.png";
import senaiLogo from "../../assets/senailogo_nova.png";
import appBomLogo from "../../assets/logoAppBom.png";

export default function Skills() {
  return (
    <div className="skills">
      <div className="especialidade1 especialidade">
        <div className="circle">
          <img src={terminal} alt="" width="30px" height="30px" />
        </div>
        <h1>Front end developer</h1>
        <h2>
          Gosto de programar coisas do zero e gosto de dar vida às ideias no
          navegador.
        </h2>
        <span>
          <h3>Languages:</h3>
          <p>HTML,CSS,JavaScript</p>
        </span>

        <span id="dev_tools">
          <h3>Dev tools:</h3>
          <ul>
            <li>Node Js</li>
            <li>React Js</li>
            <li>Firebase</li>
            <li>PostgreSql</li>
            <li>Metabase</li>
            <li>React JS</li>
          </ul>
        </span>
      </div>
      <div className="especialidade2 especialidade">
        <div className="circle">
          <img src={terminal} alt="" width="30px" height="30px" />
        </div>
        <h1>Back end developer</h1>
        <h2>
          Amo criar serviços e integra-los com as minha aplicações web e mobile.
        </h2>

        <span>
          <h3>Languages:</h3>
          <p>Java,Dart,Sql,python</p>
        </span>

        <span id="dev_tools">
          <h3>Dev tools:</h3>
          <ul>
            <li>Spring boot</li>
            <li>WebSocket</li>
            <li>PostgreSQL</li>
          </ul>
        </span>
      </div>
      <div className="especialidade3 especialidade">
        <div className="circle">
          <img src={terminal} alt="" width="30px" height="30px" />
        </div>
        <h1>Experiências</h1>
        <h2>Empresas que ja atuei na área de tecnologia</h2>
        <span className="list_experiences">
          <ul>
            <li>
              <img src={senaiLogo} alt="" />
            </li>
            <li>
              <img src={appBomLogo} alt="" className="logo_app_bom" />
            </li>
            <li></li>
          </ul>
        </span>
      </div>
    </div>
  );
}
