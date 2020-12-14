import { 
  SET_WEATHER_DATA, 
  SET_LOADING, 
  SET_SEARCH_CITY, 
  SET_INITIALIZING,
  SET_FIVE_DAYS_WEATHER_DATA
} from '../constants'

const initialState = {
  currentWeather: {},
  fiveDaysWeather: {},
  isLoading: false,
  isInitialized: false,
  searchQuery: '',
}

const weather = (state = initialState, action) => {
  switch(action.type) {
    case SET_WEATHER_DATA: {
      return {
        ...state,
        currentWeather: action.payload,
      }
    }

    case SET_SEARCH_CITY: {
      return {
        ...state,
        searchQuery: action.payload
      } 
    }

    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      } 
    }

    case SET_INITIALIZING: {
      return {
        ...state,
        isInitialized: action.payload
      } 
    }

    case SET_FIVE_DAYS_WEATHER_DATA: {
      return {
        ...state,
        fiveDaysWeather: action.payload
      } 
    }

    default: return state
  }
}

export default weather