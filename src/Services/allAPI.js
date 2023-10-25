import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


// uploading details
export const uploadDetails = async (body)=>{
    // call post http request to http://http://localhost:4000/employeeDetails to add details in json server and return respose to AddEmployee component
    return await commonAPI("POST",`${serverURL}/employeeDetails`,body)
}
// get details
export const getDetails = async ()=>{
    // call get http request to http://http://localhost:4000/employeeDetails to get details from json server and return respose to view component
    return await commonAPI("GET",`${serverURL}/employeeDetails`,"")
}
// get a detail
export const getAdetail = async (id)=>{
    // call get http request to http://http://localhost:4000/employeeDetails to get details in json server and return respose to AddEmployee component
    return await commonAPI("GET",`${serverURL}/employeeDetails/${id}`,"")
}
// delete a detail
export const deleteAdetail = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/employeeDetails/${id}`,{})
}

// update a employee
export const updateEmployee= async(id,body)=>{
    return await commonAPI("PUT",`${serverURL}/employeeDetails/${id}`,body)
}