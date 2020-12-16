import React from "react";
import { connect } from "react-redux";
import SearchForm from "../components/SearchForm";
import { setSearchQuery } from "../actions/search-action";
import { getCityWeather } from "../thunk/search-thunk";
import PropTypes from "prop-types";

const SearchFormContainer = ({
  setSearchQuery,
  searchQuery,
  getCityWeather,
}) => {
  const handleGetCurrentWeather = (e) => {
    e.preventDefault();
    getCityWeather(searchQuery);
  };

  const handleInputChange = (e) => setSearchQuery(e.target.value);

  return (
    <SearchForm
      handleInputChange={handleInputChange}
      searchQuery={searchQuery}
      handleGetCurrentWeather={handleGetCurrentWeather}
    />
  );
};

SearchFormContainer.propTypes = {
  setSearchQuery: PropTypes.func,
  searchQuery: PropTypes.string,
  getCityWeather: PropTypes.func,
};

const mapStateToProps = (state) => ({
  searchQuery: state.searchQuery,
});

export default connect(mapStateToProps, {
  setSearchQuery,
  getCityWeather,
})(SearchFormContainer);
