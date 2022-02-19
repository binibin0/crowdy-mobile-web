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
  //map에서 "매장 상세"로 이동시 링크에 해당 매장에 대한 정보가 param으로 추가가 된다. ex. crowdy.space/twosome-seohyeon-rodeo
  //도메인 param에 저장된 매장 이름과 일치하는 정보를 storeDatas에서 불러와 페이지 render.
  const [currentDay, setCurrentDay] = useState("mon");
  const [currentDayKorean, setCurrentDayKorean] = useState("월");
  const [currentTime, setCurrentTime] = useState("900");
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

  const getCurrentTime = () => {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const koreanDays = ["일", "월", "화", "수", "목", "금", "토"];
    const today = new Date();
    let minutes = null;
    if (today.getMinutes() < 10) {
      minutes = "0" + today.getMinutes().toString();
    } else {
      minutes = today.getMinutes();
    }
    const getTime = today.getHours().toString() + minutes;
    const getDay = days[today.getDay()];
    const getDayKorea = koreanDays[today.getDay()];
    setCurrentTime(parseInt(getTime));
    setCurrentDay(getDay);
    setCurrentDayKorean(getDayKorea);
  };

  useEffect(() => {
    getCurrentTime();
    if (currentTime >= storeDatas[path].openHours[currentDay][0] && currentTime <= storeDatas[path].openHours[currentDay][1]) {
      setStoreOpen(true);
    } else {
      setStoreOpen(false);
    }
  }, [currentDay, currentTime]);

  const { openImageModal, setOpenImageModal, currentImageForModal, setCurrentImageForModal } = useContext(CrowdyContext);

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
          <div className="detail-header">
            <div style={{ display: "flex" }}>
              <img className="detail-header-logo" src={storeDatas[path].logo} alt="Logo" />
              <div className="detail-header-center">
                <span className="detail-header-hashtag ">#{storeDatas[path].hashtag[1]}</span>
                <span className="detail-header-title ">{storeDatas[path].name}</span>
                <span className="detail-header-review">
                  <AiOutlineStar size={16} />
                  <AiOutlineStar size={16} />
                  <AiOutlineStar size={16} />
                  <AiOutlineStar size={16} />
                  <AiOutlineStar size={16} />
                  <span className="detail-header-review-text">(0)</span>
                </span>
              </div>
            </div>
            <div className="detail-header-crowdy-container">
              <div className={storeOpen ? "detail-header-crowdy-box-default crowdy-box-active" : "detail-header-crowdy-box-default "}>
                {storeOpen ? (
                  <span className="detail-header-crowdy-open crowdy-text-active font-bold">영업중</span>
                ) : (
                  <span className="detail-header-crowdy-close font-bold">영업종료</span>
                )}
              </div>
              <div className="detail-header-crowdy-status-live">
                <span className="detail-header-crowdy-status-live-text">상태: 없음</span>
              </div>
            </div>
          </div>
          <div className="detail-sub-header">
            <div className="detail-sub-header-first">
              <div className="detail-sub-header-phone">
                <img width="14px" src={markerIcon} alt="marker-icon"></img>
                <span className="detail-sub-header-margin-left detail-default-text">{storeDatas[path].branch}</span>
              </div>
              <div className="detail-sub-header-phone">
                <img width="14px" src={phoneIcon} alt="phone-icon"></img>
                <span className="detail-sub-header-margin-left detail-default-text">{storeDatas[path].phone}</span>
              </div>
            </div>
            <div className="detail-sub-header-second">
              <div className="detail-sub-header-address">
                <img width="14px" src={addressIcon} alt="address-icon"></img>
                <span className="detail-sub-header-margin-left detail-default-text">{storeDatas[path].address}</span>
              </div>
              <div className="detail-sub-header-open">
                <BsClock size="14" style={{ marginTop: "2px" }} />
                <div className=" detail-sub-header-open-text-box">
                  {currentDayKorean} <span className="detail-sub-header-open-text">9AM ~ 9PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-images-box">
            <div className="detail-images">
              {storeDatas[path].mainImages.map((image, key) => {
                return (
                  <img
                    key={key}
                    className="detail-image"
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
            <span className="detail-see-more-image-text font-semibold detail-default-text" onClick={() => navigate("/" + path + "/see-more-image")}>
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
