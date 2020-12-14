import {
  setLoading,
  setWeatherData,
  setInitializing,
  setSearchQuery,
  setFiveDaysWeatherData
} from "../actions/search-action";
import { getWeatherData, getFiveDaysWeatherData } from "../api/api";

export const getCityWeather = (city) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setInitializing(false));

    const weatherData = await getWeatherData(city);

    dispatch(setWeatherData(weatherData));

    const lat = weatherData.coord.lat;
    const lon = weatherData.coord.lon;
    
    const coordinates = await getFiveDaysWeatherData(lon, lat)

    dispatch(setFiveDaysWeatherData(coordinates));
    dispatch(setInitializing(true));
    dispatch(setLoading(false));
    dispatch(setSearchQuery(''));
  } catch (error) {
    console.log(error);
  }
};
