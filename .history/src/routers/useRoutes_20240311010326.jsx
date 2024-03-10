import React from 'react'
import Income from '../pages/esd/Income'
import DocumentType from '../pages/admin/esd/DocumentType'

export default function useRoutes() {


const routes =[
    {path:"income",element: <Income />},
    {path:"sent",element: <Income />},
    {path:"history",element: <Income />},
    {path:"admin/esd/doctype",element: <DocumentType />},




]




  return (
    <div>useRoutes</div>
  )
}
