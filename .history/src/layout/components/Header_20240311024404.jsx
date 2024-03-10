import { Avatar } from 'primereact/avatar'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export default function Header() {
  const {userData} = useSelector((state)=>state.loginSlice)
  return (
    <HeaderWrapper>
<UserName> {`${userData.name} ${userData.surname}`}</UserName>
<Avatar icon="pi pi-user" size="normal"  shape='circle' style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />


    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  border-bottom: 1px solid #ededed;
  height: 50px;
`

const UserName = styled.span`
font-size: 16px;
color: #000;
font-weight: 500;
  
`