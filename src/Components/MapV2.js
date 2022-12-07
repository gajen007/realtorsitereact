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
    useEffect(() => {
        var container = L.DomUtil.get("myMap");
        if (container != null) { container._leaflet_id = null; }
        var map = L.map("myMap").setView([props.latitude,props.longitude],15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ maxZoom:15}).addTo(map);
        L.Marker.prototype.options.icon = L.icon({ iconUrl: icon, shadowUrl: iconShadow, });
        var marker = L.marker([props.latitude,props.longitude]).addTo(map);
        marker.bindPopup("<b>"+props.address+"</b>").openPopup();
    }, [props.latitude,props.longitude,props.address]);
    return (<><div id="myMap" style={{ height: "50vh" }}></div></>);
}
export default MapV2;