import React from 'react'
import styled from 'styled-components'

export default function ApproveModalContent() {
  return (
    <Wrapper>
<Text>Təsdiq etmək istədiyinizdən əminsinizmi?</Text>
<Buttons></Buttons>

    </Wrapper>
  )
}

const Text = styled.p`
font-size: 18px;
font-weight: 500;

`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`