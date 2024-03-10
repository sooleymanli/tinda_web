import instance from '../../../api/agent'





const AUTH_LOGIN = async ()=>{


const res = await instance.post("Auth/login",data)

}

export {AUTH_LOGIN}