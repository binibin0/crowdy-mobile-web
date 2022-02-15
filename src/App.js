import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import StoreDetail from "./Pages/StoreDetail";
import Crowdy from "./Pages/Crowdy";
import Survey from "./Pages/Survey";
import AdminLogin from "./Pages/AdminLogin";

function App() {
  return (
    <Router basename="/crowdy-mobile-web">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crowdy" element={<Crowdy />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/twosomeSeohyeonRodeo" element={<StoreDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
