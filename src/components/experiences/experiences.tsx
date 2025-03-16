import "./experiences.css";
import React from "react";
import Enterprise from "../../entities/enterprise";
import senaiLogo from "../../assets/SENAI_logo_2024.png";
import appBomLogo from "../../assets/Grouplogo-app-bom.png";

export default function Experiences() {
  let experiences: Enterprise[] = [
    {
      name: "Senai",
      imagePath: { src: senaiLogo },
    },
    {
      name: "App Bom",
      imagePath: { src: appBomLogo },
    },
  ];

  return (
    <div className="container">
      {experiences.map((xp, index) => (
        <div key={index} id="box">
       
          <button>know-more</button>
        </div>
      ))}
    </div>
  );
}
