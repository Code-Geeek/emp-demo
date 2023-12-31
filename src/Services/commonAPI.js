import axios from 'axios';

export const commonAPI = async (httpMethod,url,reqBody)=>{
    const reqConfig ={
        method:httpMethod,
        url,
        data:reqBody,
        Headers:{
            "Content-Type":"application/json"
        }
    }
    return axios(reqConfig).then(
        (result)=>{
            return result
        }
    ).catch((err)=>{
        return err
    })
}