import NavBar from "./NavBar";
import ListingGrid from '../Components/ListingGrid.js';
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from "react";
import axios from "axios";
import L from 'leaflet/dist/leaflet';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Link, useNavigate } from 'react-router-dom';
function MapView() {
    const navigate = useNavigate();
    //List Fetch Function
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(false);
    let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow, });
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
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
    }, []);
    //Function for map
    useEffect(()=>{
        if (listings.length>0) {
            navigator.geolocation.getCurrentPosition(function (p) {
                setLatitude(p.coords.latitude);
                setLongitude(p.coords.longitude);
            }, function (err) {
                console.warn("Error code" + err.code + ": " + err.message);
                alert("Check the console");
            });
            var container = L.DomUtil.get("myMap");
            if (container != null) { container._leaflet_id = null; } //Unknown...?
            var map = L.map("myMap").setView([43.8078538, -79.2563908], 10);
            L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
                {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: "mapbox/streets-v11",
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken: "pk.eyJ1IjoidGFyLWhlbCIsImEiOiJjbDJnYWRieGMwMTlrM2luenIzMzZwbGJ2In0.RQRMAJqClc4qoNwROT8Umg",
                }
            ).addTo(map);
            listings.forEach((e) => {
                L.Marker.prototype.options.icon = DefaultIcon;
                var marker = L.marker([e.latitude, e.longitude]).addTo(map);
                marker.bindPopup(e.address).openPopup();
            });
        }
    },[listings]);
    
    return (
        <div>
            <NavBar></NavBar>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3" style={{ "height": "86vh", "overflow": "auto" }}>
                        {
                            loading ?

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

                                : <center><Spinner animation="grow" /></center>
                        }
                    </div>
                    <div className="col-md-9">
                        <div id="myMap" style={{ height: "86vh" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MapView;