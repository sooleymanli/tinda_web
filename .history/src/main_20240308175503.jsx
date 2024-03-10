import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "primeicons/primeicons.css";
import 'primereact/resources/themes/saga-blue/theme.css'
import "primereact/resources/primereact.min.css"
import { PrimeReactProvider } from 'primereact/api';



const options = { appendTo: mountHere, styleContainer: mountHere};


ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode>
    <PrimeReactProvider ZZ>

      <App />
    </PrimeReactProvider>

  </React.StrictMode>,
)
x