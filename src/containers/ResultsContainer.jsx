import React from 'react'
import { connect } from 'react-redux'
import Results from '../components/Results'

function ResultsContainer({ currentWeather, fiveDaysWeather, isLoading }) {
  return (
    <Results 
      currentWeather={currentWeather}
      fiveDaysWeather={fiveDaysWeather}
      isLoading={isLoading}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    currentWeather: state.currentWeather,
    fiveDaysWeather: state.fiveDaysWeather,
    isLoading: state.isLoading,
  }
}

export default connect(mapStateToProps, {})(ResultsContainer)
