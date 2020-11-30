import { SET_WEATHER_DATA, SET_SEARCH_CITY, SET_LOADING } from '../constants'

export const setWeatherData = (data) => ({
  type: SET_WEATHER_DATA,
  payload: data
})

export const setSearchQuery = (city) => ({
  type: SET_SEARCH_CITY,
  payload: city
})

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading
})