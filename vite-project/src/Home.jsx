import React from "react";
import "./App.css";
import SubscriptionCalculator from "./Component/SubscriptionCalculator";
import Navbar from "./Component/NavBar";
import HeroSection from "./Component/HeroSection";
import CartComponent from "./Component/CartSection";
import Footer from "./Footer";
import SubscriptionSection from "./Component/Subscription";
import PaymentForm from "./Component/PaymentForm";

function Home() {

  return (

    <>
    <div className="bg-gradient-to-br from-blue-100 to-blue-300">
      <Navbar/>
      <HeroSection/>
      <CartComponent/>
      <SubscriptionSection/>
    <SubscriptionCalculator/>
    <PaymentForm/>
    <Footer/>
    </div>
   
    </>
  )
;
}

export default Home;
