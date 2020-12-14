import React from "react";
import "./DayCard.css"

function DayCard({}) {
  return (
    <div className="card">
      <div className="card__date">21 Пн</div>
      <img
        src={`http://openweathermap.org/img/wn/04d.png`}
        alt="иконка погоды"
        className="card__image"
      />
      <div className="card__temp">+20&deg;</div>
    </div>
  );
}

export default DayCard;
