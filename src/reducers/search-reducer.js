import { 
  SET_WEATHER_DATA, 
  SET_LOADING, 
  SET_SEARCH_CITY 
} from '../constants'

const initialState = {
  cityWeatheData: [],
  isLoading: false,
  searchQuery: ''
}

const weather = (state = initialState, action) => {
  switch(action.type) {
    case SET_WEATHER_DATA: {
      return {
        ...state,
        cityWeatheData: action.payload,
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

    default: return state
  }
}

export default weather