import React from "react";
import "./SearchForm.css";
import PropTypes from "prop-types";

const SearchForm = ({
  searchQuery,
  handleGetCurrentWeather,
  handleInputChange,
}) => (
  <form className="search-form">
    <input
      type="text"
      onChange={handleInputChange}
      value={searchQuery}
      className="search__input"
      placeholder="Введите название города..."
    />
    <button
      type="submit"
      className="search__button"
      onClick={handleGetCurrentWeather}
    >
      Поиск
    </button>
  </form>
);

SearchForm.propTypes = {
  searchQuery: PropTypes.string,
  handleGetCurrentWeather: PropTypes.func,
  handleInputChange: PropTypes.func,
};

export default SearchForm;
