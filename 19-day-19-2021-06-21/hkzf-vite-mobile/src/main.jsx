import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config"
import routes from './routes';
ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      {renderRoutes(routes)}
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
)
