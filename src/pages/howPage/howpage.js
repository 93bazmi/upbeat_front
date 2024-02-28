import React from "react";
import "./howpage.css";
import boxSelect from "./photos/กรอบSelect.png";
import boxTopic from "./photos/กรอบHow.png";
import boxText from "./photos/กรอบText.png";

function howpage() {
  return (
    <div className="bg-color">
      <img src={boxSelect} className="boxSe" />
      <img src={boxTopic} className="boxTopic" />
      <img src={boxText} className="boxText" />
    </div>
  );
}

export default howpage;
