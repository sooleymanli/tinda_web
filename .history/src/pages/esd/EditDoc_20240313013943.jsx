import { Button } from "primereact/button"
import { Controller } from "react-hook-form"
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


          <Controller
    name="value"
    control={control}
    rules={{ required: 'Name - Surname is required.' }}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
            <span className="p-float-label">
                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                <label htmlFor={field.name}>Name - Surname</label>
            </span>
            {getFormErrorMessage(field.name)}
        </>
    )}
/>  



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
