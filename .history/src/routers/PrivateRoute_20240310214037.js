import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ children }) {

  const isLoggedIn = useSelector((state) => state.login); 

  return isLoggedIn ? children :<Navigate to="/" replace={true} />


}
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
