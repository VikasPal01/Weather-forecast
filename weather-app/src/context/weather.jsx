
import { createContext, useContext ,useState} from "react";
import { getWeatherDataForCity,getWeatherDataForLocation } from "../api";


const WeatherContext=createContext(null);
//creating hook//
export const useWeather=()=>{
    return useContext(WeatherContext);
};
export const WeatherProvider=(props)=>{
    const[data,setData]=useState(null);
    const[searchCity,setSearchCity]=useState(null);

    //creating a function which actual search city
    const fetchData= async ()=>{
        const response = await getWeatherDataForCity(searchCity);
        setData(response);

    };
    const fetchCurrentUserLocation=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            getWeatherDataForLocation(position.coords.latitude,position.coords.longitude).then((data)=>setData(data));
        });

    };

    return(
        <WeatherContext.Provider 
        value={{searchCity,data,setSearchCity,fetchData,fetchCurrentUserLocation}}>
            {props.children}
        </WeatherContext.Provider>
    )
}