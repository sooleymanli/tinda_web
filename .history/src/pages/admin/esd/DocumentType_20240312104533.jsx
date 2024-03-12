import {  useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { GET_ALL_INCOME_DOCUMENTS } from "../.././/features/esd/income/services/api";
import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  setError,
  setIsLoading,
} from "../../features/esd/income/incomeSlice";
import { getStatusLabel, getStatusSeverity } from "../../helper/Status";
import { InputText } from "primereact/inputtext";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import styled from "styled-components";

export default function DocumentType() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useSelector((state) => state.incomeSlice);
  const [globalFilter, setGlobalFilter] = useState("");
const navigate = useNavigate()
  const fetchData = async () => {
    try {
      dispatch(setIsLoading(true));
      const res = await GET_ALL_INCOME_DOCUMENTS();
      dispatch(setData(res.data));
    } catch (error) {
      dispatch(setError(error.response));
    } finally {
      dispatch(setIsLoading(false));
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

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <div className="p-input-icon-left">
        <i className="pi pi-search"></i>
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Axtar"
        />
      </div>
      <Button
        icon="pi pi-plus-circle"
        raised
        label="Yeni sənəd əlavə et"
        severity="success"
        onClick={()=>navigate("new")}
      />
    </div>
  );

  const statusBodyTemplate = (product) => {
    return (
      <Tag
        value={getStatusLabel(product)}
        severity={getStatusSeverity(product)}
      ></Tag>
    );
  };

  return (
    <Wrapper>
    <h2>Gələnlər</h2>
      {!error && !isLoading && data ? (
        <DataTable
          globalFilter={globalFilter}
          paginator
          rows={10}
          value={data}
          selectionMode="single"
          selection={selectedProduct}
          header={header}
          onSelectionChange={(e) => setSelectedProduct(e.value)}
          dataKey="id"
          metaKeySelection={true}
          tableStyle={{ width: "calc(100vW - 370px)" }}
          emptyMessage="Sənəd tapılmadı."
        >
          <Column
            showFilterMenu
            field="docNo"
            header="Sənəd Nömrəsi"
            sortable
          ></Column>
          <Column field="docDate" header="Sənəd Tarixi" sortable></Column>
          <Column field="docTypeName" header="Sənəd Növü" sortable></Column>
          <Column field="senderName" header="Göndərən" sortable></Column>
          <Column
            sortable
            field="status"
            header="Status"
            body={statusBodyTemplate}
          ></Column>
        </DataTable>
      ) : !error && isLoading ? (
        <Loading />
      ) : (
        <Error />
      )}

      <Outlet />
      </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`