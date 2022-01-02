import React from "react";
import "./Weather.css";
const Weather = ({ info }) => {
  console.log(info.message);
  console.log("helo",info);

  const imglogo2 = require("./weatherimgg-removebg-preview.png");

    if(info.main===undefined && info.message!==undefined){
      console.log(info.cod);
      return(
        <div className="weather_wrapper">
        <div className="weather_info">
          <h1 className="heading">sorry , please try again...</h1>
          <h1 className="heading">"hey siri , how is the weather today in [CITY]"</h1>
        </div>
        <img className="imgg" src={imglogo2} alt="" />
      </div>
  
      )
      }
  if(info.main!==undefined ){
  return (
    <div className="weather_wrapper">
    <div className="weather_info">
      <h1 className="heading">"here is the weather report'</h1>
      <h2 className="city"> {info.name}</h2>
      <h3 className="temp"> {info.main.temp-273} °C </h3>
      <h2 className="whos"> {info.weather[0].description}</h2>
    </div>
    <img className="imgg" src={imglogo2} alt="" />
  </div>

  )
  }

  else{
    return(
      <div className="weather_wrapper">
      <div className="weather_info">
        <h1 className="heading">"hey siri , how is the weather today in [CITY]"</h1>
      </div>
      <img className="imgg" src={imglogo2} alt="" />
    </div>

    )
  }
};

export default Weather;
