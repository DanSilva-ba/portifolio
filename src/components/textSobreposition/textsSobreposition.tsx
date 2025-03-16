import "./sections.css";
import React from "react";

interface props {
  text: String;
  textSobreposition: String;
}

export default function TextSobreposition(props: props) {
  return (
    <div id="container_text">
      <div id="line-left"></div>
      <h1 id="about_text">{props.textSobreposition}</h1>
      <div id="line-rigth"></div>
    </div>
  );
}
