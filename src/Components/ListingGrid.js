import React, { useState } from "react";
import { Link } from "react-router-dom";
import propertyImage from "../Images/home.jpg"
// command to install fontawesome
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// and use 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faBed, faBath, faDollarSign, faComment, faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'

function ListingGrid(props) { //props is an object as a parameter
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
                            <a href={"https://www.google.com/maps/search/?api=1&query=" + props.latitude + "%2C" + props.longitude} target="_blank">{props.address}</a>
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


                    {/* Design 2 */}
                    {/* <table class="table table-hover table-bordered">
                        <tbody>
                            <tr className="table-success">
                                <td scope="row"><i class="fa-solid fa-map-location-dot"></i> &nbsp; Address</td>
                                <td>
                                    <a href={"https://www.google.com/maps/search/?api=1&query=" + props.latitude + "%2C" + props.longitude} target="_blank">{props.address}</a>
                                </td>
                            </tr>
                            <tr className="table-info">
                                <td scope="row"><i class="fa-solid fa-bed"></i> &nbsp; Bed Rooms</td>
                                <td>{props.bedrooms + " Rooms"}</td>
                            </tr>
                            <tr className="table-success">
                                <td scope="row"><i class="fa-solid fa-bath"> &nbsp; </i>Wash Rooms</td>
                                <td>{props.washrooms + " Rooms"}</td>
                            </tr>
                            <tr className="table-info">
                                <td scope="row"><i class="fa-solid fa-dollar-sign"></i>&nbsp;Price</td>
                                <td>{props.price}</td>
                            </tr>
                        </tbody>
                    </table> */}

                    {/* Design 3 */}
                    {/* <div className="row">
                        <div className="col-md-5">
                            <i class="fa-solid fa-map-location-dot"></i> &nbsp;Address&nbsp;:
                        </div>
                        <div className="col-md-7">
                            <a href={"https://www.google.com/maps/search/?api=1&query=" + props.latitude + "%2C" + props.longitude} target="_blank">{props.address}</a>
                        </div>
                    </div>
                    
                    
                    <p></p>
                
                    <i class="fa-solid fa-bed"></i> &nbsp; Bed Rooms&nbsp;:&nbsp;
                    {props.bedrooms + " Rooms"}
                    <p></p>
                
                    <i class="fa-solid fa-bath"> &nbsp; </i>Wash Rooms&nbsp;:&nbsp;
                    {props.washrooms + " Rooms"}
                    <p></p>
                
                    <i class="fa-solid fa-dollar-sign"></i>&nbsp;Price&nbsp;:&nbsp;
                    {props.price} */}
                    {/* Design 3 end*/}

                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col">
                            <div className="btn btn-outline-primary form-control">
                                <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>&nbsp;
                                Enquiry
                            </div>
                        </div>
                        <div className="col">
                            <Link to={"singleListing/"+props.mlsnumber}>
                                <div className="btn btn-outline-success form-control">
                                    <FontAwesomeIcon icon={faMagnifyingGlassLocation}></FontAwesomeIcon>&nbsp;
                                    Show
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ListingGrid; //necessary to be implemented
