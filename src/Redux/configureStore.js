import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { addNews, login, news } from './reducers'
import { createLogger } from 'redux-logger/src'

const logger = createLogger({
  diff: true,
  collapsed: true
})

export const store = createStore(
  combineReducers({ news, login, addNews }),
  applyMiddleware(logger,thunk)
);