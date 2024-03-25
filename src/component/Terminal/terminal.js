import React, { useState } from "react";
import "../Terminal/terminal.css";

function Terminal({ style }) {
  const [command, setCommand] = useState("");
  const [path, setPath] = useState("c:\\scrivener\\bartleby\\> ");
  const [history, setHistory] = useState(["Welcome to upbeat"]);

  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [isDonePressed, setIsDonePressed] = useState(false);

  //getInput: ฟังก์ชันที่ส่งค่าของ command ที่ผู้ใช้ป้อน
  const getInput = () => {
    return command;
  };
  //attachCommand: ฟังก์ชันที่แนบคำสั่งลงในประวัติ (history)
  const attachCommand = () => {
    const newHistory = [...history];
    newHistory.push(`${path}${getInput()}`);
    setHistory(newHistory);
  };

  //returnResponse: ฟังก์ชันที่ส่งคำสั่งที่ผู้ใช้ป้อนเข้าไปในประวัติ
  const returnResponse = () => {
    const newHistory = [...history];
    newHistory.push(command);
    setHistory(newHistory);
  };

  //repeatInput: ฟังก์ชันที่ใช้เพื่อให้ผู้ใช้สามารถทำซ้ำคำสั่งก่อนหน้านี้ได้
  const repeatInput = () => {
    setCommand(history[history.length - 2]);
  };

  //scrollToBottom: ฟังก์ชันที่ใช้เพื่อเลื่อน scrollbar ไปที่ด้านล่างของประวัติ
  const scrollToBottom = () => {
    const result = document.querySelector(".result");
    result.scrollTop = result.scrollHeight;
  };

  //Event Handlers:
  //handleKeyDown: ฟังก์ชันที่ถูกเรียกเมื่อผู้ใช้กดปุ่มบนแป้นพิมพ์ โดยจะตรวจสอบว่าถ้ากด Enter จะทำการเรียก doTheThing และถ้ากดปุ่มลูกศรขึ้น จะทำการเรียก repeatInput
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      doTheThing();
      console.log("what");
    } else if (e.keyCode === 38) {
      repeatInput();
    }
  };

  const doTheThing = () => {
    const input = getInput().trim();
    if (input !== "") {
      // attachCommand();
      returnResponse();
      scrollToBottom();
    }

    setCommand("");
  };

  const handleEnableButtonClick = () => {
    // Only enable if "done" button has been pressed at least once
    if (isDonePressed) {
      setIsInputDisabled(true);
    }
  };

  const handleDoneButtonClick = () => {
    setIsInputDisabled(false);
    setIsDonePressed(true); // Set flag to indicate "done" button has been pressed
  };

  const handleRevisionButtonClick = () => {
    // Enable revision button only if "done" button has been pressed at least once
    if (isDonePressed) {
      setIsInputDisabled(false);
    }
  };

  return (
    <div className="square5" style={style}> {/* Apply the style here */}
    
      <div className="window">
      <p>Construction plan</p>
        {/* ช่องให้พิม */}
        <div className="command-area">
          <label2 htmlFor="command-input"></label2>
          <input
            type="text"
            id="command-input"
            className="command"
            placeholder="type command here…"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isInputDisabled}
          />
        </div>
      </div>

      <div className="right-button-container1">
        {/* DONE */}
        <div className="button-container1 right-button3">
          <button
            className="custom-btn4 btn-16"
            onClick={handleDoneButtonClick}
          >
            <span12>Done</span12>
          </button>
        </div>

        {/* REVISION */}
        <div className="button-container1 right-button4">
          <button
            className="custom-btn5 btn-17"
            onClick={handleRevisionButtonClick}
            disabled={!isDonePressed} // Disable if "done" button hasn't been pressed
          >
            <span12>Revision</span12>
          </button>
        </div>
      </div>
    </div>

    
  );
}

export default Terminal;
