import instance from "../../../../api/agent"

const GET_ALL_INCOME_DOCUMENTS = async (data)=>{
const res = await instance.post("Auth/login",data)
return res
}

export {AUTH_LOGIN}