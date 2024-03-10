import React from 'react'

export default function PrivateRoute({children}) {

const 

    return isLoggedIn ? children : <Navigate to="/login" />;
}
