import instance from "../../../../api/agent"

const GET_ALL_DOCUMENTS_FOR_HISTORY = async ()=>{
const res = await instance.get("DocumentManagement/GetAllOutgoingDocuments")
return res.data
}


export {GET_ALL_OUTGOING_DOCUMENTS}