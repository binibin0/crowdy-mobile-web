import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BottomSheet } from "react-spring-bottom-sheet";
import "./style.css";
import "react-spring-bottom-sheet/dist/style.css";
import myLocationIcon from "../images/my-location.png";
import StoreDetail, { StoreHeader, StoreSubHeader } from "./StoreDetail";
import CrowdyContext from "./CrowdyContext";
import { storeDatas } from "../datas/storeDatas";

const BSheet = ({ userLocationButton, BSheetRef }) => {
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
    setStoreOpen,
    checkStoreOpen,
  } = useContext(CrowdyContext);

  const navigate = useNavigate();

  return (
    <div>
      <BottomSheet
        className="bottom-sheet"
        open
        expandOnContentDrag={true}
        ref={BSheetRef}
        blocking={false}
        defaultSnap={({ snapPoints }) => Math.min(...snapPoints)}
        snapPoints={() => [480, 116]}
      >
        <div className="bottom-sheet-store-container">
          <div style={{ height: "10px" }} />
          <StoreHeader store={currentStore} />
          <div style={{ height: "14px" }} />
          <StoreSubHeader store={currentStore} />
          <div style={{ height: "14px" }} />
          <div className="bottom-sheet-store-images-box">
            <div className="bottom-sheet-store-images">
              {storeDatas[currentStore].mainImages.map((image, key) => {
                return <img key={key} className="bottom-sheet-store-image" src={image} alt="seat-table" />;
              })}
            </div>
          </div>
          <div style={{ height: "18px" }} />
          <div
            className="bottom-sheet-detail-button"
            onClick={() => {
              setCurrentStore(currentStore);
              navigate(`/${currentStore}`);
            }}
          >
            <span className="bottom-sheet-detail-button-text">더 알아보기</span>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
};
export default BSheet;
