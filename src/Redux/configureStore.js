import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger/src'
import { news } from './reducers/news'

const logger = createLogger({
  diff: true,
  collapsed: true
})
export const store = createStore(
  combineReducers({news}),
  applyMiddleware(logger,thunk))