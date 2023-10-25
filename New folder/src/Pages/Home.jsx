import React from "react";
import AddEmployee from "../Components/AddEmployee";
import View from "../Components/View";
import Update from "../Components/Update";
function Home() {
  return (
    <>
    
      <div className="container mt-5 mb-5 d-flex flex-column align-items-center justify-content-center">
        <div className="add"><AddEmployee/></div>
        <div className="add"><Update/></div>
        <div className="view"><View/></div>
      </div>
    </>
  );
}

export default Home;
