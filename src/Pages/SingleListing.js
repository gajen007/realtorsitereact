import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import MapV2 from "../Components/MapV2";
import Spinner from 'react-bootstrap/Spinner';
function SingleListing() {
  // localStorage.setItem("likes","");
  const { mlsNumber } = useParams();
  const [jsonData, setJsonData] = useState({});
  const [propertyImages] = useState([  
    {"key":1,"className":"carousel-item active","source":"https://cdn.realtor.ca/listing/TS638059518347030000/reb82/highres/8/w5845398_1.jpg"},
    {"key":2,"className":"carousel-item","source":"https://cdn.realtor.ca/listing/TS638059518347030000/reb82/highres/8/w5845398_2.jpg"},
    {"key":3,"className":"carousel-item","source":"https://cdn.realtor.ca/listing/TS638059518347030000/reb82/highres/8/w5845398_3.jpg"},
    {"key":5,"className":"carousel-item","source":"https://cdn.realtor.ca/listing/TS638059518347030000/reb82/highres/8/w5845398_5.jpg"},
    {"key":8,"className":"carousel-item","source":"https://cdn.realtor.ca/listing/TS638059518347030000/reb82/highres/8/w5845398_8.jpg"}
  ]);
  
  const requestShowing = (mlsNo)=>{
    if(window.confirm("Wanna request Showing ?")){
      var realtorSuit=JSON.parse(localStorage.getItem("realtorSuit"));
      var toServer = new FormData();
      toServer.append("mlsNumber", mlsNo);
      toServer.append("clientUserName", realtorSuit.userName);
      fetch("https://realtorsuit.artsuit.ca/public/api/requestShowing", {
        method: "POST",
        body: toServer,
        mode: "cors",
        cache: "no-cache",
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            alert("Backend Error..!");
            console.log(response.text());
          }
        })
        .then((data) => {
          alert(data.message);
        })
        .catch((e) => {
          console.log(e);
          alert("CORS Error");
        });
    }
  }

  useEffect(() => {
    fetch("https://realtorsuit.artsuit.ca/public/api/singleListing?mlsNumber=" + mlsNumber, { method: 'GET', mode: 'cors', cache: 'no-cache' })
    .then(response => {
      if (response.status === 200) { return response.json(); }
      else { console.log('Backend Error..!'); console.log(response.text()); }
    })
    .then(data => {
      setJsonData(data);
    })
    .catch(() => { console.log("Network connection error"); });
  }, [mlsNumber]);
  
  return (
    <React.Fragment>
    <NavBar></NavBar>
    <div className="container mt-2">
    <div className="card border border-dark">
    <div className="card-header bg-dark text-white" align="center">
    <div className="row align-items-center">
    <div className="col-md-8 fw-bolder">
    {"MLS Number : " + jsonData.mlsnumber}
    </div>
    <div className="col-md-4 mt-2">
    <Link to="/home"><div className="btn btn-primary form-control">Home</div></Link>
    </div>
    </div>
    
    </div>
    <div className="card-body">
    <div className="row ">
    <div className="col-md-6">
    <center>
    <div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    {
      propertyImages.map((item) => {
        return (
          <div key={item.key} className={item.className}>
          <img src={item.source} className="d-block w-100" alt="..." />
          </div>
          );
        })
      }
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
      </button>
      </div>
      </div>
      </center>
      
      </div>
      <div className="col-md-6">
      <div className="table-responsive">
      <table className="table table-hover">
      <tbody>
      <tr>
      <th scope="row">Address</th>
      <td><a href={"https://www.google.com/maps/place/"+jsonData.address}>{jsonData.address}</a></td>
      </tr>
      <tr>
      <th scope="row">Bedrooms</th>
      <td>{jsonData.bedrooms}</td>
      </tr>
      <tr>
      <th scope="row">Washrooms</th>
      <td>{jsonData.washrooms}</td>
      </tr>
      <tr>
      <th scope="row">Price</th>
      <td>{jsonData.price}</td>
      </tr>
      </tbody>
      </table>
      <div style={{ "overflow": "auto", "height": "40vh" }}>
      {
        (jsonData.latitude) ? <MapV2
        latitude={jsonData.latitude}
        longitude={jsonData.longitude}
        address={jsonData.address}
        ></MapV2>
        :
        <center><Spinner animation="grow" /></center>
      }
      </div>
      {
        (
          (jsonData.requested)?
            ((jsonData.scheduled)?
              <Link to={"/singleShowing/" + jsonData.showingID}>
                <div className="btn btn-success form-control mt-2">Scheduled</div>
              </Link>
              :<div className="btn btn-secondary form-control mt-2">Requested</div>
            )
          :<div onClick={(e) => requestShowing(jsonData.mlsnumber)} className="btn btn-warning form-control mt-2">Request</div>
        )
      }
      <Link to={"/inquiry/" + jsonData.mlsnumber}><button className="btn btn-primary form-control mt-2" >Enquiry</button></Link>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </React.Fragment>
      );
    }
    
    export default SingleListing;
    