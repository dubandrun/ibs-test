import React from "react";
import DayCard from "./DayCard";
import "./Results.css";

function Results({ currentWeather, fiveDaysWeather }) {
  const { name, weather, main } = currentWeather;
  const { description, icon } = weather[0];
  const { temp, feels_like, temp_min, temp_max } = main;
  const currentDate = new Date().toLocaleString("ru", {
    hour: "numeric",
    minute: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });
  const weatherDescription = description[0].toUpperCase() + description.substr(1)
  
  return (
    <div className="results">
      <div className="results__current">
        
        <div className="results__section-left">
          <p className="results__city">{name}</p>
          <p className="results__date">{currentDate}</p>
          <div className="results__temp-container">
            <img
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              alt="иконка погоды"
              className="results__icon"
            />
            <p className="results__temp">{Math.round(temp)}&deg;</p>
          </div>
        </div>
        <div className="results__section-right">
          <p className="results__description">{weatherDescription}</p>
          <p className="results__min-max-temp">
            {Math.round(temp_min)}&deg;/{Math.round(temp_max)}&deg;
          </p>
          <p className="results__feels-like">
            Ощущается как {Math.round(feels_like)}&deg;
          </p>
        </div>
        
      </div>

      <div className="results__five-days">
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </div>
    </div>
  );
}

export default Results;
