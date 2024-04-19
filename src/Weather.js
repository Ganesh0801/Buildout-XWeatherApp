import {useState } from "react";
import "./Weather.css";
import Searchbar from "./Searchbar";
import WeatherDisplay from "./WeatherDisplay";


 const Weather = ()=> {
  const [city, setCity] = useState("");
  
  const handleSearch = (search) => {
    setCity(search);
  };
  
  return (
    <div className="parent">
      <Searchbar onSearch={handleSearch} />
      <WeatherDisplay city={city} />
    </div>
  );
}

export default Weather;
