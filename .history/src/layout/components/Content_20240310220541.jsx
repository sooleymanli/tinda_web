import styled from 'styled-components'
import PropTypes from 'prop-types';

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

Content.propTypes = {
  children: PropTypes.node.isRequired,
};