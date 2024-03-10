import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Income() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <Fragment>




<DataTable value={products} selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" metaKeySelection={true} tableStyle={{ width: 'calc(100vW - 304px)' }}>
                <Column field="code" header="Sənəd Nömrəsi"></Column>
                <Column field="date" header="Sənəd Tarixi"></Column>
                <Column field="category" header="Sənəd Növü"></Column>
                <Column field="author" header="Göndərən"></Column>
                <Column field="status" header="Status"></Column>
            </DataTable>



      <Outlet />
    </Fragment>
  )
}


