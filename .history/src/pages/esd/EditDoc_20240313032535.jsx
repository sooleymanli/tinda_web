import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  GET_BY_ID_FOR_EDIT,
  GET_WORKERS_FOR_COMBO,
} from "../../features/admin/esd/documentType/services/api";
import Loading from "../../components/Loading";

export default function EditDoc() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorUser, setErrorUser] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  const [selectedUser1, setSelectedUser1] = useState(null);
  const [selectedUser2, setSelectedUser2] = useState(null);
  const [userTable1, setUserTable1] = useState([]);
  const [userTable2, setUserTable2] = useState([]);

  const addUser1 = () => {
    if (selectedUser1) {
      setUserTable1([...userTable1, selectedUser1]);
      setSelectedUser1(null);
    }
  };

  const addUser2 = () => {
    if (selectedUser2) {
      setUserTable2([...userTable2, selectedUser2]);
      setSelectedUser1(null);
    }
  };

  const removeUser1 = (id) => {
    setUserTable1([...userTable1.filter((e) => e.id !== id)]);
  };

  const removeUser2 = (id) => {
    setUserTable2([...userTable2.filter((e) => e.id !== id)]);
  };

  const fetUsers = async () => {
    try {
      setIsLoadingUser(true);
      const res = await GET_WORKERS_FOR_COMBO();
      setUsers(res.data);
      setErrorUser(false);
    } catch (error) {
      console.log(error);
      setErrorUser(true);
    } finally {
      setIsLoadingUser(false);
    }
  };

  const navigate = useNavigate();

  const defaultValues = {
    id: "",
    name: "",
    description: "",
    workflows: [],
    sendToLeader: false,
    sendToUpper: false,
    viewers: [],
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm({ defaultValues });

  const fetchData = async (docId) => {
    try {
      setIsLoading(true);
      const res = await GET_BY_ID_FOR_EDIT(docId);

      setValue("name", res.data.name);
      setValue("description", res.data.description);
      setValue("workflows", res.data.workflows);
      setValue("sendToLeader", res.data.sendToLeader);
      setValue("sendToUpper", res.data.sendToUpper);
      setValue("viewers", res.data.viewers);
      setValue("id", res.data.id);

      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetUsers();
      fetchData(id);
    }

    return () => {
      mounted = false;
    };
  }, []);

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

      {!isLoading && !error ? }
    
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
`;

const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 16px;
`;

const Table = styled.div`
  grid-column: 1/3;
`;

const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 36px;
`;
const MainDropdownWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  align-items: flex-start;
  height: 410px;
`;
const DropdownWrapper = styled.div`
  display: grid;
  width: 40%;
  grid-template-columns: 4fr 1fr;
  grid-gap: 8px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;
