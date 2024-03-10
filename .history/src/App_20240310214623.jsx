
import './App.css'
import Login from './features/login/components/Login'
import Main from './layout/root'
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './routers/PrivateRoute'
function App() {


  return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
          <PrivateRoute>
          
          <Main />
          
          </PrivateRoute>
          } />
        </Routes>
  )
}

export default App
