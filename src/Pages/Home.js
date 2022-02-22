import React, { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import "./style.css";
import mapIcon from "../images/map.png";
import markerIcon from "../images/marker.png";
import phoneIcon from "../images/phone.png";
import addressIcon from "../images/address.png";
import goBackChevron from "../images/go-back-chevron.svg";
import { BsClock, BsEmojiSmileUpsideDownFill } from "react-icons/bs";
import Tabs from "./Tabs";
import { storeDatas } from "../datas/storeDatas";
import Header from "./Header";
import ImageModal from "./ImageModal";
import CrowdyContext from "./CrowdyContext";

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
  } = useContext(CrowdyContext);

  const navigate = useNavigate();
  const { path } = useParams();

  const [storeOpen, setStoreOpen] = useState(null);
  const [activeStoreCount, setActiveStoreCount] = useState(0);

  const checkStoreOpen = (store) => {
    if (currentTime >= storeDatas[store].openHours[currentDay][0] && currentTime <= storeDatas[store].openHours[currentDay][1]) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    Object.keys(storeDatas).map((store) => {
      console.log(storeDatas[store].active);
      if (storeDatas[store].active) {
        return setActiveStoreCount((current) => (current += 1));
      } else {
        return null;
      }
    });
  }, []);
  console.log(activeStoreCount);
  return (
    <>
      <div className="page">
        <Header path={path} />
        <div className="home-container">
          <div className="home-header-container">
            <div className="home-header-map-box" onClick={() => navigate("/map")}>
              <img width="16px" src={mapIcon} alt="marker-icon"></img>
              <span className="home-header-map-text">지도에서 매장 보기</span>
            </div>
            <div className="home-header-filter-box">
              <span>전체</span>
              <img width="8px" src={goBackChevron} alt="marker-icon" style={{ marginLeft: "8px", transform: "rotate(270deg)" }}></img>
            </div>
          </div>
          <div className="home-store-container">
            <span className="home-store-title">혼잡도 제공 매장</span>
            <div className="home-store-box">
              {Object.keys(storeDatas).map((store, key) => {
                if (storeDatas[store].active) {
                  return (
                    <div key={key} className="home-store-item" style={key === 0 ? { marginTop: "22px" } : null} onClick={() => navigate(`${store}`)}>
                      <div className="store-header">
                        <div style={{ display: "flex" }}>
                          <img className="store-header-logo" src={storeDatas[store].logo} alt="Logo" />
                          <div className="store-header-center">
                            <span className="store-header-hashtag ">#{storeDatas[store].hashtag[1]}</span>
                            <span className="store-header-title ">{storeDatas[store].name}</span>
                            <span className="store-header-review">
                              <AiOutlineStar size={16} />
                              <AiOutlineStar size={16} />
                              <AiOutlineStar size={16} />
                              <AiOutlineStar size={16} />
                              <AiOutlineStar size={16} />
                              <span className="store-header-review-text">(0)</span>
                            </span>
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
          <div style={{ marginTop: "32px" }} />
          <div className="home-store-container">
            <span className="home-store-title">일반 매장</span>
            <div className="home-store-box">
              {Object.keys(storeDatas).map((store, key) => {
                if (!storeDatas[store].active) {
                  return (
                    <div
                      key={key}
                      className="home-store-item"
                      style={key === activeStoreCount ? { marginTop: "22px" } : null}
                      onClick={() => navigate(`${store}`)}
                    >
                      <div className="store-header">
                        <div style={{ display: "flex" }}>
                          <img className="store-header-logo" src={storeDatas[store].logo} alt="Logo" />
                          <div className="store-header-center">
                            <span className="store-header-hashtag ">#{storeDatas[store].hashtag[1]}</span>
                            <span className="store-header-title ">{storeDatas[store].name}</span>
                            <span className="store-header-review">
                              <AiOutlineStar size={16} />
                              <AiOutlineStar size={16} />
                              <AiOutlineStar size={16} />
                              <AiOutlineStar size={16} />
                              <AiOutlineStar size={16} />
                              <span className="store-header-review-text">(0)</span>
                            </span>
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
          <div style={{ height: "60px" }}></div>
        </div>
      </div>
    </>
  );
};

export default Home;
