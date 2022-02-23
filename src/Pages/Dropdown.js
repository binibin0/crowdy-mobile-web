import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./style.css";
import goBackChevron from "../images/go-back-chevron.svg";
import CrowdyContext from "./CrowdyContext";

const DropDownMenu = () => {
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
    currentFilter,
    setCurrentFilter,
  } = useContext(CrowdyContext);

  const menu = (
    <Menu>
      {["전체", "프랜차이즈", "동네카페"].map((category, key) =>
        category !== currentFilter ? (
          <Menu.Item style={{ textAlign: "center" }} key={key} onClick={() => setCurrentFilter(category)}>
            {category}
          </Menu.Item>
        ) : null
      )}
    </Menu>
  );
  return (
    <Space wrap>
      <Dropdown className="store-list-header-filter-box" overlay={menu} placement={"bottomCenter"} trigger={["click"]}>
        <div onClick={(e) => e.preventDefault()}>
          {currentFilter}
          <img width="8px" src={goBackChevron} alt="marker-icon" style={{ marginLeft: "8px", transform: "rotate(270deg)" }}></img>
        </div>
      </Dropdown>
    </Space>
  );
};
export default DropDownMenu;
