import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import bootstrap from 'config/bootstrap'

import App from 'app'
import store from 'state/redux/configureStore'
import reportWebVitals from 'utils/reportWebVitals'

const { dispatch } = store

bootstrap(store)

const root = createRoot(document.getElementById('app'))

root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
)

export { dispatch }

reportWebVitals()
