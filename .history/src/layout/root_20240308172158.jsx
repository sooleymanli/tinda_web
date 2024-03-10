import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Content from './components/Content'
import styled from 'styled-components'

export default function root() {
    return (
        <Wrapper>
            <Sidebar />
            <Header />
            <Content />


        </Wrapper>
    )
}


const Wrapper = styled.div`
width:100%;



`