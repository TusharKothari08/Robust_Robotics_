/**
 * Entry Point (main.jsx)
 * 
 * This is the root file of the React application. It initializes the React DOM
 * and mounts the top-level <App /> component into the 'root' element in index.html.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * Root Mounting:
 * - createRoot: Creates a React root for the container 'root'.
 * - StrictMode: A wrapper to help find common bugs in components during development.
 * - App: The main application component containing routing and global state.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
