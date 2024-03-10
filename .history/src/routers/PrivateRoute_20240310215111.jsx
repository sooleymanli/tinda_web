import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ children }) {
  const {isLoggedIn} = useSelector((state) => state.loginSlice);
  const navigate = useNavigate();
  console.log(isLoggedIn)

  if (!isLoggedIn) {
    navigate('/');
    return null;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
