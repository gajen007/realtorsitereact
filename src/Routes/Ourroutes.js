import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage.js'
import SingleListing from '../Pages/SingleListing.js'
import Login from '../Pages/Login.js'
import Signup from '../Pages/Signup.js'
import InquiryProperty from "../Pages/InquiryProperty.js";
import UserEnquiries from "../Pages/UserEnquiries.js";
import PropertiesMap from "../Pages/PropertiesMap.js";

const Ourroutes = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/home" element={<HomePage/>}/>
          <Route exact path="/singleListing/:mlsNumber" element={<SingleListing/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/userEnquiries" element={<UserEnquiries/>}/>
          <Route exact path="/inquiry/:mlsNumber" element={<InquiryProperty/>}/>
          <Route exact path="/propertiesMap" element={<PropertiesMap/>}/>

        </Routes>
      </BrowserRouter>
      );

      //Need to study the "routing parameters"
}

export default Ourroutes;