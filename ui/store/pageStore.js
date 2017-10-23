import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import {rootEpic} from '../epic/rootEpic'

const initialState = {
  pages: [],
  shouldAppearTable: false,
  message: null
}

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fullfilled':
      state = {
        pages: state.pages = action.payload,
        shouldAppearTable: state.shouldAppearTable = state.pages.length > 0,
        message: null
      }
      break
    case 'error':
      state = {
        pages: [],
        shouldAppearTable: false,
        message: 'Pages Not Found'
      }
      break
    default:
      break
  }
  return state
}

const epicMiddleware = createEpicMiddleware(rootEpic)

const createStoreWithMiddleware = compose(
    applyMiddleware(
        epicMiddleware
    )
  )(createStore)

export const rootReducer = combineReducers(
  {
    page: pageReducer
  }
  )

const store = createStoreWithMiddleware(rootReducer)

export default store
