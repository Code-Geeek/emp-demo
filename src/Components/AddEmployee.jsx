import React, { useState } from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import {uploadDetails} from '../Services/allAPI'

function AddEmployee() {
  const [details,setDetails] = useState({
    id:"",firstName:"",secondName:"",email:"",salary:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = async ()=>{
    // get details of details
    const {id,firstName,secondName,email,salary} = details;
    // if details is empty or not
    if(!id || !firstName || !email || !salary){
      alert("Please fill the form completely!!!")
    }
    else{
      // make api call 
      const response = await uploadDetails(details)
      console.log(response);
      if(response.status>=200 && response.status<300){
        alert(` DATA UPLOADED SUCCESSFULLY`)
        // hide modal
        handleClose();
      }
      else{
        alert("Uploading Error...Please provide unique ID!")
      }
    }
  } 

  console.log(details);
  return (
    <>
      <div className="d-flex">
        <h5>Employee Registration</h5>
        <button onClick={handleShow} className="btn"><i className="fa-solid fa-circle-plus fs-5"></i></button>
        </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details!!!</p>
          <Form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Employee ID" onChange={(e)=>setDetails({...details,id:e.target.value})}/>        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Employee firstName" onChange={(e)=>setDetails({...details,firstName:e.target.value})}/>        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Employee secondName" onChange={(e)=>setDetails({...details,secondName:e.target.value})}/>        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Employee  Email"onChange={(e)=>setDetails({...details,email:e.target.value})}/>        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Employee  Salary" onChange={(e)=>setDetails({...details,salary:e.target.value})}/>        
      </Form.Group>
          </Form>
       </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;




