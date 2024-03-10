import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ children }) {

  const isLoggedIn = useSelector((state) => state.login); // Access login state

  return isLoggedIn ? children : <Navigate to="/" />

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
