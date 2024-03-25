import React from "react";
import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";
import "./howpage.css";
import boxSelect from "./photos/กรอบSelect.png";
import boxTopic from "./photos/กรอบHow.png";
import boxText from "./photos/กรอบText.png";
import boxBack from "./photos/back.png";
import boxNext from "./photos/next.png";
import boxHow from "./photos/How to play.png";

function howpage() {
  return (
    <div>
      <div className="bg-color" />
      <img src={boxTopic} className="box" />
      <img src={boxHow} className="box" />

      {/* Use Link component for navigation */}
      <Link to="/">
        <img src={boxBack} alt="Back" className="button-Back" />
      </Link>
      {/* Use Link component for navigation */}
      <Link to="/Character">
        <img src={boxNext} alt="Next" className="button-Next" />
      </Link>
    </div>
  );
}

export default howpage;
