import React from "react";
import squareMenu from "../images/square-menu.svg";

const MapSearchBar = () => {
  return (
    <div className="map-search-bar-container">
      <img src={squareMenu} style={{ marginLeft: "16px" }} />
      <span className="map-search-bar-text">성남시 분당구 서현동</span>
    </div>
  );
};

export default MapSearchBar;
