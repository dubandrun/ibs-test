import React from "react";
import "./SearchForm.css"

export default function SearchForm({
  searchQuery,
  handleGetCurrentWeather,
  handleInputChange,
}) {
  return (
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
}
