import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
function SingleShowing() {
    const { showingID } = useParams();
    const [jsonData, setJsonData] = useState({});
    useEffect(() => {
        fetch("https://realtorsuit.artsuit.ca/public/api/singleShwoing?id=" + showingID, { method: 'GET', mode: 'cors', cache: 'no-cache' })
        .then(response => {
          if (response.status === 200) { return response.json(); }
          else { console.log('Backend Error..!'); console.log(response.text()); }
        })
        .then(data => {
          setJsonData(data);
        })
        .catch(() => { console.log("Network connection error"); });
      }, [showingID]);

    return (
        <React.Fragment>
        <NavBar></NavBar>
        <div className="container mt-2">
    <div className="card border border-dark">
    
    <div className="card-header bg-dark text-white" align="center">
    
    <div className="row align-items-center">
        <div className="col-md-8 fw-bolder">{"MLS Number : " + jsonData.mlsnumber}</div>
        <div className="col-md-4 mt-2"><Link to="/home"><div className="btn btn-primary form-control">Home</div></Link></div>
    </div>
    
    </div>
    <div className="card-body">
    <div className="row align-items-center">
      <div className="col-md-3">Address:</div>
      <div className="col-md-9">{jsonData.address}</div>
    </div>
    <div className="row align-items-center">
      <div className="col-md-3">MLS #</div>
      <div className="col-md-9">{jsonData.mlsnumber}</div>
    </div>
    <div className="row align-items-center">
      <div className="col-md-3">Date:</div>
      <div className="col-md-9">{jsonData.scheduledDate}</div>
    </div>
    <div className="row align-items-center">
      <div className="col-md-3">Time</div>
      <div className="col-md-9">{jsonData.scheduledTime}</div>
    </div>
    </div>
    </div>
    </div>
        </React.Fragment>
    );
}
export default SingleShowing;