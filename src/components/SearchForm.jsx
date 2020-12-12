import React from 'react'

export default function SearchForm({
  searchQuery, 
  handleGetCurrentWeather, 
  handleInputChange
}) {
  return (
    <>
      <form className="search-form">
        <input 
          type="text"
          onChange={handleInputChange} 
          value={searchQuery}
          className="search__input" 
          placeholder="Введите название города..."/>
        <button type="submit" onClick={(e) => handleGetCurrentWeather(e, searchQuery)}>Поиск</button>
      </form> 
    </>
  )
}
