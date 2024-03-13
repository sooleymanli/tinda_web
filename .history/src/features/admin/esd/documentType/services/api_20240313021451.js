import instance from "../../../../../api/agent"

const GET_DOC_TYPES = async ()=>{
const res = await instance.get("DocTypes")
return res.data
}

const Workers/GetWorkersForCombo


export {GET_DOC_TYPES}