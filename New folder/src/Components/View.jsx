import React, { useEffect, useState } from 'react'
import { deleteAdetail, getDetails } from '../Services/allAPI'

function View() {
    const [allDetails,setAllDetails]= useState([])
    const getAllDetails = async ()=>{
        //make api call
        const {data} = await getDetails()
        setAllDetails(data);
    }
    useEffect(()=>{
        getAllDetails()
    },[])
    console.log(allDetails);

    const handleDelete = async (id)=>{
      // make api call
        await deleteAdetail(id)
        // get all details
        getAllDetails()
    }
  return (
    <>
        <table className="table mt-5 mb-5 container border shadow">
        <thead>
          <tr>
            <th>#ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-Mail Address</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
    {
        allDetails.length>0?
        allDetails.map((item,index)=>(
          <tr>
            <td>{item?.id}</td>
            <td>{item?.firstName}</td>
            <td>{item?.secondName}</td>
            <td>{item?.email}</td>
            <td>{item?.salary}</td>
            <td>
              <button  className="btn btn-success">UPDATE</button>
            </td>
            <td>
              <button onClick={()=>handleDelete(item?.id)} className="btn btn-danger">DELETE</button>
            </td>
          </tr>
        ))
        :<h5>NO DATA FOUND</h5>
        }
        </tbody>
      </table>
    </>
  )
}

export default View