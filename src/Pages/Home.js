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
          <div className="home-location-item" onClick={() => navigate("/store-list")}>
            <img src={crowdyStorePin} alt="pin" width="18px" />
            <span className="home-location-item-text">서현역</span>
          </div>
          {[1, 2, 3, 4, 5].map((key) => (
            <div key={key} className="home-location-item home-location-item-disabled">
              <img src={greyCircle} alt="pin" width="4px" />
            </div>
          ))}
        </div>
      </div>
      <div className="home-active-store-container">
        <span className="home-active-store-title">현재 혼잡도 확인 가능 매장</span>
        <div className="store-list-store-box">
          {Object.keys(storeDatas).map((store, key) => {
            if (storeDatas[store].active) {
              return (
                <div
                  key={key}
                  className="store-list-store-item"
                  style={key === 0 ? { marginTop: "22px", borderRadius: "18px" } : null}
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
                        <span className="store-header-crowdy-status-live-text">상태: 없음</span>
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
      <div className="home-survey-container" onClick={() => navigate("/survey")}>
        <img className="home-survey-icon" src={surveyWhiteIcon} alt="survey" width="44px" />
        <span className="home-survey-title">설문조사 & 피드백 (기프티콘 추첨!)</span>
        <span className="home-survey-text">
          간단한 설문지를 작성하면 <br />
          스타벅스 기프티콘 자동 응모!
        </span>
      </div>
      <div style={{ height: "40px" }} />
      <div className="home-crowdy-intro-container" onClick={() => navigate("/crowdy")}>
        <div className="home-crowdy-intro-see-more-container">
          <span className="home-crowdy-intro-see-more-text">자세히 보기</span>
          <img className="home-crowdy-intro-see-more-icon" src={goBackChevron} alt="go-back" width="4px" />
        </div>
        <span className="home-crowdy-intro-title">
          Crowdy <span className="home-crowdy-intro-question">?</span>
        </span>
        <span className="home-crowdy-intro-text">
          Crowdy는 카페의 혼잡도를 비롯한 카페 매장의 <br />
          다양한 정보를 확인할 수 있는 카페 통합 플랫폼입니다.
        </span>
      </div>
      <div style={{ height: "40px" }} />
    </div>
  );
};

export default Home;
