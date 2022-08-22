import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar"
import LandingPage from "../src/components/landingPage/landing";
import Footer from "./components/footer/footer"




function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={< LandingPage />} />
      {/* <Route path="*" element={<Error />} /> */}

      </Routes>
       <Footer />

    </>
  );
}

export default App;