
import './App.css'
import Login from './features/login/components/Login'
import Main from './layout/root'
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    // <Main />

    <>
     <Routes>
          <Route path="/" element={<Login />} />
     
        </Routes>
    
    </>
   
  )
}

export default App
