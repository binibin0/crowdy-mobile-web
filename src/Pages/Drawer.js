import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, Button, Space } from "antd";
import "antd/dist/antd.css";
import CrowdyContext from "./CrowdyContext";
import "./style.css";
import goBackChevronIcon from "../images/go-back-chevron.svg";

const DrawerP = () => {
  const {
    currentTime,
    setCurrentTime,
    currentDay,
    setCurrentDay,
    currentDayKorean,
    setCurrentDayKorean,
    openImageModal,
    setOpenImageModal,
    currentImageForModal,
    setCurrentImageForModal,
    currentStore,
    setCurrentStore,
    crowdedness,
    setCrowdedness,
    crowdednessCount,
    setCrowdednessCount,
    refresh,
    setRefresh,
    drawereVisible,
    setDrawereVisible,
  } = useContext(CrowdyContext);
  const navigate = useNavigate();

  const showDrawer = () => {
    setDrawereVisible(true);
  };

  const closeDrawer = () => {
    setDrawereVisible(false);
  };

  return (
    <Drawer
      closeIcon={<img src={goBackChevronIcon} alt="close-drawer" width="18px" />}
      headerStyle={{ padding: "28px 30px 0 30px" }}
      bodyStyle={{ padding: "40px 0 0 0" }}
      placement={"left"}
      width={250}
      onClose={closeDrawer}
      visible={drawereVisible}
    >
      <div
        className="drawer-item-box"
        onClick={() => {
          setDrawereVisible(false);
          navigate("/crowdy");
        }}
      >
        <span className="drawer-item-text">
          크라우디<span className="drawer-item-text-expression"> ?</span>
        </span>
      </div>
      <div
        className="drawer-item-box"
        onClick={() => {
          setDrawereVisible(false);
          navigate("/survey");
        }}
      >
        <span className="drawer-item-text">설문조사</span>
        <br />
        <span className="drawer-item-text" style={{ fontSize: "12px" }}>
          (기프티콘 추첨!)
        </span>
      </div>
      <div
        style={{ position: "absolute", left: "30px", bottom: "20px", color: "grey" }}
        onClick={() => {
          setDrawereVisible(false);
          navigate("/admin-login");
        }}
      >
        관리자 페이지
      </div>
    </Drawer>
  );
};

export default DrawerP;
