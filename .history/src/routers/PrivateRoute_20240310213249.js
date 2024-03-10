import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children:any}) {

    const {isLoggedIn} = useSelector((state)=>state.login)

    return isLoggedIn ? children : <Navigate to="/" />;
}
