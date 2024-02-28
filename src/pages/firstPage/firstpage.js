import React from "react";
import "./firstPage.css";
import logo from "./photos/logoUPBEAT.png"
import buttonPlay from "./photos/ปุ่มplay.png"
import buttonHow from "./photos/ปุ่มHow.png"



function Firstpage() {
  return(
    <div className="bg-image">
      <img src={logo} className="fix"/>
      <img src={buttonPlay} className="fix"/>
      <img src={buttonHow} className="fix"/>
    
    </div>
  );
}

export default Firstpage;
