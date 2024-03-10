import styled from 'styled-components'

export default function Content({children}) {
  return (
    <ContentWrapper>{children}</ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ededede9;

`

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};