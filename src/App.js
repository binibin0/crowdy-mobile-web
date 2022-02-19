import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import StoreDetail from "./Pages/StoreDetail";
import Crowdy from "./Pages/Crowdy";
import Survey from "./Pages/Survey";
import AdminLogin from "./Pages/AdminLogin";
import CrowdyContext from "./Pages/CrowdyContext";
import SeeMoreImage from "./Pages/SeeMoreImage";

function App() {
  function zoomOutMobile() {
    var viewport = document.querySelector('meta[name="viewport"]');

    if (viewport) {
      viewport.content = "initial-scale=0.1";
      viewport.content = "width=414";

      //initial-scale=1.0, maximum-scale=1.0, user-scalable=no
    }
  }

  useEffect(() => {
    zoomOutMobile();
  }, []);

  const [openImageModal, setOpenImageModal] = useState(false);
  const [currentImageForModal, setCurrentImageForModal] = useState("");

  return (
    <CrowdyContext.Provider value={{ openImageModal, setOpenImageModal, currentImageForModal, setCurrentImageForModal }}>
      <Router basename="/crowdy-mobile-web">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crowdy" element={<Crowdy />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/:path" element={<StoreDetail />} />
          <Route path="/:path/:page" element={<SeeMoreImage />} />
        </Routes>
      </Router>
    </CrowdyContext.Provider>
  );
}

export default App;
