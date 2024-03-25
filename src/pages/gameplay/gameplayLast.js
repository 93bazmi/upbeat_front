import React from "react";
import "./gameplay.css";
import statusP1 from "./photos/statusP1กบ.png";
import statusP2 from "./photos/statusP2ไก่.png";
import boxPlan1 from "./photos/boxP1.png";
import boxPlan2 from "./photos/boxP2.png";
import choise1 from "./photos/choiseP1.png";
import choise2 from "./photos/choiseP2.png";
import boxT from "./photos/boxT.png";

function gameplay() {
  return (
    <div className="bg-color">
      <img src={statusP1} className="fix" />
      <img src={statusP2} className="fix" />
      <img src={boxPlan1} className="fix" />
      <img src={boxPlan2} className="fix" />
      <img src={choise1} className="fix" />
      <img src={choise2} className="fix" />
      <img src={boxT} className="fix" />
    </div>
  );
}

export default gameplay;
