import React from 'react'
import styled from 'styled-components'

export default function ApproveModalContent() {
  return (
    <Wrapper>
<Text>Təsdiq etmək istədiyinizdən əminsinizmi?</Text>

    </Wrapper>
  )
}

const Text = styled.h4`

`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`