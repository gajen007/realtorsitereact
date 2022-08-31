import { Link, useParams } from "react-router-dom";
import L from 'leaflet/dist/leaflet';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect } from "react";

// Sample
// http://localhost:3000/singleMap/6.9270786/79.861243/Raguraj

function Map(){
    const{latitude,longitude,text}=useParams();
    let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow, });
    useEffect(() => {
        var container = L.DomUtil.get("myMap");
        if (container != null) { container._leaflet_id = null; }
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
        var marker = L.marker([latitude,longitude]).addTo(map);
        marker.bindPopup("<b>"+text+"</b>").openPopup();
    }, []);
    return (<><div id="myMap" style={{ height: "100vh" }}></div></>);
}
export default Map;