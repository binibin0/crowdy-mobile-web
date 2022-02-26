import React, { useState, useContext } from "react";
import { storeDatas } from "../datas/storeDatas";
import "./style.css";
import ImageModal from "./ImageModal";
import CrowdyContext from "./CrowdyContext";

import tableIcon from "../images/table.png";
import chairIcon from "../images/chair.png";

function Tabs({ path, scrollPosition, setScrollPosition }) {
  const [activeTab, setActiveTab] = useState("menu");

  const checkNeedAnchor = (activeTab) => {
    if (activeTab === "review") {
      return false;
    } else {
      return true;
    }
  };

  const goToAnchor = (key) => {
    if (key === 0) {
      window.scroll(0, 742);
    }
    if (key === 1) {
      let checkItemWithoutImage = 0;

      if (activeTab === "menu") {
        storeDatas[path].menu.drinks.map((item, key) => {
          if (item.image === "") {
            checkItemWithoutImage += 1;
          }
        });
        const checkItemWithImage = storeDatas[path].menu.drinks.length - checkItemWithoutImage;
        const widthImage = storeDatas[path].menu.drinks;
        const scrollY = 742 + 80 + 111 * checkItemWithImage + 79.84 * checkItemWithoutImage;
        console.log("with Image", checkItemWithImage);
        console.log("without Image", checkItemWithoutImage);
        window.scroll(0, scrollY);
      }
      if (activeTab === "store") {
        const widthImage = storeDatas[path].storeViews;
        const scrollY = 742 + 80 + 40 + 10 + 194 * widthImage.length - 1.2;
        window.scroll(0, scrollY);
      }
    }
  };

  const activeTabForAnchor = (activeTab) => {
    if (activeTab === "menu") {
      return ["음료", "베이커리"];
    }
    if (activeTab === "store") {
      return ["매장 내부", "상세한 좌석 정보"];
    }
  };

  const { openImageModal, setOpenImageModal, currentImageForModal, setCurrentImageForModal } = useContext(CrowdyContext);
  return (
    <>
      {openImageModal ? <ImageModal /> : null}
      <div className="tab-container">
        {checkNeedAnchor(activeTab) && scrollPosition > 742 ? <div className="empty-tab-buttons"></div> : null}
        <div className={checkNeedAnchor(activeTab) && scrollPosition > 742 ? "fixed-active" : null}>
          <div className="tab-buttons">
            <div
              className={activeTab === "menu" ? "tab-button tab-button-active" : "tab-button"}
              onClick={() => {
                goToAnchor(0);
                setActiveTab("menu");
              }}
            >
              <span className={activeTab === "menu" ? "tab-button-text tab-button-text-active" : "tab-button-text"}>메뉴</span>
            </div>
            <div
              className={activeTab === "store" ? "tab-button tab-button-active" : "tab-button"}
              onClick={() => {
                goToAnchor(0);
                setActiveTab("store");
              }}
            >
              <span className={activeTab === "store" ? "tab-button-text tab-button-text-active" : "tab-button-text"}>매장 및 좌석 정보</span>
            </div>
            <div
              className={activeTab === "review" ? "tab-button tab-button-active" : "tab-button"}
              onClick={() => {
                goToAnchor(0);
                setActiveTab("review");
              }}
            >
              <span className={activeTab === "review" ? "tab-button-text tab-button-text-active" : "tab-button-text"}>후기(0)</span>
            </div>
          </div>
          <div className={activeTab === "review" ? "deactivated" : "tab-content-anchor"}>
            <div className="tab-content-anchor-container">
              {checkNeedAnchor(activeTab)
                ? activeTabForAnchor(activeTab).map((item, key) => (
                    <div key={key} className="tab-content-anchor-box" onClick={() => goToAnchor(key)}>
                      <span className="tab-content-anchor-text">{item}</span>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>

        <div className={activeTab === "menu" ? "menu-tab" : "menu-tab deactivated"}>
          <div className="tab-content-title-box ">
            <span className="tab-title">음료 {storeDatas[path].menu.drinks.length}</span>
            {storeDatas[path].menu.drinkSize === "" ? null : <span className="menu-size">사이즈 규격: {storeDatas[path].menu.drinkSize}</span>}
          </div>
          {storeDatas[path].menu.drinks.map((item, key) => (
            <div key={key} className="menu-map">
              {item.drink.length > 10 ? (
                <span className="menu-name menu-two-line-name">
                  {item.drink.substring(0, 8)}
                  <br />
                  {item.drink.substring(8)}
                </span>
              ) : (
                <span className="menu-name">{item.drink}</span>
              )}
              <span className="menu-price">{item.price}</span>
              {item.image === "" ? null : (
                <>
                  <div style={{ flex: 1 }} />
                  <img
                    src={item.image}
                    className="menu-image"
                    onClick={(event) => {
                      setOpenImageModal(true);
                      setCurrentImageForModal(event.target.src);
                    }}
                  />
                </>
              )}
            </div>
          ))}
          <div className="tab-content-title-box" style={{ borderTop: "none" }}>
            <span className="tab-title">베이커리 {storeDatas[path].menu.bakerys.length}</span>
          </div>
          {storeDatas[path].menu.bakerys.map((item, key) => (
            <div key={key} className="menu-map">
              {item.bakery.length > 10 ? (
                <span className="menu-name menu-two-line-name">
                  {item.bakery.substring(0, 8)}
                  <br />
                  {item.bakery.substring(8)}
                </span>
              ) : (
                <span className="menu-name">{item.bakery}</span>
              )}

              <span className="menu-price">{item.price}</span>
              {item.image === "" ? null : (
                <>
                  <div style={{ flex: 1 }} />
                  <img
                    src={item.image}
                    className="menu-image"
                    onClick={(event) => {
                      setOpenImageModal(true);
                      setCurrentImageForModal(event.target.src);
                    }}
                  />
                </>
              )}
            </div>
          ))}
        </div>

        <div className={activeTab === "store" ? "store-tab" : "store-tab deactivated"}>
          <div className="tab-content-title-box">
            <span className="tab-title">매장 내부</span>
          </div>
          <div className="store-view-image-box">
            {storeDatas[path].storeViews.map((item, key) => (
              <img
                key={key}
                src={item}
                alt="store-view"
                className="store-view-image"
                onClick={(event) => {
                  setOpenImageModal(true);
                  setCurrentImageForModal(event.target.src);
                }}
              />
            ))}
          </div>
          <div className="tab-content-title-box">
            <span className="tab-title">상세한 좌석 정보</span>
            <div className="store-furniture">
              <div className="store-table">
                <img width="32px" src={tableIcon} alt="table-icon"></img>
                <span className="store-furniture-text">x {storeDatas[path].tableNumber}</span>
              </div>
              <div className="store-chair">
                <img width="26px" src={chairIcon} alt="chair-icon"></img>
                <span className="store-furniture-text">x {storeDatas[path].chairNumber}</span>
              </div>
            </div>
          </div>

          <div className="store-seat-images-box">
            <div className="store-seat-images">
              {storeDatas[path].seatInfos.map((seatInfo, key) => {
                return (
                  <div key={key} className="store-seat-image-box">
                    <img
                      className="store-seat-image"
                      src={seatInfo.image}
                      alt="seat-table"
                      onClick={(event) => {
                        setOpenImageModal(true);
                        setCurrentImageForModal(event.target.src);
                      }}
                    />
                    <span className="store-seat-image-text">x {seatInfo.count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={activeTab === "review" ? "review-tab" : "review-tab deactivated"}>
          <div className="review-box">
            <span className="review-text" style={{ marginBottom: "40px" }}>
              현재 후기 서비스를 지원하지 않고 있습니다.
            </span>
            <a className="review-text clicked-tag" style={{ textDecoration: "none", borderBottom: "0.2px solid #00705b" }} href={storeDatas[path].naverLink}>
              네이버 블로그에 검색하기
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;
