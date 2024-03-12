import { Button } from 'primereact/button'
import React from 'react'
import styled from 'styled-components'

export default function ApproveModalContent() {
  return (
    <Wrapper>
<Text>Təsdiq etmək istədiyinizdən əminsinizmi?</Text>
<Buttons>
<Button label="Bağla" severity='secondary' />
<Button label="Bəli" severity='success' />

</Buttons>

    </Wrapper>
  )
}



const Buttons = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    margin-top: 16px;
`

const Text = styled.p`
font-size: 18px;
font-weight: 500;

`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`