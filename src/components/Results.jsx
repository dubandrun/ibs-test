import React from 'react'

function Results({}) {
  return (
    <>
      <div className="search__current-weather">Текущая погода: {} </div>
      <div className="search__few-days">Погода на пять дней: {}</div>
    </>
  )
}

export default Results
