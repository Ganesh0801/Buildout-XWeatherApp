import "./Weather.css"

const WeatherCard = ({data,title}) =>{
    return(
      <div className="weather-card">
        <h2>{title}</h2>
        <p>{data}</p>
      </div>
    )
  }

  export default WeatherCard