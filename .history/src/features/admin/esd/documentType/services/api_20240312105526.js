import instance from "../../../../../"

const GET_DOC_TYPES = async ()=>{
const res = await instance.get("DocumentManagement/DocTypes")
return res.data
}


export {GET_DOC_TYPES}