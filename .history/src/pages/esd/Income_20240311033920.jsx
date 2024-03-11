import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

export default function Income() {
  const [products, setProducts] = useState([

    {
      id: '1000',
      number: 'f230fh0g3',
      date: 'Bamboo Watch',
      type: 'Product Description',
      author: 'bamboo-watchd',
      inventoryStatus: 'Tamamlandı',
     
  },
  {
    id: '1002',
    number: 'f230fh0g3',
    date: 'Bamboo Watch',
    type: 'Product Description',
    author: 'bamboo-watchd',
    inventoryStatus: 'Ləğv edildi',
   
},
{
  id: '1003',
  number: 'f230fh0g3',
  date: 'Bamboo Watch',
  type: 'Product Description',
  author: 'bamboo-watchd',
  inventoryStatus: 'Gözləmədə',
 
},
{
  id: '1004',
  number: 'f230fh0g3',
  date: 'Bamboo Watch',
  type: 'Product Description',
  author: 'bamboo-watchd',
  inventoryStatus: 'Dəvam edir',
 
},


  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);


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




<DataTable  paginator rows={2} value={products} selectionMode="single" selection={selectedProduct} header={header} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" metaKeySelection={true} tableStyle={{ width: 'calc(100vW - 370px)' }}>
                <Column field="number" header="Sənəd Nömrəsi"></Column>
                <Column field="date" header="Sənəd Tarixi"></Column>
                <Column field="type" header="Sənəd Növü"></Column>
                <Column field="author" header="Göndərən"></Column>
                <Column field="status" header="Status" body={statusBodyTemplate}></Column>
            </DataTable>



      <Outlet />
    </Fragment>
  )
}


