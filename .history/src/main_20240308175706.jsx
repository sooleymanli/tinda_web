import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';



const options = { appendTo: mountHere, styleContainer: mountHere};


ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode>
    <PrimeReactProvider>

      <App />
    </PrimeReactProvider>

  </React.StrictMode>,
)
x