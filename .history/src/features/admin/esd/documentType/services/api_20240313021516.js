import instance from "../../../../../api/agent"

const GET_DOC_TYPES = async ()=>{
const res = await instance.get("DocTypes")
return res.data
}

const GET_WORKERS_FOR_COMBO = async ()=>{
const res = await instance.get("Workers/GetWorkersForCombo")

}


export {GET_DOC_TYPES}