import React, {useState } from "react";





function Time() {
    const [clock,setTimeClock] = useState("00:00:00")

    const currentTimer = () => {
      const date = new Date()
      const hours =String(date.getHours())
      const minutes = String(date.getMinutes())
      const seconds = String(date.getSeconds())
      //setTimeClock를 통한 초기값 변경 
      setTimeClock (`${hours < 10 ? `0${hours}`:hours} 
    : ${minutes < 10 ? `0${minutes}`:minutes} 
    : ${seconds < 10 ? `0${seconds}`:seconds}`)
    }

    const startTimer = () => {
      setInterval(currentTimer,1000)
    }

    startTimer()
    return(
    <div className="Time">
        <div className="main_clock">
          {clock}
        </div>
    </div>)
}
export default Time






// import moment from 'moment';
// import 'moment/locale/ko';}
