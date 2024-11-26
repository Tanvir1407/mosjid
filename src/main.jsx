import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './admin/css/style.css';
import './admin/css/satoshi.css';
import 'jsvectormap';
import 'jsvectormap/dist/jsvectormap.css';
import 'jsvectormap/dist/maps/world.js'; 
import 'flatpickr/dist/flatpickr.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
