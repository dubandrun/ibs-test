import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleWare from 'react-thunk'
import { searchReducer } from './reducers/search-reducer'

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose 

const store = createStore(searchReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)))

export default store