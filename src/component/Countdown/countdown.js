import React, { useEffect, useState } from "react";
import '../Countdown/countdown.css'

function Countdown() {

  //กำหนดเวลา --> 5 นาที
  const [timeLeft, setTimeLeft] = useState({
    minutes: "05",
    seconds: "00",
  });

  //การคำนวณเวลาที่เหลืออยู่: ใช้ฟังก์ชัน getTimeRemaining เพื่อคำนวณเวลาที่เหลืออยู่จากเวลาสิ้นสุดที่กำหนดไว้
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    return {
      total: t,
      minutes: minutes,
      seconds: seconds,
    };
  }

  //อัพเดตเวลาที่เหลืออยู่: ใน useEffect, โค้ดจะทำการอัพเดตเวลาที่เหลืออยู่ทุกๆ 1 วินาที โดยลดจำนวนวินาทีลง 1 และอัพเดต state timeLeft ใหม่ หากเวลาถึง 0 วินาที โค้ดจะทำการลบ interval เพื่อหยุดการทำงาน
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds = parseInt(prev.minutes) * 60 + parseInt(prev.seconds);
        const newTotalSeconds = totalSeconds - 1;
        const newMinutes = Math.floor(newTotalSeconds / 60).toString().padStart(2, "0");
        const newSeconds = (newTotalSeconds % 60).toString().padStart(2, "0");
        if (newTotalSeconds <= 0) {
          clearInterval(intervalId);
        }
        return {
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
}, []);

//แสดงจำนวนนาทีและวินาทีที่เหลืออยู่ในรูปแบบของ minutes และ seconds ที่ได้จาก state timeLeft.
  return (
    <div className="continer centerIt">
      <div>
        <div className="counter">
          <div className="minutes">
            <div className="value">{timeLeft.minutes}</div>
          </div>
          <div className="seconds">
            <div className="value">{timeLeft.seconds}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
