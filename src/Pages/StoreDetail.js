import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import "./style.css";
import mapIcon from "../images/map.png";
import markerIcon from "../images/marker.png";
import phoneIcon from "../images/phone.png";
import addressIcon from "../images/address.png";
import moreImageChevronIcon from "../images/see-more-image-chevron.png";
import { BsClock } from "react-icons/bs";
import Tabs from "./Tabs";
import { storeDatas } from "../datas/storeDatas";
import Header from "./Header";
import ImageModal from "./ImageModal";
import CrowdyContext from "./CrowdyContext";

const StoreDetail = () => {
  const navigate = useNavigate();
  const { path } = useParams();

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

  const [storeOpen, setStoreOpen] = useState(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (currentTime >= storeDatas[path].openHours[currentDay][0] && currentTime <= storeDatas[path].openHours[currentDay][1]) {
      setStoreOpen(true);
    } else {
      setStoreOpen(false);
    }
  }, [currentDay, currentTime]);

  return (
    <>
      <div className="page">
        <Header path={path} />
        {openImageModal ? <ImageModal setOpenImageModal={setOpenImageModal} currentImage={currentImageForModal} /> : null}
        <div className="detail-container">
          <div className="detail-see-map">
            <img width="16px" src={mapIcon} alt="marker-icon"></img>
            <span className="detail-see-map-text">지도 보기</span>
          </div>
          <div className="store-header-container">
            <div className="store-header">
              <div style={{ display: "flex" }}>
                <img className="store-header-logo" src={storeDatas[path].logo} alt="Logo" />
                <div className="store-header-center">
                  <span className="store-header-hashtag ">#{storeDatas[path].hashtag[1]}</span>
                  <span className="store-header-title ">{storeDatas[path].name}</span>
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
                <div className={storeOpen ? "store-header-crowdy-box-default crowdy-box-active" : "store-header-crowdy-box-default "}>
                  {storeOpen ? (
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
          <div className="store-sub-header">
            <div className="store-sub-header-first">
              <div className="store-sub-header-phone">
                <img width="14px" src={markerIcon} alt="marker-icon"></img>
                <span className="store-sub-header-margin-left store-default-text">{storeDatas[path].branch}</span>
              </div>
              <div className="store-sub-header-phone">
                <img width="14px" src={phoneIcon} alt="phone-icon"></img>
                <span className="store-sub-header-margin-left store-default-text">{storeDatas[path].phone}</span>
              </div>
            </div>
            <div className="store-sub-header-second">
              <div className="store-sub-header-address">
                <img width="14px" src={addressIcon} alt="address-icon"></img>
                <span className="store-sub-header-margin-left store-default-text">{storeDatas[path].address}</span>
              </div>
              <div className="store-sub-header-open">
                <BsClock size="14" style={{ marginTop: "2px" }} />
                <div className=" store-sub-header-open-text-box">
                  {currentDayKorean} <span className="store-sub-header-open-text">9AM ~ 9PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="store-images-box">
            <div className="store-images">
              {storeDatas[path].mainImages.map((image, key) => {
                return (
                  <img
                    key={key}
                    className="store-image"
                    src={image}
                    alt="seat-table"
                    onClick={(event) => {
                      setOpenImageModal(true);
                      setCurrentImageForModal(event.target.src);
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="detail-see-more-image">
            <span className="detail-see-more-image-text detail-default-text" onClick={() => navigate("/" + path + "/see-more-image")}>
              사진 더보기
            </span>
            <img width="6px" src={moreImageChevronIcon} alt="phone-icon" className="detail-see-more-image-icon"></img>
          </div>
        </div>
        <Tabs path={path} scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} />
      </div>
    </>
  );
};

export default StoreDetail;
