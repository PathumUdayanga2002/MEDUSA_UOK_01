import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Partners from "../src/components/Partners/Partners";
import Home from "./components/Home/Home";
import Pricepool from "./components/Pricepool/Pricepool";
import Registeration from "./components/Registeration/Registeration";
import Submit from "./components/Submit/Submit";
import Timeline from "./components/Timeline/Timeline";
import ContactUs from "./components/ContactUs/ContactUs";


import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";


const App = () => {
  // Custom Layout Handler
  const Layout = ({ children }) => {
    const location = useLocation();

    // Render Navbar only for "/hacker" and children
    if (location.pathname === "/hacker") {
      return (
        <>
          <Navbar />
          {children}
        </>
      );
    }else if (location.pathname === "/register") {  
      return (
        <>
          <Navbar />
          {children}
          
        </>
      );
    }

    // Default layout
    return (
      <>
        <Navbar />
        <Home />
        <Timeline />
        <Pricepool />
        <Partners />
        <ContactUs />
        <Footer />
      </>
    );
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hacker" element={<Submit />} />
          <Route path="/register" element={<Registeration />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
