
import './App.css'
import Login from './features/login/components/Login'
import Main from './layout/root'
import { Routes, Route } from "react-router-dom";

function App() {


  return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
          
          <PrivateRo
          
          <Main />} />
        </Routes>
  )
}

export default App
