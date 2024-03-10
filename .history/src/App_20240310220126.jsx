import "./App.css";
import Login from "./features/login/components/Login";
import Main from "./layout/root";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routers/PrivateRoute";
import Content from './layout/components/Content'
import Income from './pages/esd/Income'
import Send from './pages/esd/Send'
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
        <Content>
        <Route path="profile" element={<Income />} />
        <Route path="account" element={<Send />} />
        </Content>
      </Route>
    </Routes>
  );
}

export default App;
