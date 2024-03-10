import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';




ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>,
)
