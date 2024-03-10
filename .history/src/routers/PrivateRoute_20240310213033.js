import React from 'react'

export default function PrivateRoute({children}) {
    return isLoggedIn ? children : <Navigate to="/login" />;
}
