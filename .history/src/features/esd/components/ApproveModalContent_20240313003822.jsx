import { Button } from 'primereact/button'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setVisible } from '../../../components/modal/modalSlice'

export default function ApproveModalContent() {
    const dispatch = useDispatch()


    const closeModal = ()=>{
        dispatch(setVisible(false))

    }
  return (
    <Wrapper>
<Text>Təsdiq etmək istədiyinizdən əminsinizmi?</Text>
<Buttons>
<Button label="Bağla" severity='primary'  onClick={()=>dispatch(setVisible(false))}/>
<Button label="Bəli, təsdiqlə" severity='success' />

</Buttons>

    </Wrapper>
  )
}



const Buttons = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
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