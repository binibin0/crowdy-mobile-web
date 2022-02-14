import React, { useState } from "react";
import { storeDatas } from "../datas/storeDatas";
import "./Tabs.css";
import tableIcon from "../images/table-icon.svg";
import chairIcon from "../images/chair-icon.svg";

function Tabs() {
  const [activeTab, setActiveTab] = useState("menu");

  return (
    <>
      <div className="tab-buttons">
        <div className={activeTab === "menu" ? "tab-button tab-button-active" : "tab-button"} onClick={() => setActiveTab("menu")}>
          <span className={activeTab === "menu" ? "tab-button-text tab-button-text-active" : "tab-button-text"}>메뉴</span>
        </div>
        <div className={activeTab === "store" ? "tab-button tab-button-active" : "tab-button"} onClick={() => setActiveTab("store")}>
          <span className={activeTab === "store" ? "tab-button-text tab-button-text-active" : "tab-button-text"}>매장 정보</span>
        </div>
        <div className={activeTab === "review" ? "tab-button tab-button-active" : "tab-button"} onClick={() => setActiveTab("review")}>
          <span className={activeTab === "review" ? "tab-button-text tab-button-text-active" : "tab-button-text"}>후기(35)</span>
        </div>
      </div>
      <div className={activeTab === "menu" ? "menu-tab" : "menu-tab tab-info-deactive"}>
        <div className="menu-title-box">
          <span className="menu-title">음료 4</span>
        </div>
        {storeDatas.twosomeSeohyeonRodeo.menu.drinks.map((item, key) => (
          <div key={key} className="menu-map">
            <span className="menu-name">{item.drink}</span>
            <span className="menu-price">{item.price}</span>
          </div>
        ))}

        <div className="menu-title-box title-add-margin-top">
          <span className="menu-title">베이커리 3</span>
        </div>
        {storeDatas.twosomeSeohyeonRodeo.menu.bakery.map((item, key) => (
          <div key={key} className="menu-map">
            <span className="menu-name">{item.drink}</span>
            <span className="menu-price">{item.price}</span>
          </div>
        ))}
      </div>

      <div className={activeTab === "store" ? "store-tab" : "store-tab tab-info-deactive"}>
        <div className="store-title-box">
          <span className="store-title">자리배치도</span>
        </div>
        <div className="store-seat-image-box">
          <div className="store-seat-image"></div>
        </div>
        <div className="store-title-box title-add-margin-top">
          <span className="store-title">좌석 및 테이블 정보</span>
        </div>
        <div className="store-furniture">
          <div className="store-table">
            <img width="32px" src={tableIcon} alt="table-icon"></img>
            <span className="store-table-text">x {storeDatas.twosomeSeohyeonRodeo.tableNumber}</span>
          </div>
          <div className="store-chair">
            <img width="32px" src={chairIcon} alt="chair-icon"></img>
            <span className="store-chair-text">x {storeDatas.twosomeSeohyeonRodeo.chairNumber}</span>
          </div>
        </div>
        <div className="store-images-box">
          <div className="store-images">
            {storeDatas.twosomeSeohyeonRodeo.images.map((image, key) => {
              return <img key={key} className="store-image" src={image} alt="seat-table"></img>;
            })}
          </div>
        </div>
      </div>
      <div className={activeTab === "review" ? "review-tab" : "review-tab tab-info-deactive"}>
        <div className="review-box">
          <span className="review-text">현재는 후기 서비스를 지원하지 않고 있습니다</span>
        </div>
      </div>
    </>
  );
}

export default Tabs;
