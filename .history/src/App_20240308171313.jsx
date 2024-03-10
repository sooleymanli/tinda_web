
import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {

  return (
   <PrimeReactProvider>
   <Button >Button</Button>
   </PrimeReactProvider>
  )
}

export default App
