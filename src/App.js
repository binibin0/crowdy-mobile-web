import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import StoreDetail from "./Pages/StoreDetail";

function App() {
  return (
    <Router basename="/crowdy-mobile-web">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/twosomeSeohyeonRodeo" element={<StoreDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
