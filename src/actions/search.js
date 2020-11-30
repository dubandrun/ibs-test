import { GET_WEATHER, SET_CITY, SET_LOADING } from '../constants'

export const getWeather = (data) => ({
  type: GET_WEATHER,
  payload: data
})

export const setCity = (city) => ({
  type: SET_CITY,
  payload: city
})

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading
})