import React from 'react'
import ReactDOM from 'react-dom/client'
import {Router} from './Router.jsx'
import './index.css'
import {ContextApi} from './Context/ContextApi.jsx'

import { store } from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <Provider store={store}>
        <Router />
      </Provider>
    </ContextApi>
  </React.StrictMode>
)
