import { Button } from "primereact/button"
import styled from "styled-components"

export default function EditDoc() {
  return (
    <Wrapper>
          <HeaderWrapper>
            <Button
              onClick={() => navigate(-1)}
              label="Geri qayıt"
              icon="pi pi-angle-left"
              text
              style={{ width: "130px" }}
            />
          </HeaderWrapper>

    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`