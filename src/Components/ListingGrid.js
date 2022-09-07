import { Link } from "react-router-dom";
// command to install fontawesome
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// and use 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faBed, faBath, faDollarSign, faComment, faMagnifyingGlassLocation, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import NavBar from "../Pages/NavBar";

function ListingGrid(props) { //props is an object as a parameter
    const [favMessage,addFavMessage]=useState("Add");
    
    // show added text when page loads
    useEffect(()=>{
        var favVal=JSON.parse(localStorage.getItem("favData"));
        if(favVal["fav"].includes(props.mlsnumber)){
            addFavMessage("Added");
        }
    },[]);

    const addToFavourite=()=>{
        var favVal=JSON.parse(localStorage.getItem("favData"));
        if(favVal["fav"].includes(props.mlsnumber)){
            var index = favVal["fav"].indexOf(props.mlsnumber);
            if (index !== -1) {
                favVal["fav"].splice(index, 1);
            }
            addFavMessage("Add");
            localStorage.setItem("favData",JSON.stringify(favVal));
        }else{
            favVal["fav"].push(props.mlsnumber);
            addFavMessage("Added");
            localStorage.setItem("favData",JSON.stringify(favVal));
        }
        
    }
    return (
        <div className="col">

            <div className="card">
                <div className="card-header bg-dark text-white text-center fw-bolder">{"MLS Number : " + props.mlsnumber}</div>
                {/* <img src={propertyImage} className="card-img-top" alt="property-image"></img> */}
                <div className="card-body ">

                    {/* Design 1 */}
                    <div className="row border-bottom">
                        <div className="col-md-2"><FontAwesomeIcon icon={faMapLocationDot} /></div>
                        <div className="col-md-10">
                            <a href={"https://www.google.com/maps/search/?api=1&query=" + props.latitude + "%2C" + props.longitude} >{props.address}</a>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-md-2"><FontAwesomeIcon icon={faBed} /></div>
                        <div className="col-md-10">{props.bedrooms + " Bed Rooms"}</div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-md-2"><FontAwesomeIcon icon={faBath} /></div>
                        <div className="col-md-10">{props.washrooms + " Wash Rooms"}</div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-md-2">
                            <FontAwesomeIcon icon={faDollarSign} />
                        </div>
                        <div className="col-md-10">{props.price}</div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-12 mt-1">
                            <Link to={"/inquiry/" + props.mlsnumber}>
                                <div className="btn btn-outline-primary form-control">
                                    <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>&nbsp;
                                    Enquiry
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-1">
                            <Link to={"/singleListing/" + props.mlsnumber}>
                                <div className="btn btn-outline-success form-control">
                                    <FontAwesomeIcon icon={faMagnifyingGlassLocation}></FontAwesomeIcon>&nbsp;
                                    Show
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-1">
                            <button className="btn btn-outline-danger form-control" onClick={addToFavourite}>
                                <FontAwesomeIcon icon={faHeart} />&nbsp;
                                {favMessage}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ListingGrid; //necessary to be implemented
