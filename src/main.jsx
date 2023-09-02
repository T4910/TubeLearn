import React from 'react'
import ReactDOM from 'react-dom/client'
import {Router} from './Router.jsx'
import './index.css'
import {ContextApi} from './Context/ContextApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <Router />
    </ContextApi>
  </React.StrictMode>,
)
