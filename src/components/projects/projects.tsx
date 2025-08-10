import React, { useState } from "react";
import ReactModal from "react-modal";
import logoAppBom from "../../assets/logo_appbom 1.png";
import bot from "../../assets/conversando.png";
import nearby from "../../assets/ic_nearby_launcher_round.webp";
import bannerNearBy from "../../assets/nearby.svg";
import souzacases from "../../assets/Design sem nome (1).svg";
import appbom from "../../assets/appbom.svg";

import style from "./projects.module.css";

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
      descriptionProject:
        "Find the ideal location to have a snack, the app aims to make your day-to-day easier.",
      pathImage: { src: bannerNearBy },
      comoFunciona:
        "Find the ideal location to have a snack, the app aims to make your day-to-day easier.",
      motivoParaDesenvolvimento: "Motivo para o desenvolvimento do chatbot.",
      tecnologies: "React",
    },
    {
      projectName: "Landing page - Souza cases",
      descriptionProject:
        "Find the ideal location to have a snack, the app aims to make your day-to-day easier.",
      pathImage: { src: souzacases },
      comoFunciona:
        "Find the ideal location to have a snack, the app aims to make your day-to-day easier.",
      motivoParaDesenvolvimento: "Motivo para o desenvolvimento do chatbot.",
      tecnologies: "React",
    },
    {
      projectName: "Bom mob - mobilidade urbana",
      descriptionProject:
        "Find the ideal location to have a snack, the app aims to make your day-to-day easier.",
      pathImage: { src: appbom },
      comoFunciona:
        "Find the ideal location to have a snack, the app aims to make your day-to-day easier.",
      motivoParaDesenvolvimento: "Motivo para o desenvolvimento do chatbot.",
      tecnologies: "React",
    },
  ];

  return (
    <div id={style.container_projects}>
      {projects.map((project, index) => (
        <div key={index} id={style.box}>
          <img
            src={project.pathImage.src}
            alt=""
            className={style.image_project}
          ></img>

          <div className={style.content}>
            <h1>{project.projectName}</h1>
            <p>{project.descriptionProject}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
