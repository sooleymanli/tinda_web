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
import { GET_BY_ID_FOR_EDIT, GET_WORKERS_FOR_COMBO } from "../../features/admin/esd/documentType/services/api";

export default function EditDoc() {
    const {id} = useParams()
  const [users, setUsers] = useState([]);
  const [error,setError] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

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
      const res = await GET_WORKERS_FOR_COMBO();
      setUsers(res.data);
    } catch (error) {
      console.log(error);
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
    getValues,
    setValues,
    reset,
  } = useForm({ defaultValues });



  const fetchData = async (docId)=>{
    try {
     setIsLoading(true)
    const res = await GET_BY_ID_FOR_EDIT(docId)
    const {id,name,description,sendToLeader,sendToUpper,workFlows,viewers} = res.data

    
        setValues({"id":id,"name":name,
        "description":description,
        
        "sendToLeader":
        sendToLeader,
        "sendToUpper":
        sendToUpper,workFlows,viewers})
 
    setError(false)
    } catch (error) {
     setError(true)
     
    }finally{
     setIsLoading(false)
    }
 
 }
 

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
              <InputLabelWrapper>
                <label
                  htmlFor={field.name}
                  className={classNames({ "p-error": errors.value })}
                >
                  Sənəd tipinin adı
                </label>
                <span className="p-float-label">
                  <InputText
                    id={field.name}
                    value={field.value}
                    className={classNames({ "p-invalid": fieldState.error })}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </span>
                {getFormErrorMessage(field.name)}
              </InputLabelWrapper>
            )}
          />

          <Controller
            name="description"
            control={control}
            rules={{ required: "Məcburidir" }}
            render={({ field, fieldState }) => (
              <InputLabelWrapper>
                <label
                  htmlFor={field.name}
                  className={classNames({ "p-error": errors.value })}
                >
                  Sənəd tipinin açıqlaması
                </label>
                <span className="p-float-label">
                  <InputText
                    id={field.name}
                    value={field.value}
                    className={classNames({ "p-invalid": fieldState.error })}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </span>
                {getFormErrorMessage(field.name)}
              </InputLabelWrapper>
            )}
          />
        </InputsWrapper>

        <CheckboxWrapper>
          <div className="flex align-items-center">
            <Checkbox inputId="ingredient1" name="pizza" value="Cheese" />
            <label htmlFor="ingredient1" className="ml-2">
              Rəhbərə göndər
            </label>
          </div>

          <div className="flex align-items-center">
            <Checkbox inputId="ingredient1" name="pizza" value="Cheese" />
            <label htmlFor="ingredient1" className="ml-2">
              Bir üst rəhbərə göndər
            </label>
          </div>
        </CheckboxWrapper>

        <MainDropdownWrapper>
          <DropdownWrapper>
            <Dropdown
              value={selectedUser1}
              onChange={(e) => {
                setSelectedUser1(e.value);
                console.log(e.value);
              }}
              options={users}
              optionLabel="fullName"
              placeholder="Təsdiqləyənlər"
            />
            <Button severity="primary" label="Əlavə et" onClick={addUser1} />

            <Table>
              <DataTable
                value={userTable1}
                emptyMessage="Təsdiqləyənlər əlavə edilməyib"
                paginator
                rows={5}
              >
                <Column field="id" header="id"></Column>
                <Column field="fullName" header="Ad:"></Column>
                <Column
                  style={{ flex: "0 0 4rem" }}
                  body={(row) => (
                    <Button
                      icon="pi pi-times"
                      onClick={() => {
                        removeUser1(row.id);
                      }}
                      size="small"
                      severity="danger"
                    />
                  )}
                ></Column>
              </DataTable>
            </Table>
          </DropdownWrapper>

          <DropdownWrapper>
            <Dropdown
              value={selectedUser2}
              onChange={(e) => setSelectedUser2(e.value)}
              options={users}
              optionLabel="fullName"
              placeholder="İzləyənlər"
            />
            <Button severity="primary" label="Əlavə et" onClick={addUser2} />

            <Table>
              <DataTable
                value={userTable2}
                emptyMessage="Izləyən əlavə edilməyib"
                paginator
                rows={5}
              >
                <Column field="id" header="id"></Column>
                <Column field="fullName" header="Ad:"></Column>
                <Column
                  style={{ flex: "0 0 4rem" }}
                  body={(row) => (
                    <Button
                      icon="pi pi-times"
                      size="small"
                      severity="danger"
                      onClick={() => {
                        removeUser2(row.id);
                      }}
                    />
                  )}
                ></Column>
              </DataTable>
            </Table>
          </DropdownWrapper>
        </MainDropdownWrapper>

        <Buttons>
          <Button
            severity="success"
            label="Yadda saxla"
            type="submit"
            size="normal"
          />
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
