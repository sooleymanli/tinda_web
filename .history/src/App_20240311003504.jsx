import "./App.css";
import Login from "./features/login/components/Login";
import Main from "./layout/Main";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routers/PrivateRoute";
export default function App() {
  const isLoggedIn = useSelector((state) => state.loginSlice.isLoggedIn);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={isLoggedIn ? <LoggedInLayout /> : <Navigate to="/login" replace />} />
    </Routes>
  );
}
