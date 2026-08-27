import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter allows us to have different pages like Home and Manager */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
