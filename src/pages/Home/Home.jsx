import React from "react";
import Hero from "./Hero";
import About from "./About";
import BMI from "./BMI";
import Services from "./Services";
import Banner from "./Banner";
import Trainers from "./Trainers";
import Popular from "./Popular";
import PricingPlan from "./PricingPlan";
import Contact from "./Contact";
import Footer from "./Footer";
import Signup from "./Signup";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto">
        <Hero/>
        <About/>
        <BMI/>
        <Services/>
        <Banner/>
        <Trainers/>
        <Popular/>
        <PricingPlan/>
        <Contact/>
        <Footer/>
        <Signup/>
      </div>
    </>
  );
};

export default Home;
