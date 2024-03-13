import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function EditDoc() {
  const navigate = useNavigate();

  const defaultValues = {
    name: "",
    description:"",
    workflow:[]
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



<Controller
    name="city"
    control={control}
    render={({ field, fieldState }) => (
            <Dropdown
                id={field.name}
                value={field.value}
                optionLabel="name"
                placeholder="Select a City"
                options={cities}
                focusInputRef={field.ref}
                onChange={(e) => field.onChange(e.value)}
                className={classNames({ 'p-invalid': fieldState.error })}
            />
    )}
/>
{getFormErrorMessage('city')}



      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
