import styled from 'styled-components'
import PropTypes from 'prop-types';
import { useRoutes } from 'react-router-dom';

export default function Content({children}) {


  const routes = useRoutes([
    { path: "income", element: <Team /> },
    { path: "history", element: <History /> },
  ]);

  return (
    <ContentWrapper>{children}</ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ededede9;
`

Content.propTypes = {
  children: PropTypes.node.isRequired,
};