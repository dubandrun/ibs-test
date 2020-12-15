import React from "react";
import { connect } from "react-redux";
import NotFound from "../components/Error";
import Preloader from "../components/Preloader";
import Results from "../components/Results";
import { currentDate, getFiveDaysDates } from "../utils/utils";

function ResultsContainer({
  currentWeather,
  fiveDaysWeather,
  isLoading,
  isInitialized,
  isError,
}) {
  return (
    <>
      {isError && <NotFound />}
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
}

const mapStateToProps = (state) => {
  return {
    currentWeather: state.currentWeather,
    fiveDaysWeather: state.fiveDaysWeather,
    isLoading: state.isLoading,
    isInitialized: state.isInitialized,
    isError: state.isError,
  };
};

export default connect(mapStateToProps, {})(ResultsContainer);
