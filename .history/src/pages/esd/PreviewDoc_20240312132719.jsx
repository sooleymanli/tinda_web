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
import { Fragment, useEffect, useState } from "react";
import { POST_NEW_DOCUMENTS } from "../../features/esd/income/services/api";
import { useToast } from "../../context/ToastContext";
import { GET_CASH_ORDER_DOCUMENT_BY_ID } from "../../features/esd/services/api";
import { getStatusLabel, getStatusSeverity } from "../../helper/Status";
import { Tag } from "primereact/tag";
import Loading from "../../components/Loading";

export default function PreviewDoc() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error,setError] = useState(false)

  const { id } = useParams();

  const [data, setData] = useState(false);

 

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const res = await GET_CASH_ORDER_DOCUMENT_BY_ID(id);
      setData(res.data);
      setError(false)

    } catch (error) {
      console.log(error);
      setError(true)
    }
    finally{
      setIsLoading(false)
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


  const statusBodyTemplate = (status) => {
    return (
      <Tag
        value={getStatusLabel(status)}
        severity={getStatusSeverity(status)}
      ></Tag>
    );
  };

  return (
    <Wrapper>
 

 {data && !error && !isLoading ?
  <Fragment>
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
          <Desc>{data.docNo}</Desc>
        </InfoGroup>

        <InfoGroup>
          <TitleInfo>Sənəd tarixi:</TitleInfo>
          <Desc>{new Date(data.docDate).toLocaleDateString()}</Desc>
        </InfoGroup>

        <InfoGroup>
          <TitleInfo>Sənəd tipi:</TitleInfo>
          <Desc>{data.docTypeName}</Desc>
        </InfoGroup>

        <InfoGroup>
          <TitleInfo>Status:</TitleInfo>
          <Desc>{statusBodyTemplate(data.status)}</Desc>
        </InfoGroup>

        <InfoGroup>
          <TitleInfo>Məbləğ:</TitleInfo>
          <Desc>{data.amount}</Desc>
        </InfoGroup>
        <InfoGroup>
          <TitleInfo>Açıqlama:</TitleInfo>
          <Desc>{data.description}</Desc>
        </InfoGroup>

        <InfoGroup>
          <TitleInfo>Səbəb:</TitleInfo>
          <Desc>{data.reason}</Desc>
        </InfoGroup>
      </Information>

      <Buttons>
        {data.showApproveButton && (
          <Button label="Təsdiq et" severity="success" />
        )}
        {data.showCancelButton && <Button label="Ləğv et" severity="danger" />}
        {data.showApproveButton && (
          <Button label="İmtina et" severity="danger" />
        )}
      </Buttons>


 </Fragment> : !data && !error 
 
 
 
 <Loading /> }


   
    </Wrapper>
  );
}

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 32px;
`;
const Information = styled.div`
  width: 100%;
  display: grid;
  margin-top: 32px;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
`;

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

  &:nth-of-type(6) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  &:nth-of-type(7) {
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
