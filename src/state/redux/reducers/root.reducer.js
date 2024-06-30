import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'

import AppReducer from './app.reducer'

// eslint-disable-next-line import/no-anonymous-default-export
export default (injectedReducers) =>
  combineReducers({
    app: AppReducer,
    i18n: i18nReducer,
    ...injectedReducers,
  })
