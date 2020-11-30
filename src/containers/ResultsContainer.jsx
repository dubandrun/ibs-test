import React from 'react'
import { connect } from 'react-redux'
import Results from '../components/Results'

function ResultsContainer({cityWeatherData}) {
  return (
    <Results cityWeatherData={cityWeatherData}/>
  )
}

const mapStateToProps = (state) => {
  return {
    cityWeatherData: state.cityWeatherData
  }
}

export default connect(mapStateToProps, {})(ResultsContainer)
