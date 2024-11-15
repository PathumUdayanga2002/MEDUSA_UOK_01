import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Partners from "../src/components/Partners/Partners";
import Home from "./components/Home/Home";
import Pricepool from "./components/Pricepool/Pricepool";
import Registeration from "./components/Registeration/Registeration";
import Submit from "./components/Submit/Submit";
import Timeline from "./components/Timeline/Timeline";

import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";

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
    }

    // Default layout
    return (
      <>
        <Navbar />
        <Home />
        <Registeration />
        <Timeline />
        <Pricepool />
        <Partners />
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
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
