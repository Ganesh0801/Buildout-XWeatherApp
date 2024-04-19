import { useState } from "react";
import "./Weather.css"


const Searchbar = ({ onSearch }) => {
    const [city, setCity] = useState("");
    
    const handleSearch = () => {
      onSearch(city);
    };
    
    return (
      <div className="inpBtnParent">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="inp"
        />
        <button className="Btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    );
  };
  
  export default Searchbar;