import ListingGrid from '../Components/ListingGrid.js';
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

function HomePage() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFunction = async () => {
    try {
      await axios
        .get('http://localhost:8000/api/allListings')
        .then(res => {
          setListings(res.data['listings']);
        });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchFunction();
    // fetch('http://localhost:8000/api/allListings', {
    //   method: 'GET',
    //   mode: 'cors',
    //   cache: 'no-cache'
    // })
    //   .then(res => { return res.json(); })
    //   .then(data => {
    //     setListings(data['listings']);
    //   }).catch(err => console.error(err));
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className="container mt-5">
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" aria-current="true" href="#">Grid View</a>
              </li>
              <li className="nav-item">
                <Link to="/mapview"><div className="nav-link">Map View</div></Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            {
              loading ?
                <div className="row row-cols-1 row-cols-md-4 g-4">
                  {
                    listings.map((item) => {
                      return (
                        <ListingGrid
                          key={item.mlsnumber}
                          mlsnumber={item.mlsnumber}
                          price={item.price}
                          address={item.address}
                          latitude={item.latitude}
                          longitude={item.longitude}
                          bedrooms={item.bedrooms}
                          washrooms={item.washrooms}
                        />
                      );
                    })
                  }
                </div>
                : <center><Spinner animation="grow" /></center>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;