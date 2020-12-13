import React from "react";
import { connect } from "react-redux";
import Preloader from "../components/Preloader";
import Results from "../components/Results";

function ResultsContainer({
  currentWeather,
  fiveDaysWeather,
  isLoading,
  isInitialized,
}) {
  return (
    <>
      {isLoading && <Preloader />}
      {isInitialized && <Results
        currentWeather={currentWeather}
        fiveDaysWeather={fiveDaysWeather}
      />
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentWeather: state.currentWeather,
    fiveDaysWeather: state.fiveDaysWeather,
    isLoading: state.isLoading,
    isInitialized: state.isInitialized,
  };
};

export default connect(mapStateToProps, {})(ResultsContainer);
