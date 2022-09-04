import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useNavigate } from 'react-router-dom';

import L from 'leaflet/dist/leaflet';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

function PropertiesMap() {
    const navigate = useNavigate();

    let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow, });

    const[latitude,setLatitude]=useState("");
    const[longitude,setLongitude]=useState("");
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(p){
            setLatitude(p.coords.latitude);
            setLongitude(p.coords.longitude);
        },function(err){
            console.warn("Error Code"+err.code+": "+err.message);
            alert("Check the console");
        });

        var container = L.DomUtil.get("myMap");
        if (container != null) { container._leaflet_id = null; } //Unknown...?

        var map = L.map("myMap").setView([latitude,longitude],12);

        L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
            attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:"pk.eyJ1IjoidGFyLWhlbCIsImEiOiJjbDJnYWRieGMwMTlrM2luenIzMzZwbGJ2In0.RQRMAJqClc4qoNwROT8Umg",
        }
        ).addTo(map);
        L.Marker.prototype.options.icon = DefaultIcon;
        var marker = L.marker([43.8078538,-79.2563908]).addTo(map);
        marker.bindPopup("<b>Gajen's Home!</b>").openPopup();
    }, []);
    return (<><NavBar></NavBar><div id="myMap" style={{ height: "100vh" }}></div></>);

  }

export default PropertiesMap;