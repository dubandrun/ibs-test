import React from 'react'
import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm'
import { setSearchQuery } from '../actions/search-action'
import { getCityWeather } from '../thunk/search-thunk'

function SearchFormContainer({
  setSearchQuery,
  searchQuery,
  getCityWeather
}) {
  const handleInputChange = (e) => (setSearchQuery(e.target.value))

  return (
    <SearchForm
      handleInputChange={handleInputChange} 
      searchQuery={searchQuery}
      getCityWeather={getCityWeather}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    searchQuery: state.searchQuery
  }
}

export default connect(mapStateToProps, {
  setSearchQuery, getCityWeather
})(SearchFormContainer)
