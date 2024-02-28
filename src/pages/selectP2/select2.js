import React from "react";
import "./select2.css";
import p1 from "./photos/p1กบ.png";
import p2 from "./photos/p2ไก่.png";
import boxTopic from "./photos/กรอบCharacter.png";
import boxSelect from "./photos/กรอบSelect.png";

function select1() {
  return (
    <div className="bg-color">
        <img src={p1} className="box" />
        <img src={p2} className="box"/>
        <img src={boxTopic} className="box"/>
        <img src={boxSelect} className="box"/> 
    </div>
  );
}

export default select1;
