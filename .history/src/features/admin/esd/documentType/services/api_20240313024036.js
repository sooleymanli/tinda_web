import instance from "../../../../../api/agent"

const GET_DOC_TYPES = async ()=>{
const res = await instance.get("DocTypes")
return res.data
}

const GET_WORKERS_FOR_COMBO = async ()=>{
const res = await instance.get("Workers/GetWorkersForCombo")

return res.data

}


const GET_BY_ID_FOR_EDIT = async (id)=>{
const res = await instance.get(`DocTypes/GetById?typeid=${id}'

return res.data

}


export {GET_DOC_TYPES,GET_WORKERS_FOR_COMBO}