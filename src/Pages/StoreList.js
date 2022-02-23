import React, { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import "./style.css";
import mapIcon from "../images/map.png";
import markerIcon from "../images/marker.png";
import phoneIcon from "../images/phone.png";
import addressIcon from "../images/address.png";

import { BsClock, BsEmojiSmileUpsideDownFill } from "react-icons/bs";
import Tabs from "./Tabs";
import { storeDatas } from "../datas/storeDatas";
import Header from "./Header";
import ImageModal from "./ImageModal";
import CrowdyContext from "./CrowdyContext";
import DrawerP from "./Drawer";
import DropDownMenu from "./Dropdown";

const StoreList = () => {
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
    storeOpen,
    setStoreOpen,
    checkStoreOpen,
    handleCrowdednessColor,
    storeOnActive,
    setStoreOnActive,
  } = useContext(CrowdyContext);

  const navigate = useNavigate();
  const { path } = useParams();

  const [activeStoreCount, setActiveStoreCount] = useState(0);

  useEffect(() => {
    Object.keys(storeDatas).map((store) => {
      if (storeDatas[store].active) {
        return setActiveStoreCount((current) => (current += 1));
      } else {
        return null;
      }
    });
  }, []);

  const checkFilterForStore = (list) => {
    let check = false;
    list.map((hashtag) => {
      if (hashtag === currentFilter) {
        check = true;
      }
    });
    return check;
  };
  console.log(currentFilter);
  return (
    <>
      <div className="page">
        <DrawerP />
        <Header path={path} />
        <div className="store-list-container">
          <div className="store-list-header-container">
            <div className="store-list-header-map-box" onClick={() => navigate("/map")}>
              <img width="16px" src={mapIcon} alt="marker-icon"></img>
              <span className="store-list-header-map-text">지도에서 매장 보기</span>
            </div>
            <DropDownMenu />
          </div>
          {currentFilter === "프랜차이즈" ? null : (
            <div className="store-list-store-container">
              <span className="store-list-store-title">혼잡도 제공 매장</span>
              <div className="store-list-store-box">
                {Object.keys(storeDatas).map((store, key) => {
                  if (storeDatas[store].active && checkFilterForStore(storeDatas[store].hashtag)) {
                    return (
                      <div key={key} className="store-list-store-item" style={key === 0 ? { marginTop: "22px" } : null} onClick={() => navigate(`/${store}`)}>
                        <div className="store-header">
                          <div style={{ display: "flex" }}>
                            <img className="store-header-logo" src={storeDatas[store].logo} alt="Logo" />
                            <div className="store-header-center">
                              <span className="store-header-hashtag ">#{storeDatas[store].hashtag[1]}</span>
                              <span className="store-header-title ">{storeDatas[store].name}</span>
                              <span className="store-header-review-compact">{storeDatas[store].branch}</span>
                            </div>
                          </div>
                          <div className="store-header-crowdy-container">
                            <div className={checkStoreOpen(store) ? "store-header-crowdy-box-default crowdy-box-active" : "store-header-crowdy-box-default "}>
                              {checkStoreOpen(store) ? (
                                <span className="store-header-crowdy-open crowdy-text-active ">영업중</span>
                              ) : (
                                <span className="store-header-crowdy-close ">영업종료</span>
                              )}
                            </div>
                            <div className="store-header-crowdy-status-live">
                              {storeDatas[store].active ? (
                                storeOnActive ? (
                                  <span className={`store-header-crowdy-status-live-text ${handleCrowdednessColor()}`}>상태: {crowdedness}</span>
                                ) : (
                                  <span className={"store-header-crowdy-status-live-text"}>상태: 없음</span>
                                )
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          )}

          <div style={{ marginTop: "32px" }} />
          <div className="store-list-store-container">
            <span className="store-list-store-title">일반 매장</span>
            <div className="store-list-store-box">
              {Object.keys(storeDatas).map((store, key) => {
                if (!storeDatas[store].active && checkFilterForStore(storeDatas[store].hashtag)) {
                  return (
                    <div
                      key={key}
                      className="store-list-store-item"
                      style={key === activeStoreCount ? { marginTop: "22px" } : null}
                      onClick={() => navigate(`/${store}`)}
                    >
                      <div className="store-header">
                        <div style={{ display: "flex" }}>
                          <img className="store-header-logo" src={storeDatas[store].logo} alt="Logo" />
                          <div className="store-header-center">
                            <span className="store-header-hashtag ">#{storeDatas[store].hashtag[1]}</span>
                            <span className="store-header-title ">{storeDatas[store].name}</span>
                            <span className="store-header-review-compact">{storeDatas[store].branch}</span>
                          </div>
                        </div>
                        <div className="store-header-crowdy-container">
                          <div className={checkStoreOpen(store) ? "store-header-crowdy-box-default crowdy-box-active" : "store-header-crowdy-box-default "}>
                            {checkStoreOpen(store) ? (
                              <span className="store-header-crowdy-open crowdy-text-active ">영업중</span>
                            ) : (
                              <span className="store-header-crowdy-close ">영업종료</span>
                            )}
                          </div>
                          <div className="store-header-crowdy-status-live">
                            <span className="store-header-crowdy-status-live-text">상태: -</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
          <div style={{ height: "80px" }}></div>
        </div>
      </div>
    </>
  );
};

export default StoreList;
