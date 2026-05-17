import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App.jsx'
import './styles/globals.css'
import './styles/animations.css'

// Dynamically set backend base URL in production vs local development
axios.defaults.baseURL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? ''
  : (window.location.protocol === 'https:' ? '' : 'http://flowboard.centralindia.cloudapp.azure.com:5000');

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
