import "./App.css";
import Login from "./features/login/components/Login";
import Main from "./layout/Main";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routers/PrivateRoute";
import { Fragment, useRef } from "react";
import { Toast } from "primereact/toast";
import { ToastProvider } from "./context/ToastContext";
export default function App() {
  const toastBottomRight = useRef(null);

  return (
    <ToastProvider>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
      </Routes>
    </ToastP>
  );
}
