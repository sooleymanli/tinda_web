import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Income() {
  return (
    <Fragment>




<DataTable value={products} selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>



      <Outlet />
    </Fragment>
  )
}


