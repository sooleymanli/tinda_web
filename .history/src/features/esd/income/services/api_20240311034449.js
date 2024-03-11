import instance from "../../../../api/agent"

const GET_ALL_INCOME_DOCUMENTS = async ()=>{
const res = await instance.get("DocumentManagement/GetAllIncomeDocuments")
return res
}

export {GET_ALL_INCOME_DOCUMENTS}