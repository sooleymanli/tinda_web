import Income from '../pages/esd/Income'
import DocumentType from '../pages/admin/esd/DocumentType'
import History from '../pages/esd/History'
import Sent from '../pages/esd/Sent'
import NewDoc from '../features/esd/income/components/NewDoc'

export default function useRoutes() {


const routes =[
    {path:"income", exact:true, element: <Income />},
    {path:"income/new",exact:true,element: <NewDoc />},
    {path:"outgoing",element: <Out />},
    {path:"history",element: <History />},
    {path:"admin/esd/doctype",element: <DocumentType />},

]




  return routes
}