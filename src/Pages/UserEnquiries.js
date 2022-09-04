import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';
function UserEnquiries() {
    const [chats, fillChats] = useState([]);
    let realtorSuit = JSON.parse(localStorage.getItem("realtorSuit"));
    var loggedInUserName = realtorSuit['userName'];
    useEffect(() => {
        fetch("http://localhost:8000/api/allInquiriesOfClient?loggedInUserName=" + loggedInUserName, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        })
            .then(res => { return res.json(); })
            .then(data => {
                if (data.length > 0) {
                    fillChats(data);
                }

            }).catch(err => console.error(err));

    }, []);
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-4">
                <h4>Enquiries</h4>
                <div className="row">
                    <div className="col-md-12">
                        {
                            chats.map((item) => {
                                return (
                                    <React.Fragment>
                                        <div className="card my-2" key={item.mlsnumber}>
                                            <div className="card-header">
                                                {item.mlsnumber}
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        {item.address}
                                                    </div>
                                                    <div className="col-md-6">
                                                        {item.created_at}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <Link to={"/inquiry/"+item.mlsnumber}>
                                                    <div className="btn btn-primary form-control">
                                                        Continue Chat
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default UserEnquiries;