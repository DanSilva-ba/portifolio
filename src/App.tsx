import "./App.css";
import React, { useState } from "react";
import seta from "./assets/seta-direita.png";
import Header from "./components/header/header";
import Presentation from "./components/presentation/presentation";
import TextSobreposition from "./components/textSobreposition/textsSobreposition";
import About from "./components/about/about";
import ProjectsComponent from "./components/projects/projects";
import Experiences from "./components/experiences/experiences";
import Skills from "./components/skills/skills";
import Mocks from "./model/mockups";
import terminal from "./assets/terminal.png";
import senaiLogo from "./assets/senailogo_nova.png"
import Services from "./components/servicesProvider/services";

function App() {
  let stacks = new Mocks();

  return (
    <div className="App">
      <Header />
      <Presentation />
      {/* <h1 id="pj">Meus projetos</h1> */}
      {/* <ProjectsComponent /> */}
      
      <Skills/>
      <ProjectsComponent/>
      <Services/>
    </div>
  );
}

export default App;
