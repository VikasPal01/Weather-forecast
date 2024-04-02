import { useEffect } from 'react';
import Card from './component/Card';
import Button from './component/button';
import Input from './component/input';
import { useWeather } from './context/weather';
import './App.css';

function App() {
  const weather=useWeather();
  console.log(weather);
  useEffect(()=>{
    //get current location
    weather.fetchCurrentUserLocation();
  })
  return (
    <div className="App">
     <h1>Weather Forecast</h1>
     <Input/>
     <Button  onClick={weather.fetchData} value = "Search"/>
     <Card/>
     <Button value="Refresh"/>
     
    </div>
  );
}

export default App;
