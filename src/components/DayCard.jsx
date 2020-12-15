import React from "react";
import "./DayCard.css";

function DayCard({ icon, temp, date }) {
  return (
    <div className="card">
      <div className="card__date">{date}</div>
      <img
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt="иконка погоды"
        className="card__image"
      />
      <div className="card__temp">{temp}&deg;</div>
    </div>
  );
}

export default DayCard;
