import "./projects.css";
import React, { useState } from "react";
import ReactModal from "react-modal";
import logoAppBom from "../../assets/logo_appbom 1.png";
import bot from "../../assets/conversando.png";
import nearby from "../../assets/ic_nearby_launcher_round.webp";
import bannerNearBy from "../../assets/banner_near_by.png";

ReactModal.setAppElement("#root");

export default function ProjectsComponent() {
  type Project = {
    projectName: string;
    descriptionProject: string;
    pathImage: { src: string };
    comoFunciona: string;
    motivoParaDesenvolvimento: string;
    tecnologies: String;
  };

  const projects: Project[] = [
    {
      projectName: "Nearby App - Find locations food",
      descriptionProject: "Find the ideal location to have a snack, the app aims to make your day-to-day easier.",
      pathImage: { src: bannerNearBy },
      comoFunciona: "Find the ideal location to have a snack, the app aims to make your day-to-day easier.",
      motivoParaDesenvolvimento: "Motivo para o desenvolvimento do chatbot.",
      tecnologies: "React",
    },
    {
      projectName: "APP B.O.M",
      descriptionProject: "Aplicativo de mobilidade urbana.",
      pathImage: { src: "" },
      comoFunciona: "Descrição do funcionamento do APP B.O.M",
      motivoParaDesenvolvimento: "Motivo para o desenvolvimento do APP B.O.M.",
      tecnologies: "React",
    },
    {
      projectName: "Nearby App - Find locations food",
      descriptionProject: "Find the ideal location to have a snack, the app aims to make your day-to-day easier.",
      pathImage: { src: bannerNearBy },
      comoFunciona: "Find the ideal location to have a snack, the app aims to make your day-to-day easier.",
      motivoParaDesenvolvimento: "Motivo para o desenvolvimento do chatbot.",
      tecnologies: "React",
    },
    {
      projectName: "Nearby App - Find locations food",
      descriptionProject: "Find the ideal location to have a snack, the app aims to make your day-to-day easier.",
      pathImage: { src: bannerNearBy },
      comoFunciona: "Find the ideal location to have a snack, the app aims to make your day-to-day easier.",
      motivoParaDesenvolvimento: "Motivo para o desenvolvimento do chatbot.",
      tecnologies: "React",
    },
    
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  function openModal(project: Project) {
    setSelectedProject(project);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setSelectedProject(null);
  }

  return (
    <div className="container">
      {projects.map((project, index) => (
        <div key={index} id="box">
          <img src={project.pathImage.src} alt="" />
          <h1>{project.projectName}</h1>
          <h2>{project.descriptionProject}</h2>
          <div id="container-interactions">
            <button id="know-more">know-more</button>
            <button id="repository">Repository</button>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* <div id="container_projects">
      {projects.map((project, index) => (
        <div key={index} id="list_projects">
          <h1>{project.projectName}</h1>
          <div id="banner_projects" onClick={() => openModal(project)}>
            <img src={project.pathImage.src} alt={project.projectName} />
          </div>
          <h2>{project.descriptionProject}</h2>
        </div>
      ))}

      {selectedProject && (
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div id="appbar_modal">
            <button onClick={closeModal}>Fechar</button>
          </div>

          <h1 id="name_project">{selectedProject.projectName}</h1>
          <h3 id="about_project">Como este projeto funciona?</h3>
          <h4 id="description_about_project">{selectedProject.comoFunciona}</h4>

          <h3 id="motivo">Motivo para desenvolvimento:</h3>
          <h4 id="desc_motivo">{selectedProject.motivoParaDesenvolvimento}</h4>
        </ReactModal>
      )}
    </div> */
}
