import React from "react";
import { connect } from "react-redux";
import Error from "../components/Error";
import Preloader from "../components/Preloader";
import Results from "../components/Results";
import { currentDate, getFiveDaysDates } from "../utils/utils";
import PropTypes from "prop-types";

const ResultsContainer = ({
  currentWeather,
  fiveDaysWeather,
  isLoading,
  isInitialized,
  isError,
}) => (
  <>
    {isError && <Error />}
    {isLoading && <Preloader />}
    {isInitialized && (
      <Results
        currentWeather={currentWeather}
        fiveDaysWeather={fiveDaysWeather}
        currentDate={currentDate}
        getFiveDaysDates={getFiveDaysDates}
      />
    )}
  </>
);

ResultsContainer.propTypes = {
  currentWeather: PropTypes.object,
  fiveDaysWeather: PropTypes.object,
  isLoading: PropTypes.bool,
  isInitialized: PropTypes.bool,
  isError: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  currentWeather: state.currentWeather,
  fiveDaysWeather: state.fiveDaysWeather,
  isLoading: state.isLoading,
  isInitialized: state.isInitialized,
  isError: state.isError,
});

export default connect(mapStateToProps, {})(ResultsContainer);
