import { thunk } from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import createRootReducer from './reducers/root.reducer'

const store = createStore(
  createRootReducer(),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
