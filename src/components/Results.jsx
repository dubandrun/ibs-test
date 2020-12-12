import React from "react";
import Preloader from "./Preloader";

function Results({ currentWeather, fiveDaysWeather, isLoading }) {
  const { name, weather, main, wind } = currentWeather;
  const { description, icon } = weather[0];
  const { temp, feels_like, temp_min, temp_max } = main;
  const { speed } = wind;
  return (
    <>
      {!isLoading ? (
        <div className="results">
          <div className="results__current">
            <p className="results__current-weather">{name}</p>
            <p className="results__current-weather">Текущая дата</p>
            <div className="results__temp-container">
              <img src="" alt="иконка погоды" className="results__icon" />
              <p className="results__current-weather">{Math.round(temp)}</p>
            </div>
            <p className="results__current-weather">{description}</p>
            <p className="results__current-weather">
              Ощущается как {Math.round(feels_like)}
            </p>
            <p className="results__current-weather">
              {temp_max}/{temp_min}
            </p>
            <p className="results__current-weather">
              Скорость ветра {speed} км/ч
            </p>
          </div>

          <div className="result__five-days"></div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Results;
