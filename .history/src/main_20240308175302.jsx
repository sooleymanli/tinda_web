import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "primeicons/primeicons.css";
import 'primereact/resources/themes/saga-blue/theme.css'
import "primereact/resources/primereact.min.css"
import { PrimeReactProvider } from 'primereact/api';





ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode>
    <PrimeReactProvider value={value}>

      <App />
    </PrimeReactProvider>

  </React.StrictMode>,
)
x