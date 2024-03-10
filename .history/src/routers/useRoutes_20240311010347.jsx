import React from 'react'
import Income from '../pages/esd/Income'
import DocumentType from '../pages/admin/esd/DocumentType'
import History from '../pages/esd/History'
import Sent from '../pages/esd/Sent'

export default function useRoutes() {


const routes =[
    {path:"income",element: <Income />},
    {path:"sent",element: <Sent />},
    {path:"history",element: <History />},
    {path:"admin/esd/doctype",element: <DocumentType />},

]




  return routes
}
