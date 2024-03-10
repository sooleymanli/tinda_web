
import './App.css'
import Login from './features/login/components/Login'
import Main from './layout/root'
import { Routes, Route } from "react-router-dom";

function App() {


  return (
        <Routes>
          <Route path="/" element={<Login />} />
          <PrivateRoute>
          <Route path="/dashboard" element={<Main />} />
          </PrivateRoute>
        </Routes>
  )
}

export default App
