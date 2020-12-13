import {
  SET_WEATHER_DATA,
  SET_SEARCH_CITY,
  SET_LOADING,
  SET_INITIALIZING,
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
