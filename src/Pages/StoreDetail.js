import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./style.css";
import tableIcon from "../images/table.svg";
import chairIcon from "../images/chair.svg";
import phoneIcon from "../images/phone.svg";
import addressIcon from "../images/address.svg";
import moreImageChevronIcon from "../images/see-more-image-chevron.svg";
import goBackChevronIcon from "../images/go-back-chevron.svg";
import Tabs from "./Tabs";
import { storeDatas } from "../datas/storeDatas";

const StoreDetail = () => {
  const navigate = useNavigate();
  //map에서 "매장 상세"로 이동시 링크에 해당 매장에 대한 정보가 param으로 추가가 된다. ex. crowdy.space/twosome-seohyeon-rodeo
  //도메인 param에 저장된 매장 이름과 일치하는 정보를 storeDatas에서 불러와 페이지 render.
  const [currentDay, setCurrentDay] = useState("mon");
  const [currentTime, setCurrentTime] = useState("900");
  const [storeOpen, setStoreOpen] = useState(null);

  const getCurrentTime = () => {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const today = new Date();
    let minutes = null;
    if (today.getMinutes() < 10) {
      minutes = "0" + today.getMinutes().toString();
    } else {
      minutes = today.getMinutes();
    }
    const getTime = today.getHours().toString() + minutes;
    const getDay = days[today.getDay()];
    setCurrentTime(parseInt(getTime));
    setCurrentDay(getDay);
  };
  useEffect(() => {
    getCurrentTime();
    if (currentTime >= storeDatas.twosomeSeohyeonRodeo.openHours[currentDay][0] && currentTime <= storeDatas.twosomeSeohyeonRodeo.openHours[currentDay][1]) {
      setStoreOpen(true);
    } else {
      setStoreOpen(false);
    }
  }, [currentDay, currentTime]);
  console.log(storeOpen);
  return (
    <>
      <div className="page">
        <div className="detail-container">
          <div className="detail-header">
            <div className="back-button">
              <img width="18px" src={goBackChevronIcon} alt="go-back-icon" className="back-button-icon" onClick={() => navigate("/")}></img>
            </div>
            <img className="detail-header-logo" src={storeDatas.twosomeSeohyeonRodeo.logo} alt="Logo" />
            <div className="detail-header-center">
              <span className="detail-header-title">{storeDatas.twosomeSeohyeonRodeo.name}</span>
              <span className="detail-header-review">
                <AiFillStar size={16} color="#00705B" />
                <AiFillStar size={16} color="#00705B" />
                <AiFillStar size={16} color="#00705B" />
                <AiFillStar size={16} color="#00705B" />
                <span className="detail-header-review-text">(35)</span>
              </span>
            </div>
            <div className="detail-header-space" />
            <div className={storeOpen ? "detail-header-crowdy-box-default crowdy-box-active" : "detail-header-crowdy-box-default "}>
              <span className="detail-header-crowdy-status">{storeOpen ? "여유로움" : "CLOSED"}</span>
            </div>
          </div>
          <div className="detail-sub-header">
            <div className="detail-sub-header-first">
              <div className="detail-sub-header-phone">
                <img width="20px" src={phoneIcon} alt="phone-icon"></img>
                <span className="detail-sub-header-phone-number detail-default-text">{storeDatas.twosomeSeohyeonRodeo.phone}</span>
                {storeOpen ? <span className="detail-sub-header-open">OPEN</span> : null}
              </div>
            </div>
            <div className="detail-sub-header-second">
              <div className="detail-sub-header-address">
                <img width="20px" src={addressIcon} alt="address-icon"></img>
                <span className="detail-sub-header-address-text detail-default-text">{storeDatas.twosomeSeohyeonRodeo.address}</span>
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
        </div>
        <Tabs />
      </div>
    </>
  );
};

export default StoreDetail;
