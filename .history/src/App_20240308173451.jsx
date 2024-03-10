
import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import Main from './layout/root'

function App() {

  return (
   <PrimeReactProvider>
    <Main />
   
   </PrimeReactProvider>
  )
}

export default App
