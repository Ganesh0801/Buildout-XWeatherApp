import { useState,useEffect } from "react";
import "./Weather.css";
import axios from "axios"
import WeatherCard from "./WeatherCard";

const WeatherDisplay = ({ city }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const response = async ()=>{
            if (city) {
                setLoading(true);
                 try{
                    let res = await axios.get("https://api.weatherapi.com/v1/current.json", {
                        params: {
                                  key: "a20048aec0534873ba8135258241604",
                                  q: city,
                                },
                 })
                 console.log(res.data.current)
                 setWeather(res.data.current)
                 }catch(err){
                    alert("Failed to fetch weather data");
                    console.error("error fetching data", err);
                  }
                  finally{
                    setLoading(false);
                  };
              }
        }

        response()
      
    }, [city]);
    
    return (
      <div>
        {loading && <p>Loading data...</p>}
        
        {!loading && weather && (
          <div className="weather-cards">
              <WeatherCard  
              data={`${weather.temp_c}°C`} 
              title="Temperature"/>
              
              <WeatherCard  
              data={`${weather.humidity}%`} 
              title="Humidity"/>
              
              <WeatherCard 
              data={`${weather.condition.text}`} 
              title="Condition"/>
              
              <WeatherCard 
              data={`${weather.wind_kph} kph`} 
              title="Wind Speed"/>
         
        </div>
        )}
      </div>
    );
  };

  export default WeatherDisplay;