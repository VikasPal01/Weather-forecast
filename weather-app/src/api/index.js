const baseURL="https://api.weatherapi.com/v1/current.json?key=137e6f1b6b1d4d40b31165921240104";

export const getWeatherDataForCity=async (city)=>{
    const response=await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
};
export const getWeatherDataForLocation=async (lat,lon)=>{
    const response=await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
};