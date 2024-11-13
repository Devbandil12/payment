import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import ApplicationForm from "./NavItem/Application";
import ContactUs from "./NavItem/Contact";
import AboutUs from "./NavItem/Aboutus";



function App() {

  return (
<Router>
<div className="bg-gradient-to-br from-blue-100 to-blue-300">
        <Routes>
          {/* Define the routes for your app */}
          <Route path="/" element={<Home/>} /> {/* Home page route */}
          <Route path="/application-form" element={<ApplicationForm/>} /> {/* Application form route */}
          <Route path="/Contact" element={<ContactUs/>} /> {/* Application form route */}
          <Route path="/About" element={<AboutUs/>} /> {/* Application form route */}
        </Routes>
      </div>
    </Router>
   
  )
;
}

export default App;
