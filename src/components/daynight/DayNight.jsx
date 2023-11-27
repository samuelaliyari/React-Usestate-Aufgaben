import { useState } from "react";
import "./DayNight.css"
const DayNight = () => {
    const [DayNight, setDayNight] = useState({
        time: "Day",
        change: "Change to Night", 
        style: "day"
    })
    const changeMode = () => {
        let day = (DayNight.time === "Day")
        if (day) {
            setDayNight({time: "Night", change: "Change to Day", style: "night"})
        } else {
            setDayNight({time: "Day", change: "Change to Night", style:"day"})
        }
    }
    return (  
        <article className={DayNight.style}>
            <h1>{DayNight.time}</h1>
            <button onClick={changeMode}>{DayNight.change}</button>
        </article>
    );
}

export default DayNight;