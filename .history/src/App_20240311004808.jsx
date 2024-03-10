import "./App.css";
import Login from "./features/login/components/Login";
import Main from "./layout/Main";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routers/PrivateRoute";
export default function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route
        path="/dashboard/*"
        element={<PrivateRoute><Main /></PrivateRoute>}
      />
    </Routes>
  );
}
