import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { GET_ALL_INCOME_DOCUMENTS } from "../../features/esd/income/services/api";
import { useDispatch, useSelector } from "react-redux";
import { setData, setError } from "../../features/esd/income/incomeSlice";
import { getStatusLabel, getStatusSeverity } from "../../helper/Status";
import { InputText } from "primereact/inputtext";

export default function Income() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.incomeSlice);
  const [globalFilter, setGlobalFilter] = useState('');

  const fetchData = async () => {
    try {
      const res = await GET_ALL_INCOME_DOCUMENTS();
      dispatch(setData(res.data));
    } catch (error) {
      dispatch(setError(error.response));
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
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Axtar" />
            </div>
      <Button
        icon="pi pi-plus-circle"
        raised
        label="Yeni sənəd əlavə et"
        severity="success"
      />
            
    </div>
  );

  const statusBodyTemplate = (product) => {
    return <Tag value={getStatusLabel(product)} severity={getStatusSeverity(product)}></Tag>;
  };



  return (
    <Fragment>
      {!error && data ? (
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
          <Column filter field="docNo" header="Sənəd Nömrəsi" sortable></Column>
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
      ) : (
        <h2>Xeta var</h2>
      )}

      <Outlet />
    </Fragment>
  );
}
