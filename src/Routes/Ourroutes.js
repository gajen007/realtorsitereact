import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage.js'
import SingleListing from '../Pages/SingleListing.js'
import Login from '../Pages/Login.js'
import Signup from '../Pages/Signup.js'
import InquiryProperty from "../Pages/InquiryProperty.js";
import UserEnquiries from "../Pages/UserEnquiries.js";
import PropertiesMap from "../Pages/PropertiesMap.js";
import Map from "../Components/Map.js";
import MapView from "../Pages/MapView.js";
import React from "react";
import Favourite from "../Pages/Favourite.js";
const Ourroutes = () => {
  const protect=(element)=>{
    if(localStorage.getItem("realtorSuit")){
      return element
    }else{
      return <Login/>
    }
  }
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home" element={protect(<HomePage />)} />
          <Route exact path="/singleListing/:mlsNumber" element={protect(<SingleListing />)} />
          <Route exact path="/inquiry/:mlsNumber" element={protect(<InquiryProperty />)} />
          <Route exact path="/propertiesMap" element={protect(<PropertiesMap />)} />
          <Route exact path="/singleMap/:latitude/:longitude/:text" element={protect(<Map />)} />
          <Route exact path="/mapview" element={protect(<MapView></MapView>)} />
          <Route exact path="/userEnquiries" element={protect(<UserEnquiries />)} />
          <Route exact path="/favourites" element={protect(<Favourite/>)} />
          
        </Routes>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default Ourroutes;