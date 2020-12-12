import { setLoading, setWeatherData} from '../actions/search-action'
import { getWeatherData } from '../api/api'

export const getCityWeather = (city) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const res = await getWeatherData(city)
    dispatch(setWeatherData(res))
    dispatch(setLoading(false))
  } catch(error) {
    console.log(error)
  }
}