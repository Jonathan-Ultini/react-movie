import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //da togliere strict mode per duplicazione prima di development
  <StrictMode>
    <App />
  </StrictMode>,
)
