import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { hideModal } from "../../../components/modal/modalSlice";
import { REJECT_DOCUMENT } from "../services/api";
import { useState } from "react";
import { useToast } from "../../../context/ToastContext";
import PropTypes from 'prop-types';
import { InputTextarea } from "primereact/inputtextarea";
import { Controller, useForm } from "react-hook-form";


RejectModalContent.propTypes = {
    docId: PropTypes.number
  };

export default function RejectModalContent({docId}) {
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(false)
  const {showToast} = useToast()


const POST_DATA = async ()=>{
    try {
        setIsLoading(true)
        const res  = await  REJECT_DOCUMENT(docId,reason)
        showToast("success","Uğurlu əməliyyat!","Sənəd imtina olundu!",3000)
        dispatch(hideModal())
        console.log(res)

    } catch (error) {
        showToast("error","Xəta",error.response.data.Exception[0])

    }finally{
        setIsLoading(false)
    }
}

const defaultValues = { rejectReason: '' };
const form = useForm({ defaultValues });
const errors = form.formState.errors;

const onSubmit = (data) => {
    data.description && show();

    form.reset();
};

const getFormErrorMessage = (name) => {
    return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
};
  return (
    <Wrapper>
      <Text>İmtina etmək istədiyinizdən əminsinizmi?</Text>
      <Controller
    name="rejectReason"
    control={form.control}
    rules={{ required: 'Description is required.' }}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name}>Description</label>
            <InputTextarea id={field.name} {...field} rows={4} cols={30} className={classNames({ 'p-invalid': fieldState.error })} />
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
<Button label="Submit" type="submit" icon="pi pi-check" />
      <Buttons>
        <Button
          label="Bağla"
          severity="primary"
          onClick={() => dispatch(hideModal())}
        />
        <Button label="Bəli, imtina et" severity="success"  loading={isLoading} onClick={POST_DATA}/>
      </Buttons>
    </Wrapper>
  );
}

const Buttons = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Text = styled.p`
  /* font-size: 18px; */
  font-weight: 500;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
