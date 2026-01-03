import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/visuals.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Ensure routing works under GitHub Pages project base */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
