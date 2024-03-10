import "./App.css";
import Login from "./features/login/components/Login";
import Main from "./layout/Main";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routers/PrivateRoute";
import Income from "./pages/esd/Income";
import Send from "./pages/esd/Send";
import { useSelector } from "react-redux";
import React from 'react'
export default function App() {
  const isLoggedIn = useSelector((state) => state.loginSlice.isLoggedIn);

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={<PrivateRoute><Main /></PrivateRoute>}
      />
    </Routes>
  );
}
