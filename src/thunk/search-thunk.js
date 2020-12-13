import {
  setLoading,
  setWeatherData,
  setInitializing,
  setSearchQuery,
} from "../actions/search-action";
import { getWeatherData } from "../api/api";

export const getCityWeather = (city) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setInitializing(false));
    const res = await getWeatherData(city);
    dispatch(setWeatherData(res));
    dispatch(setInitializing(true));
    dispatch(setLoading(false));
    dispatch(setSearchQuery(''));
  } catch (error) {
    console.log(error);
  }
};
