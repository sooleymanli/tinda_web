import "./App.css";
import Login from "./features/login/components/Login";
import Main from "./layout/Main";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routers/PrivateRoute";
import { Fragment } from "react";
import { Toast } from "primereact/toast";
export default function App() {
  const toastBottomRight = useRef(null);

  return (
    <Fragment>

<Toast ref={toastBottomRight} position="bottom-right" />
<Routes>
      <Route exact path="/" element={<Login />} />
      <Route
        path="/dashboard/*"
        element={<PrivateRoute><Main /></PrivateRoute>}
      />
    </Routes>

    </Fragment>
   
  );
}
