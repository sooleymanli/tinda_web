import React from 'react'
import styled from 'styled-components'

export default function Sidebar() {
  return (
    <SidebarWrapper>

<PanelMenu model={items} className="w-full md:w-20rem" />


      
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  width: 300px;
  height:100%;
  background-color: red;


`