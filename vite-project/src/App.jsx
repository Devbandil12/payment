import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import ApplicationForm from "./NavItem/Application";
import ContactUs from "./NavItem/Contact";
import AboutUs from "./NavItem/Aboutus";
import SubscriptionPlans from "./NavItem/Upgrade";
import FinalPaymentSection from "./FinalPaymentSection";

import LoginSignup from "./Component/LoginRegisterPage";
import RegistrationPage from "./Component/LoginRegisterPage";
import CourseCertificationPage from "./Component/IndustrialCourses";



function App() {

  return (
<Router>
<div className="bg-gradient-to-br from-blue-100 to-blue-300">
        <Routes>
          {/* Define the routes for your app */}
          <Route path="/" element={<LoginSignup/>} />
          {/* <Route path="/" element={<LoginRegister/>} /> Home page route */}
          <Route path="/home" element={<Home/>} /> {/* Home page route */}
          <Route path="/application-form" element={<ApplicationForm/>} /> {/* Application form route */}
          <Route path="/Contact" element={<ContactUs/>} /> {/* Application form route */}
          <Route path="/About" element={<AboutUs/>} /> {/* Application form route */}
          <Route path="/Subscription" element={<SubscriptionPlans/>} /> {/* Application form route */}
          <Route path="/FinalPayment" element={<FinalPaymentSection/>} /> {/* Application form route */}
          <Route path="/LoginPage" element={<RegistrationPage/>} />
        <Route path="/Certification" element={<CourseCertificationPage/>} />
        </Routes>
      </div>
    </Router>
   
  )
;
}

export default App;
