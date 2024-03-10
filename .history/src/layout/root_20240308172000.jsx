import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Content from './components/Content'
import styled from 'styled-components'

export default function root() {
    return (
        <div>
            <Sidebar />
            <Header />
            <Content />


        </div>
    )
}


const Wrapper = styled.div``