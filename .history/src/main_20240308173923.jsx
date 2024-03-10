import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import "primereact/resources/themes/lara-light-cyan/theme.css";s
import { PrimeReactProvider } from 'primereact/api';


const value = {
  unstyled: false};


ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode>
    <PrimeReactProvider value={value}>

      <App />
    </PrimeReactProvider>

  </React.StrictMode>,
)
