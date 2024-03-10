import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Content from './components/Content'
import styled from 'styled-components'

export default function root() {
    return (
        <Wrapper>
            <Sidebar />
            <HeaderAndContentWrapper>

            <Header />
            <Content />
            </HeaderAndContentWrapper>
           


        </Wrapper>
    )
}


const Wrapper = styled.div`
width:100%;
display: flex;
height: 100%;
`

const HeaderAndContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`