import "./App.css";
import Login from "./features/login/components/Login";
import Main from "./layout/Main";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routers/PrivateRoute";
import Income from './pages/esd/Income'
import Send from './pages/esd/Send'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      
      
      
      
      <Main>
      <Route
        path="/dashboard/income"
        element={
          <PrivateRoute>
                <Income />         
          </PrivateRoute>
        } />

          <Route
        path="/dashboard/send"
        element={
          <PrivateRoute>
                <Send />         
          </PrivateRoute>
        } />

          </Main>
    </Routes>
  );
}

export default App;
