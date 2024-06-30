import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'

import AppReducer from './app.reducer'
import TaskReducer from './task.reducer'
import ContactReducer from './contact.reducer'

// eslint-disable-next-line import/no-anonymous-default-export
export default (injectedReducers) =>
  combineReducers({
    app: AppReducer,
    tasks: TaskReducer,
    contact: ContactReducer,
    i18n: i18nReducer,
    ...injectedReducers,
  })
