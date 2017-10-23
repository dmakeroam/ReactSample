import { combineEpics } from 'redux-observable'
import { fetchPage } from './fetchPage'

export const rootEpic = combineEpics(
    fetchPage
)
