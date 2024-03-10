import { Avatar } from 'primereact/avatar'
import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderWrapper>

<Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" size="norlargemal" shape="circle" />


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