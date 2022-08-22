import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleListing() {

  const { mlsNumber } = useParams();
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/api/singleListing?mlsNumber=" + mlsNumber, { method: 'GET', mode: 'cors', cache: 'no-cache' })
      .then(response => {
        if (response.status == 200) { return response.json(); }
        else { console.log('Backend Error..!'); console.log(response.text()); }
      })
      .then(data => {
        setJsonData(data['listings']);
      })
      .catch(() => { console.log("Network connection error"); });
  }, [])
  //useState with varibles
  //address
  //price
  //bedrooms
  //washrooms

  //fetch call
  //sending this mls number as URL query parameter

  //sample response
  //{
  //   "id":1,
  //   "mlsnumber":"W5715268",
  //   "price":"$739,000 ",
  //   "address":"#G8 -284 MILL RD, Toronto, Ontario ",
  //   "latitude":"43.6375647",
  //   "longitude":"-79.5824898",
  //   "bedrooms":"2 + 1",
  //   "washrooms":"2"
  // }

  return (
    <div className="container">
      
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://image.ibb.co/k0wVTm/profile_pic.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://image.ibb.co/jOzeUG/luke_1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://image.ibb.co/cBZPww/bane_1.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="card">
        <div className="card-header" align="center">{jsonData.mlsnumber}</div>
        <div className="card-body">
          <div className="row mt-4">
            <div className="col-md-3">Address</div>
            <div className="col-md-9"><a href={"https://www.google.com/maps/search/?api=1&query=" + jsonData.latitude + "%2C" + jsonData.longitude} target="_blank">{jsonData.address}</a></div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">Bedrooms</div>
            <div className="col-md-9">{jsonData.bedrooms}</div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">Washrooms</div>
            <div className="col-md-9">{jsonData.washrooms}</div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">Price</div>
            <div className="col-md-9">{jsonData.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleListing;

  //<h1>{mlsNumber}</h1>

  //card
    //list
    //row
    //label
