import Income from '../pages/esd/Income'
import DocumentType from '../pages/admin/esd/DocumentType'
import History from '../pages/esd/History'
import NewDoc from '../features/esd/income/components/NewDoc'
import OutGoing from '../pages/esd/OutGoing'

export default function useRoutes() {


const routes =[
    {path:"income", exact:true, element: <Income />},
    {path:"income/new",exact:true,element: <NewDoc />},
    {path:"outgoing",element: <OutGoing />},
    {path:"history",element: <History />},
    {path:"admin/esd/doctype",element: <DocumentType />},

]




  return routes
}