
import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Main from './layout/root'

function App() {

  return (
   <PrimeReactProvider>
    <Main />
   
   </PrimeReactProvider>
  )
}

export default App
