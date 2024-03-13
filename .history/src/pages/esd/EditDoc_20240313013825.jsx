import styled from "styled-components"

export default function EditDoc() {
  return (
    <div>
          <HeaderWrapper>
            <Button
              onClick={() => navigate(-1)}
              label="Geri qayıt"
              icon="pi pi-angle-left"
              text
              style={{ width: "130px" }}
            />
          </HeaderWrapper>

    </div>
  )
}


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`