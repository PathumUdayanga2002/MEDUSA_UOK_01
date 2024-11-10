import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Partners from "../src/components/Partners/Partners";
import Home from "./components/Home/Home";
import Timeline from "./components/Timeline/Timeline";

const App = () => {
  return (
    <>
    <Navbar/> 
    <Home/>
    <Timeline/>
    <Partners/>
    </>
  )

};

export default App;
