import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Partners from "../src/components/Partners/Partners";
import Home from "./components/Home/Home";
import Timeline from "./components/Timeline/Timeline";
import Pricepool from "./components/Pricepool/Pricepool";
import Footer from '../src/components/Footer/Footer';

const App = () => {
  return (
    <>
    <Navbar/> 
    <Home/>
    <Timeline/>
    <Pricepool/>
    <Partners/>
    <Footer/>
    </>
  )

};

export default App;
