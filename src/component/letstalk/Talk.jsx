import React from "react";
import "./Talk.css";

function Talk(props) {
  const img = require("./talk.png");

  return (
    <div className="talk_wrapper">
      <img className="imggg" src={img} alt="" />

      <div className="info">
        <h1>Getting bored.</h1>
        <h1>Come On let's Talk....</h1>
        <h2>" hey siri , Talk to me "</h2>
      </div>
    </div>
  );
}

export default Talk;
