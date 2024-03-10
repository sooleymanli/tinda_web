import "./App.css";
import Login from "./features/login/components/Login";
import Main from "./layout/root";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routers/PrivateRoute";
import Content from './layout/components/Content'
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        }
      >
        <Content></Content>
        <Route path="profile" element={<Profile />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  );
}

export default App;
