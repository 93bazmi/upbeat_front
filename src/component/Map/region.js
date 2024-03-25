import React, { useEffect, useState } from "react";
import "./region.css";

import base from "./photos/base.png";
import center from "./photos/CityCenter.png";
import crew from "./photos/CityCrew.png";

const cityCrewRow = 5;
const cityCrewCol = 4;

//การแสดงเซลล์ที่ถูกคลิก และส่วนหนึ่งที่เป็นการคำนวณค่าเงินจากการคลิกแต่ละเซลล์ด้วยฟังก์ชัน genNumber
function Grid({ matrix, W, H, onGridClick }) {
  const imgName = { base };
  const CityCenter = { center };
  const CityCrew = { crew };

  //การสร้างตาราง
  const handleClick = (rowIndex, cellIndex) => {
    if (onGridClick) {
      onGridClick(rowIndex, cellIndex);
    }
  };

  return (
    <>
      {matrix.map((row, rowIndex) => (
        <span3
          className={rowIndex % 2 === 0 ? "odd" : "even"}
          style={{ width: W - W / 3.8 }}
        >
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => {
              if (rowIndex === cityCrewRow && cellIndex === cityCrewCol) {
                return (
                  <div
                    key={cellIndex}
                    style={{
                      position: "relative",
                      height: "85px",
                      width: W,
                    }}
                  >
                    <img
                      src={base}
                      alt=""
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                      }}
                    />

                    <img
                      src={crew}
                      alt=""
                      style={{
                        position: "absolute",
                        top: 17,
                        left: 18,
                        width: "56%",
                        height: "50%",
                      }}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={cellIndex} style={{ height: "85px" }}>
                    <img
                      src={cell === "city center.png" ? center : base}
                      alt=""
                      width={W}
                      height={H}
                      onError={() => console.log("Error loading ${imageName}")}
                      style={{ flex: 1 }}
                      onClick={() => handleClick(rowIndex, cellIndex)}
                      draggable="false"
                    ></img>
                  </div>
                );
              }
            })}
          </div>
        </span3>
      ))}
    </>
  );
}

//GridContainer: เป็นคอมโพเนนต์หลักที่เรียกใช้ Grid ซึ่งเป็นตารางของรูปภาพ
//use Array2มิติ ในการสุ่ม
export default function GridContainer() {
  /* กำหนด [จำนวนแถว,แนวนอน ROW][จำนวนหลัก,แนวตั้ง COLUMN] */
  const rows = 9;
  const columns = 9;
  const H = 86;
  const W = (250 / 220) * H;

  const matrix = new Array(rows);
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(columns).fill(null);
  }

  // Define an array of image names
  const imgNames = Array.from({ length: rows * columns }, (_, i) => {
    const imgNames = (i % 17) + 1;
    return "base.png";
  });

  // Shuffle the array to get a random order
  const shuffledImageNames = shuffleArray(imgNames);

  // Set the image values using the shuffled array
  let imgIndex = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const imgName = shuffledImageNames[imgIndex];
      matrix[i][j] = imgName;
      imgIndex++;
    }
  }
  matrix[4][4] = "city center.png";

  //ฟังก์ชันสำหรับการซูม
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [containerPosition, setContainerPosition] = useState({ x: 0, y: 0 });

  const transformStyle = `scale(${zoomLevel})`;

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      if (zoomLevel < 2) {
        setZoomLevel(zoomLevel + 0.1);
      }
    } else {
      if (zoomLevel > 0.5) {
        setZoomLevel(zoomLevel - 0.1);
      }
    }
  };

  useEffect(() => {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.addEventListener("wheel", handleWheel);

    return () => {
      gridContainer.removeEventListener("wheel", handleWheel);
    };
  }, [zoomLevel]);

  //เป็นฟังก์ชันที่ใช้สร้างค่าเงินจากตำแหน่งของเซลล์ โดยใช้ผลรวมของแถวและคอลัมน์ของเซลล์นั้น ๆ มาคำนวณให้เป็นค่าเงิน
  const [money, setMoney] = useState(0);
  function calValue(row, column) {
    return (row + column + 12) * 59;
  }

  //คลิกบนเซลล์ของกริด โดยมีการแสดงข้อมูล[money]เมื่อคลิกที่เซลล์
  const [clickedCell, setClickedCell] = useState(null);
  const handleGridClick = (row, column) => {
    setClickedCell({ row, column });
    setMoney(calValue(row, column));
  };

  //ปุ่มสำหรับการควบคุมการซูมเข้าและซูมออก
  return (
    <>
      <div className="buttonszoom">
        <button onClick={() => setZoomLevel(zoomLevel + 0.1)}>Zoom In</button>
        <button onClick={() => setZoomLevel(zoomLevel - 0.1)}>Zoom Out</button>
        <button
          onClick={() => {
            setZoomLevel(1);
            setContainerPosition({ x: 0, y: 0 });
          }}
        >
          Reset
        </button>
      </div>

      <div
        style={{ overflow: "hidden" }}
        className="container4"
        draggable={true}
      >
        <div
          style={{ transform: transformStyle }}
          className="grid-container-wrapper"
        >
          <div className="grid-container">
            <Grid matrix={matrix} W={W} H={H} onGridClick={handleGridClick} />
          </div>
        </div>
      </div>

      {clickedCell && (
        <p className="text">
          R {clickedCell.row} , C {clickedCell.column}
        </p>
      )}
      <div>{clickedCell && <p className="text"> {money} </p>}</div>
    </>
  );
}

// Function to shuffle an array in place
//shuffleArray: เป็นฟังก์ชันที่ใช้สลับสมาชิกในอาร์เรย์ของภาพเพื่อสร้างลำดับสุ่มของการแสดงภาพในกริด
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
