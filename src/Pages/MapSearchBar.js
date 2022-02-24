import React from "react";
import { useNavigate } from "react-router-dom";
import goBackChevron from "../images/go-back-chevron.svg";

const MapSearchBar = () => {
  const navigate = useNavigate();
  return (
    <div className="map-search-bar-container">
      <img src={goBackChevron} style={{ marginLeft: "20px" }} width="10px" onClick={() => navigate(-1)} />
      <span className="map-search-bar-text">성남시 분당구 서현동</span>
    </div>
  );
};

export default MapSearchBar;
