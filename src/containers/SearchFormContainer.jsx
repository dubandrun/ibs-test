import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm'
import { setSearchQuery } from '../actions/search-action'
import { getCityWeather } from '../thunk/search-thunk'

function SearchFormContainer({
  setSearchQuery,
  searchQuery,
  coordinates,
  getCityWeather
}) {

  const handleGetCurrentWeather = (e) => {
    e.preventDefault()
    getCityWeather(searchQuery, coordinates)
  }

  const handleInputChange = (e) => (setSearchQuery(e.target.value))

  return (
    <SearchForm
      handleInputChange={handleInputChange} 
      searchQuery={searchQuery}
      handleGetCurrentWeather={handleGetCurrentWeather}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    searchQuery: state.searchQuery,
    coordinates: state.coordinates
  }
}

export default connect(mapStateToProps, {
  setSearchQuery, getCityWeather
})(SearchFormContainer)
