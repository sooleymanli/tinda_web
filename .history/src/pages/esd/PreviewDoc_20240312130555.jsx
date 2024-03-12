import { useParams } from "react-router-dom";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { classNames } from "primereact/utils";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import { useEffect, useState } from "react";
import { POST_NEW_DOCUMENTS } from "../../features/esd/income/services/api";
import { useToast } from "../../context/ToastContext";
import { GET_CASH_ORDER_DOCUMENT_BY_ID } from "../../features/esd/services/api";

export default function PreviewDoc() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();
  const { id } = useParams();

  const cur = ["AZN", "USD", "EUR"];

  const defaultValues = {
    description: "",
    curr: "",
    amount: "",
    reason: "",
    docId: 0,
    docDate: "",
    docTypeId: 1,
    docNo: "0",
    id: 0,
  };
  const form = useForm({ defaultValues });
  const errors = form.formState.errors;

  const fetchData = async () => {
    try {
      const res = await GET_CASH_ORDER_DOCUMENT_BY_ID(id);
      console.log(res.data);
      const {amount,description,docDate,docNo,docTypeName,reason,showApproveButton,showCancelButton,showRejectButton} = res.data
      form.setValue({amount
      })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchData();
    }

    return () => {
      mounted = false;
    };
  }, []);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const res = await POST_NEW_DOCUMENTS(data);
      showToast("success", "Uğurlu əməliyyat!", "Sənəd yaradıldı!", 3000);

      navigate(-1);
    } catch (error) {
      console.log(error);
      showToast("error", "Xəta", error.response.data.exception[0]);
    } finally {
      setIsLoading(false);
    }
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


<Information>
<InfoGroup>
    <TitleInfo>Sənəd nömrəsi</TitleInfo>
    <Desc>DOC00000001</Desc>

</InfoGroup>


</Information>


      

    
    </Wrapper>
  );
}


const Information = styled.div`
  width: 100%;
  display: flex;
  margin-top: 32px;

`

const Desc = styled.div`
  width: 100%;
  font-size: 14px;
  color: ;

`;

const TitleInfo = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 18px;
 
`;
const Title = styled.div`
 
`;

const InfoGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

