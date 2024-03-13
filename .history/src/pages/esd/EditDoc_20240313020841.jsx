import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function EditDoc() {


    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];


  const navigate = useNavigate();

  const defaultValues = {
    name: "",
    description:"",
    workflows:[]
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log(data)
    reset();
  };

  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-column gap-2"
      >
        <InputsWrapper>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Məcburidir" }}
          render={({ field, fieldState }) => (
            <>
              <label
                htmlFor={field.name}
                className={classNames({ "p-error": errors.value })}
              >Sənəd tipinin adı</label>
              <span className="p-float-label">
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </span>
              {getFormErrorMessage(field.name)}
            </>
          )}
        />


<Controller
          name="description"
          control={control}
          rules={{ required: "Məcburidir" }}
          render={({ field, fieldState }) => (
            <>
              <label
                htmlFor={field.name}
                className={classNames({ "p-error": errors.value })}
              >Sənəd tipinin açıqlaması</label>
              <span className="p-float-label">
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </span>
              {getFormErrorMessage(field.name)}
            </>
          )}
        />
        
        </InputsWrapper>
   

        <CheckboxWrapper>
        <div className="flex align-items-center">
        <Checkbox inputId="ingredient1" name="pizza" value="Cheese"  />
        <label htmlFor="ingredient1" className="ml-2">Rəhbərə göndər</label>
    </div>

    <div className="flex align-items-center">
        <Checkbox inputId="ingredient1" name="pizza" value="Cheese" />
        <label htmlFor="ingredient1" className="ml-2">Bir üst rəhbərə göndər</label>
    </div>



            
        </CheckboxWrapper>

<MainDropdownWrapper>
            <DropdownWrapper>
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Təsdiqləyənlər" />
                <Button severity="primary" label="Əlavə et"  />

<Table>


                <DataTable value={[{id:1,name:"Fuad",}]} >
                <Column field="id" header="id"></Column>
                <Column field="name" header="Ad:"></Column>
              
            </DataTable>
</Table>

                </DropdownWrapper>

                <DropdownWrapper>
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="İzləyənlər" />
                <Button severity="primary" label="Əlavə et"  />

                <Table>                <DataTable value={[{id:1,name:"Fuad",}]} >
                <Column field="id" header="id"></Column>
                <Column field="name" header="Ad:"></Column>
              
            </DataTable>
            </Table>

                </DropdownWrapper>

                </MainDropdownWrapper>


<Buttons>

                <Button severity="success" label="Yadda saxla"  type="submit"  size="normal"/>
</Buttons>
      </form>
    </Wrapper>
  );
}

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 120px;
    position: absolute;
    bottom: 36px;
    right: 36px;
`

const InputsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 24px;
`


const Table = styled.div`
    
    grid-column: 1/3;
`

const CheckboxWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 16px;
`
const MainDropdownWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 32px;
    align-items: center;
`
const DropdownWrapper = styled.div`
    display: grid;
    width: 40%;
    grid-template-columns: 4fr 1fr;
    grid-gap: 8px;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
  form{
    display: flex;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;
