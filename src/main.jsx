import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreContextProvider from "./Components/Store/StoreContext.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <StoreContextProvider>
        <App />
        </StoreContextProvider>
  </React.StrictMode>,
)
