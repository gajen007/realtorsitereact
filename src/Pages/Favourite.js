import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Favourite = () => {
    var favVal = JSON.parse(localStorage.getItem("favData"));

    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-3">
                {
                    (favVal["fav"].length === 0)
                        ?
                        <div className="alert alert-danger">No Favourites Available !</div>
                        :
                        favVal["fav"].map((e) => {
                            return (
                                <div key={e}>
                                    <div className="row">
                                        <div className="col-md-8"><div className="form-control mt-2">{e}</div></div>
                                        <div className="col-md-2">
                                            <Link to={"/singleListing/"+e}>
                                                <div className="btn btn-success form-control mt-2">Show</div>
                                            </Link>
                                        </div>
                                        <div className="col-md-2">
                                            <Link to={"/inquiry/"+e}>
                                                <div className="btn btn-primary form-control mt-2">Enquiry</div>
                                            </Link>
                                        </div>
                                    </div>
                                    
                                </div>

                            );
                        })
                }
            </div>
        </React.Fragment>
    );
}
export default Favourite;