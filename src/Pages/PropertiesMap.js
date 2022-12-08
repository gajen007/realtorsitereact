import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import L from 'leaflet/dist/leaflet';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

function PropertiesMap() {
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
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ maxZoom:15}).addTo(map);
        L.Marker.prototype.options.icon = L.icon({ iconUrl: icon, shadowUrl: iconShadow, });
        var marker = L.marker([43.8078538,-79.2563908]).addTo(map);
        marker.bindPopup("<b>Gajen's Home!</b>").openPopup();
    }, [latitude, longitude]);
    return (<><NavBar></NavBar><div id="myMap" style={{ height: "100vh" }}></div></>);

  }

export default PropertiesMap;