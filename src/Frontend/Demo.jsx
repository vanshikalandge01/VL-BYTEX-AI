import React from "react";
import Navbar from "./Demo/Navbar";
import DemoRequest from "./Demo/DemoRequest";
import Footer from "./Demo/Footer";

function Demo() {
  return (
    <div>
        <Navbar />
          <div className="content">
            <DemoRequest />
            <Footer />
          </div>
    </div>
  );
}

export default Demo;
