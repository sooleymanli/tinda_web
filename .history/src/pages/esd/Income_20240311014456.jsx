import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
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
      inventoryStatus: 'INSTOCK',
     
  },
  {
    id: '1000',
    number: 'f230fh0g3',
    date: 'Bamboo Watch',
    type: 'Product Description',
    author: 'bamboo-watchd',
    inventoryStatus: 'INSTOCK',
   
},
{
  id: '1000',
  number: 'f230fh0g3',
  date: 'Bamboo Watch',
  type: 'Product Description',
  author: 'bamboo-watchd',
  inventoryStatus: 'INSTOCK',
 
},
{
  id: '1000',
  number: 'f230fh0g3',
  date: 'Bamboo Watch',
  type: 'Product Description',
  author: 'bamboo-watchd',
  inventoryStatus: 'INSTOCK',
 
},
{
  id: '1000',
  number: 'f230fh0g3',
  date: 'Bamboo Watch',
  type: 'Product Description',
  author: 'bamboo-watchd',
  inventoryStatus: 'INSTOCK',
 
},

  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
        <span className="text-xl text-900 font-bold">Products</span>
        <Button icon="pi pi-refresh" rounded raised />
    </div>
);


const statusBodyTemplate = (product) => {
  return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
};

const getSeverity = (product) => {
  switch (product.inventoryStatus) {
      case 'INSTOCK':
          return 'success';

      case 'LOWSTOCK':
          return 'warning';

      case 'OUTOFSTOCK':
          return 'danger';

      default:
          return null;
  }
};


  return (
    <Fragment>




<DataTable value={products} selectionMode="single" selection={selectedProduct} header={header} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" metaKeySelection={true} tableStyle={{ width: 'calc(100vW - 304px)' }}>
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


