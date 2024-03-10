
import './App.css'
import Login from './features/login/components/Login'
import Main from './layout/root'
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    // <Main />
    <Login />

    <>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    
    </>
   
  )
}

export default App
