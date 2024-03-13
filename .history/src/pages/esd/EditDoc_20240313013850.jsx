import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function EditDoc() {
    const navigate= useNavigate()
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

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
