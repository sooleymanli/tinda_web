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
  return <Tag value={product.status} severity={getSeverity(product)}></Tag>;
};


const getStatusLabel = (product)=>{

switch(product.status){
case 1:
  return "İlkin qeydiyyat";
  case 2: 
  return "Növbədə";
  case 3:
    return "Gözləmədə";
    case 4:
      return "Təsdiqləndi";
      case 5:
        return "Icra gözləyir";
        case 6 :
          return "Tamamlandı";
          case 7 : 
          return "Ləğv edildi";
          


}


}

const getSeverity = (product) => {
  switch (product.status) {
      case 4:
      case 6:
          return 'success';

      case 1:
          return 'warning';

      case 7:
      case 8: 
          return 'danger';

      default:
          return "info";
  }
};


  return (
    <Fragment>


{!error && data ? <DataTable  paginator rows={10} value={data} selectionMode="single" selection={selectedProduct} header={header} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" metaKeySelection={true} tableStyle={{ width: 'calc(100vW - 370px)' }}>
                <Column field="docNo" header="Sənəd Nömrəsi"></Column>
                <Column field="docDate" header="Sənəd Tarixi"></Column>
                <Column field="docTypeName" header="Sənəd Növü"></Column>
                <Column field="senderName" header="Göndərən"></Column>
                <Column field="status" header="Status" body={statusBodyTemplate}></Column>
            </DataTable>:
            
            <h2>Xeta var</h2>
            }





      <Outlet />
    </Fragment>
  )
}


