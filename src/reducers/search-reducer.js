import { 
  GET_WEATHER, 
  SET_LOADING, 
  SET_CITY 
} from '../constants'

const initialState = {
  data: [],
  isLoading: false,
  city: ''
}

const seachReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_WEATHER: {
      return {
        ...state,
        data: action.payload,
        isLoading: true
      }
    }

    case SET_CITY: {
      return {
        ...state,
        city: action.payload
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

export default seachReducer