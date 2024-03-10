import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderWrapper>

<Avatar image="/images/avatar/amyelsner.png" size="xlarge" shape="circle" />


    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;
`