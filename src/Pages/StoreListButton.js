import React from "react";
import { useNavigate } from "react-router-dom";
import storeListMenu from "../images/store-list-menu.svg";
import "./style.css";

const StoreListButton = () => {
  const navigate = useNavigate();
  return (
    <div className="store-list-button" onClick={() => navigate("/store-list")}>
      <img src={storeListMenu} style={{ width: "16px" }} />
      <span className="store-list-button-text">매장 보기</span>
    </div>
  );
};

export default StoreListButton;
