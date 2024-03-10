import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {

const 

    return isLoggedIn ? children : <Navigate to="/login" />;
}
