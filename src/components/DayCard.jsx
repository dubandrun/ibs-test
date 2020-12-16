import React from "react";
import "./DayCard.css";
import PropTypes from "prop-types";

const DayCard = ({ icon, temp, date }) => {
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
};

DayCard.propTypes = {
  icon: PropTypes.string,
  temp: PropTypes.number,
  date: PropTypes.string,
};

export default DayCard;
