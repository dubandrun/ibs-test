import React from 'react'
import './Preloader.css'

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__img"></div>
      <p className="preloader__text">Пожалуйста, подождите.</p>
    </div>
  )
}

export default Preloader
