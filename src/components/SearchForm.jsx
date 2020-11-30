import React from 'react'

export default function SearchForm() {
  return (
    <>
      <form className="search-form">
        <input type="text" className="search__input" placeholder="Введите название города..."/>
        <button type="submit">Поиск</button>
      </form> 
    </>
  )
}
