import React, { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import "./style.css";
import mapIcon from "../images/map.png";
import markerIcon from "../images/marker.png";
import phoneIcon from "../images/phone.png";

import { BsClock, BsEmojiSmileUpsideDownFill } from "react-icons/bs";
import Tabs from "./Tabs";
import { storeDatas } from "../datas/storeDatas";
import Header from "./Header";
import ImageModal from "./ImageModal";
import CrowdyContext from "./CrowdyContext";
import DrawerP from "./Drawer";
import DropDownMenu from "./Dropdown";
import crowdyStorePin from "../images/crowdy/crowdy-store-pin.png";
import greyCircle from "../images/grey-circle.png";
import surveyWhiteIcon from "../images/survey-white.png";
import goBackChevron from "../images/go-back-chevron.svg";

const Home = () => {
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
    handleCrowdedness,
    handleCrowdednessColor,
    storeOnActive,
    setStoreOnActive,
  } = useContext(CrowdyContext);
  const navigate = useNavigate();
  const { path } = useParams();

  return (
    <div className="page">
      <DrawerP />
      <Header path={path} />

      <div className="home-location-container">
        <div style={{ height: "10px" }} />
        <div className="home-location-box">
          <div
            className="home-location-item"
            onClick={() => {
              navigate("/store-list");
              window.scroll(0, 0);
            }}
          >
            <img src={crowdyStorePin} alt="pin" width="18px" />
            <span className="home-location-item-text">?????????</span>
          </div>
          {/* {[1, 2].map((key) => (
            <div key={key} className="home-location-item home-location-item-disabled">
              <img src={greyCircle} alt="pin" width="4px" />
            </div>
          ))} */}
        </div>
      </div>
      <div style={{ height: "50px" }} />
      <div className="home-crowdedness-explain-container">
        <span className="home-crowdedness-explain-title">???????????? ????????????????</span>
        <span className="home-crowdedness-explain-text">?????? ????????? ????????? ?????? ???????????? ????????? ???????????? Crowdy?????? ???????????????.</span>
        <span className="home-crowdedness-explain-medium">??? 4????????? ????????????</span>
        <div className="home-crowdedness-explain-level">
          <span className="home-crowdedness-explain-empty">"????????????"</span>
          <span className="home-crowdedness-explain-colon">:</span>
          <span className="home-crowdedness-explain-normal">"??????"</span>
          <span className="home-crowdedness-explain-colon">:</span>
          <span className="home-crowdedness-explain-popular">"??????"</span>
          <span className="home-crowdedness-explain-colon">:</span>
          <span className="home-crowdedness-explain-crowdy">"Crowdy!"</span>
        </div>
        <span className="home-crowdedness-explain-text-small">
          *????????? ????????? ????????? ??????????????? ????????? ???????????? ??? <br />
          ????????? ????????? ???????????? ??????????????? ??? ???????????? <br />
          ??????????????? ?????? ???????????????.
        </span>
      </div>
      <div className="home-active-store-container">
        <span className="home-active-store-title">?????? ????????? ?????? ?????? ??????</span>
        <div className="store-list-store-box">
          {Object.keys(storeDatas).map((store, key) => {
            if (storeDatas[store].active) {
              handleCrowdedness(store);
              return (
                <div
                  key={key}
                  className="store-list-store-item"
                  style={key === 0 ? { marginTop: "22px", borderRadius: "18px" } : null}
                  onClick={() => {
                    navigate(`/${store}`);
                    window.scroll(0, 0);
                  }}
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
                          <span className="store-header-crowdy-open crowdy-text-active ">?????????</span>
                        ) : (
                          <span className="store-header-crowdy-close ">????????????</span>
                        )}
                      </div>
                      <div className="store-header-crowdy-status-live">
                        {storeDatas[store].active ? (
                          storeOnActive ? (
                            <span className={`store-header-crowdy-status-live-text ${handleCrowdednessColor()}`}>??????: {crowdedness}</span>
                          ) : (
                            <span className={"store-header-crowdy-status-live-text"}>??????: ??????</span>
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
      <div style={{ height: "40px" }} />
      <div
        className="home-survey-container"
        onClick={() => {
          navigate("/survey");
          window.scroll(0, 0);
        }}
      >
        <img className="home-survey-icon" src={surveyWhiteIcon} alt="survey" width="44px" />
        <span className="home-survey-title">???????????? & ????????? (???????????? ??????!)</span>
        <span className="home-survey-text">
          ????????? ???????????? ???????????? <br />
          ???????????? ???????????? ?????? ??????!
        </span>
      </div>
      <div style={{ height: "40px" }} />
      <div
        className="home-crowdy-intro-container"
        onClick={() => {
          navigate("/crowdy");
          window.scroll(0, 0);
        }}
      >
        <div className="home-crowdy-intro-see-more-container">
          <span className="home-crowdy-intro-see-more-text">????????? ??????</span>
          <img className="home-crowdy-intro-see-more-icon" src={goBackChevron} alt="go-back" width="4px" />
        </div>
        <span className="home-crowdy-intro-title">
          Crowdy <span className="home-crowdy-intro-question">?</span>
        </span>
        <span className="home-crowdy-intro-text">
          Crowdy??? ????????? ???????????? ????????? ?????? ????????? <br />
          ????????? ????????? ????????? ??? ?????? ?????? ?????? ??????????????????.
        </span>
      </div>
      <div style={{ height: "40px" }} />
    </div>
  );
};

export default Home;
