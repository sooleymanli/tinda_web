import instance from "../../../../api/agent"

const GET_DOC_TYPES = async ()=>{
const res = await instance.get("DocumentManagement/GetAllDocumentsForHistory")
return res.data
}


export {GET_ALL_DOCUMENTS_FOR_HISTORY}