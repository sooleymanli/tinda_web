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
    <TitleInfo>Sənəd nömrəsi:</TitleInfo>
    <Desc>DOC00000001</Desc>

</InfoGroup>

<InfoGroup>
    <TitleInfo>Sənəd tarixi:</TitleInfo>
    <Desc>DOC00000001</Desc>

</InfoGroup>

<InfoGroup>
    <TitleInfo>Sənəd tipi:</TitleInfo>
    <Desc>DOC00000001</Desc>
</InfoGroup>


<InfoGroup>
    <TitleInfo>Status:</TitleInfo>
    <Desc>DOC00000001</Desc>
</InfoGroup>


<InfoGroup>
    <TitleInfo>Məbləğ:</TitleInfo>
    <Desc>DOC00000001</Desc>

</InfoGroup>
<InfoGroup>
    <TitleInfo>Açıqlama:</TitleInfo>
    <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis enim atque nobis! Molestias voluptas tenetur, quam omnis recusandae ea porro, magnam nostrum repellendus aperiam nobis nemo culpa facere qui quaerat voluptates quod vero quos repudiandae aspernatur esse expedita. Rerum omnis vitae a deserunt, officia, quae aperiam harum facilis atque ut maxime reiciendis error? Expedita aliquam accusantium corporis nostrum aut? Ut est voluptate sint architecto ab vel beatae, fugit distinctio ullam officia corporis? Est provident adipisci sunt veritatis neque molestiae dolorem suscipit cum accusamus, dolore quibusdam non ipsum illum nulla unde alias placeat autem necessitatibus nobis! Eos iure eligendi itaque! Eius.</Desc>
</InfoGroup>


<InfoGroup>
    <TitleInfo>Səbəb:</TitleInfo>
    <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptate, harum aspernatur eveniet ipsa vero tenetur, perferendis deleniti tempore quod nesciunt omnis optio commodi? Quos excepturi blanditiis ut cum vitae qui necessitatibus non doloremque consectetur rem expedita natus debitis reiciendis ex voluptas possimus, inventore dolorum molestiae aliquam voluptatem nostrum perferendis culpa explicabo accusamus. At, id! Inventore voluptatum odit eaque voluptas nulla eligendi tempora quaerat nisi, iure accusamus eum vitae dolorum ducimus quibusdam est earum placeat quam nobis blanditiis necessitatibus voluptate. Eaque at omnis, hic dolorum deleniti culpa itaque ex minima impedit laborum magni consectetur mollitia aperiam autem sequi quasi. Laborum.</Desc>
</InfoGroup>








</Information>


      

    
    </Wrapper>
  );
}


const Information = styled.div`
  width: 100%;
  display: grid;
  margin-top: 32px;
  gap: 24px;
  grid-template-columns: 1fr 1fr;

`

const Desc = styled.div`
  width: 100%;
  font-size: 14px;
  color: #3b3a3a;

`;

const TitleInfo = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 18px;
 
`;


const InfoGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  &:nth-of-type(6){
    grid-column-start: 1;
    grid-column-end: 3;
  }
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

