import {
  SET_WEATHER_DATA,
  SET_LOADING,
  SET_SEARCH_CITY,
  SET_INITIALIZING,
  SET_FIVE_DAYS_WEATHER_DATA,
  SET_ERROR,
} from "../constants";

export const setWeatherData = (data) => ({
  type: SET_WEATHER_DATA,
  payload: data,
});

export const setSearchQuery = (city) => ({
  type: SET_SEARCH_CITY,
  payload: city,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setInitializing = (loading) => ({
  type: SET_INITIALIZING,
  payload: loading,
});

export const setFiveDaysWeatherData = (fiveDaysWeatherData) => ({
  type: SET_FIVE_DAYS_WEATHER_DATA,
  payload: fiveDaysWeatherData,
});

export const setError = (result) => ({
  type: SET_ERROR,
  payload: result,
});
