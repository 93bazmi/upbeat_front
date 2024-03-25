import React from "react";
import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";
import "./firstPage.css";
import logo from "./photos/logoUPBEAT.png";
import buttonPlay from "./photos/ปุ่มplay.png";
import buttonHow from "./photos/ปุ่มHow.png";

function Firstpage() {
  return (
    <div>
      <div className="bg-image" />
      <img src={logo} className="fix" />
      <img src={buttonPlay} className="fix" />
      <img src={buttonHow} className="fix" />
      <Link to="/Character" style={{ textDecoration: 'none'}}>
      <span className="bt-play">PLAY</span>
      </Link>
      <Link to="/how" style={{ textDecoration: 'none'}}>
      <span className="bt-how">HOW TO?</span>
      </Link>
    </div>
  );
}

export default Firstpage;
