import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./StoreDetail.css";
import tableIcon from "../images/table-icon.svg";
import chairIcon from "../images/chair-icon.svg";
import phoneIcon from "../images/phone-icon.svg";
import addressIcon from "../images/address-icon.svg";
import hoursIcon from "../images/hours-icon.svg";
import hoursChevronIcon from "../images/hours-chevron-icon.svg";
import moreImageChevronIcon from "../images/see-more-image-chevron-icon.svg";
import goBackChevronIcon from "../images/go-back-chevron-icon.svg";
import Tabs from "./Tabs";
import { storeDatas } from "../datas/storeDatas";

const StoreDetail = () => {
  const navigate = useNavigate();
  //map에서 "매장 상세"로 이동시 링크에 해당 매장에 대한 정보가 param으로 추가가 된다. ex. crowdy.space/twosome-seohyeon-rodeo
  //도메인 param에 저장된 매장 이름과 일치하는 정보를 storeDatas에서 불러와 페이지 render.
  const [currentDay, setCurrentDay] = useState("mon");
  const [currentTime, setCurrentTime] = useState("900");

  const getCurrentTime = () => {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const today = new Date();
    const getTime = today.getHours().toString() + today.getMinutes().toString();
    const getDay = days[today.getDay()];

    setCurrentTime(parseInt(getTime));
    setCurrentDay(getDay);
  };
  useEffect(() => {
    getCurrentTime();
  }, []);

  return (
    <>
      <div className="page">
        <div className="detail-container">
          <div className="detail-header">
            <img className="detail-header-logo" src={storeDatas.twosomeSeohyeonRodeo.logo} alt="Logo" />
            <div className="detail-header-center">
              <span className="detail-header-title">{storeDatas.twosomeSeohyeonRodeo.name}</span>
              <span className="detail-header-review">
                <AiFillStar size={16} color="#00705B" />
                <AiFillStar size={16} color="#00705B" />
                <AiFillStar size={16} color="#00705B" />
                <AiFillStar size={16} color="#00705B" />
                <span>(35)</span>
              </span>
            </div>
            <div className="detail-header-space" />
            <div className="detail-header-crowdy-box">
              <span className="detail-header-crowdy-status">여유로움</span>
            </div>
          </div>
          <div className="detail-sub-header">
            <div className="detail-sub-header-first">
              <div className="detail-sub-header-phone">
                <img width="20px" src={phoneIcon} alt="phone-icon"></img>
                <span className="detail-sub-header-phone-number detail-default-text">{storeDatas.twosomeSeohyeonRodeo.phone}</span>
              </div>
              <div className="detail-sub-header-furniture">
                <div className="detail-sub-header-table">
                  <img width="20px" src={tableIcon} alt="table-icon"></img>
                  <span className="detail-default-text">x {storeDatas.twosomeSeohyeonRodeo.tableNumber}</span>
                </div>
                <div className="detail-sub-header-chair">
                  <img width="20px" src={chairIcon} alt="chair-icon"></img>
                  <span className="detail-default-text">x {storeDatas.twosomeSeohyeonRodeo.chairNumber}</span>
                </div>
              </div>
            </div>
            <div className="detail-sub-header-second">
              <div className="detail-sub-header-address">
                <img width="20px" src={addressIcon} alt="address-icon"></img>
                <span className="detail-sub-header-address-text detail-default-text">{storeDatas.twosomeSeohyeonRodeo.address}</span>
              </div>
              <div className="detail-sub-header-hours">
                <img width="20px" src={hoursIcon} alt="hours-icon"></img>
                <span className="detail-sub-header-open-hours detail-default-text">
                  {currentTime >= storeDatas.twosomeSeohyeonRodeo.openHours[currentDay][0] &&
                  currentTime <= storeDatas.twosomeSeohyeonRodeo.openHours[currentDay][1]
                    ? "영업중"
                    : "문닫음"}
                </span>
                <img width="10px" src={hoursChevronIcon} alt="hours-chevron-icon"></img>
              </div>
            </div>
          </div>
          <div className="detail-images-box">
            <div className="detail-images">
              {storeDatas.twosomeSeohyeonRodeo.images.map((image, key) => {
                return <img key={key} className="detail-image" src={image} alt="seat-table"></img>;
              })}
            </div>
          </div>
          <div className="detail-see-more-image">
            <span className="detail-see-more-image-text detail-default-text">사진 더보기</span>
            <img width="6px" src={moreImageChevronIcon} alt="phone-icon"></img>
          </div>

          <div className="back-button">
            <img width="22px" src={goBackChevronIcon} alt="go-back-icon" className="back-button-icon" onClick={() => navigate("/")}></img>
          </div>
        </div>
        <Tabs />
      </div>
    </>
  );
};

export default StoreDetail;
