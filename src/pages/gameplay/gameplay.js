import React from "react";
import { ReactDOM } from "react-dom";
import "./gameplay.css";

import player1 from "./photos/statusP1กบ.png";
import player2 from "./photos/statusP2ไก่.png";
import coin from "./photos/coin.png";
import base from "./photos/base.png";
import boxTurn from "./photos/กรอบplay.png";
import boxTime from "./photos/boxT.png";

import Terminal from "../../component/Terminal/terminal";
import Countdown from "../../component/Countdown/countdown";
import Region from "../../component/Map/region";

function GamePlay() {
  return (
    <div>
      <div className="bg-color" />
      <img src={player1} className="p1"></img>
      <img src={player2} className="p2"></img>
      <img src={boxTime} className="turn"></img>
      {/* Render the Terminal component fixed to the bottom right corner */}
      <Terminal style={{ position: "fixed", bottom: 0, right: 0 }} />

      {/* Render the Terminal component fixed to the bottom left corner */}
      <Terminal style={{ position: "fixed", bottom: 0, left: 0 }} />
      <Region></Region>
      <Countdown></Countdown>
    </div>
  );
}

export default GamePlay;
