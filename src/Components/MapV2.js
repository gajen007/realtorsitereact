import { Link, useParams } from "react-router-dom";
import L from 'leaflet/dist/leaflet';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect } from "react";

// Sample

// (jsonData.latitude) ? <MapV2
// latitude={jsonData.latitude}
// longitude={jsonData.longitude}
// text={jsonData.address}
// ></MapV2>
// :
// "Loading..."

function MapV2(props){
    var latitude=props.latitude;
    var longitude=props.longitude;
    var text=props.text;
    let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow, });
    useEffect(() => {
        var container = L.DomUtil.get("myMap");
        if (container != null) { container._leaflet_id = null; }
        var map = L.map("myMap").setView([latitude,longitude],9);
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
export default MapV2;