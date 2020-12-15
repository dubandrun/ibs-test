import {
  setLoading,
  setWeatherData,
  setInitializing,
  setSearchQuery,
  setFiveDaysWeatherData,
  setError,
} from "../actions/search-action";
import { getWeatherData, getFiveDaysWeatherData } from "../api/api";

export const getCityWeather = (city) => async (dispatch) => {
  try {
    dispatch(setError(false));
    dispatch(setLoading(true));
    dispatch(setInitializing(false));

    const weatherData = await getWeatherData(city);

    dispatch(setWeatherData(weatherData));

    const lat = weatherData.coord.lat;
    const lon = weatherData.coord.lon;
    const coordinates = await getFiveDaysWeatherData(lon, lat);

    dispatch(setFiveDaysWeatherData(coordinates));
    dispatch(setInitializing(true));
    dispatch(setLoading(false));
    dispatch(setSearchQuery(""));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(true));
    console.log(error);
  }
};
