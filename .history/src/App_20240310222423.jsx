import "./App.css";
import Login from "./features/login/components/Login";
import Main from "./layout/Main";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routers/PrivateRoute";
import Income from './pages/esd/Income'
import Send from './pages/esd/Send'
import { useSelector } from 'react-redux';

export default function App() {
  const isLoggedIn = useSelector((state) => state.loginSlice.isLoggedIn);

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      
      
      
      
      {isLoggedIn && }
     
    </Routes>
  );
}

