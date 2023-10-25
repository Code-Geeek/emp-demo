import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getAdetail, updateEmployee } from "../Services/allAPI";
import { Link } from "react-router-dom";
function Update() {
  const index = useSelector((state) => state.indexData.index);
  console.log(index);

  const [employee, setEmployee] = useState({});

  const showDetails = async () => {
    const { data } = await getAdetail(index);
    setEmployee(data);
  };
  const handleChange = async () => {
    const response = await updateEmployee(index, employee);
    if (response.status >= 200 && response.status < 300) {
      alert(`Updated Succesfully !`);
    } else {
      alert("Upload Error !");
    }
  };
  console.log(employee);
  useEffect(() => {
    showDetails();
  }, [setEmployee]);
  return (
    <>
    <div style={{height:'100vh'}} className="d-flex flex-column justify-content-center align-items-center">
      <h4>Update Employee Details</h4>
      {employee && (
        
          <Form className="border border-secondary rounded mt-4 p-3 w-50" >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Employee firstName"
                value={employee.firstName}
                onChange={(e) =>
                  setEmployee({ ...employee, firstName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Employee secondName"
                value={employee.secondName}
                onChange={(e) =>
                  setEmployee({ ...employee, secondName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter Employee  Email"
                value={employee.email}
                onChange={(e) =>
                  setEmployee({ ...employee, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Employee  Salary"
                value={employee.salary}
                onChange={(e) =>
                  setEmployee({ ...employee, salary: e.target.value })
                }
              />
            </Form.Group>
            <Link to={"/home"}>
          <button className="btn btn-success"
            onClick={handleChange}
          >
            Update
          </button>
          </Link>
          <Link to={"/home"}>
          <button className="btn btn-danger ms-1">Cancel</button>
          </Link>
          
          </Form>
        
      )}
      </div>
    </>
  );
}

export default Update;
