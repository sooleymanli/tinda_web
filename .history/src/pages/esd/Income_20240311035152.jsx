import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { GET_ALL_INCOME_DOCUMENTS } from "../../features/esd/income/services/api";
import { useDispatch, useSelector } from "react-redux";
import { setData, setError } from "../../features/esd/income/incomeSlice";

export default function Income() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch()
const {data,error} = useSelector((state)=>state.incomeSlice)
  const fetchData = async ()=>{

try {
  const res  = await GET_ALL_INCOME_DOCUMENTS()
  dispatch(setData(res.data))

  
} catch (error) {
  dispatch(setError(error.response))
}

 
  }

  useEffect(()=>{
    let mounted = true 

    if(mounted){
      fetchData()
    }

    return ()=>{
      mounted=false
    }


  },[])


  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
        <span className="text-xl text-900 font-bold">Gələnlər</span>
        <Button icon="pi pi-plus-circle" raised label="Yeni sənəd əlavə et" severity="success" />
    </div>
);


const statusBodyTemplate = (product) => {
  return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
};

const getSeverity = (product) => {
  switch (product.inventoryStatus) {
      case 'Tamamlandı':
          return 'success';

      case 'Dəvam edir':
          return 'info';

      case 'Ləğv edildi':
          return 'danger';

      default:
          return "warning";
  }
};


  return (
    <Fragment>


{!error && data ? <DataTable  paginator rows={2} value={data} selectionMode="single" selection={selectedProduct} header={header} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" metaKeySelection={true} tableStyle={{ width: 'calc(100vW - 370px)' }}>
                <Column field="docNo" header="Sənəd Nömrəsi"></Column>
                <Column field="docDate" header="Sənəd Tarixi"></Column>
                <Column field="docTypeName" header="Sənəd Növü"></Column>
                <Column field="author" header="Göndərən"></Column>
                <Column field="status" header="Status" body={statusBodyTemplate}></Column>
            </DataTable>:
            
            <h2>Xeta var</h2>
            }





      <Outlet />
    </Fragment>
  )
}


