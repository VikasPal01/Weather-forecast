import React from "react";
import { useWeather } from "../context/weather";
const Card=()=>{
    const weather=useWeather();
    return (<div className="card">
        <img src={weather?.data?.current?.condition?.icon}></img>
        <h2>{weather.data?.current?.temp_c}.C</h2>
        <h5>{weather.data?.location?.country},{weather.data?.location?.region}</h5>

    </div>
    );
};
export default Card;