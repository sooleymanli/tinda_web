import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.loginSlice.isLoggedIn);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/', { replace: true });
    return null;
  }

  useEffect

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
