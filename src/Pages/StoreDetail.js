import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import "./style.css";
import mapIcon from "../images/map.png";
import markerIcon from "../images/marker.png";
import phoneIcon from "../images/phone.png";
import moreImageChevronIcon from "../images/see-more-image-chevron.png";
import { BsClock } from "react-icons/bs";
import Tabs from "./Tabs";
import { storeDatas } from "../datas/storeDatas";
import Header from "./Header";
import ImageModal from "./ImageModal";
import CrowdyContext from "./CrowdyContext";
import { Space } from "antd";
import { LoadingOutlined, ReloadOutlined } from "@ant-design/icons";
import StoreListButton from "./StoreListButton";

const StoreHeader = ({ store }) => {
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
    drawereVisible,
    setDrawereVisible,
    currentFilter,
    storeOnActive,
    setStoreOnActive,
    setCurrentFilter,
    checkStoreOpen,
    handleCrowdedness,
    handleCrowdednessColor,
    goToAnchor,
  } = useContext(CrowdyContext);

  const [crowdednessLoading, setCrowdednessLoading] = useState(false);
  const [openTimeLoading, setOpenTimeLoading] = useState(false);

  handleCrowdedness(store);

  return (
    <div className="store-header-container">
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
          <div
            className={checkStoreOpen(store) ? "store-header-crowdy-box-default crowdy-box-active" : "store-header-crowdy-box-default "}
            onClick={() => {
              setOpenTimeLoading(true);
              setTimeout(() => {
                setOpenTimeLoading(false);
              }, 1000);
            }}
          >
            {openTimeLoading ? (
              <Space>
                <LoadingOutlined style={{ fontSize: "12px" }} />
              </Space>
            ) : checkStoreOpen(store) ? (
              <span className="store-header-crowdy-open crowdy-text-active ">영업중</span>
            ) : (
              <span className="store-header-crowdy-close ">영업종료</span>
            )}
          </div>
          <div
            className="store-header-crowdy-status-live"
            onClick={() => {
              setCrowdednessLoading(true);
              setTimeout(() => {
                setCrowdednessLoading(false);
              }, 1000);
            }}
          >
            {storeDatas[store].active ? (
              storeOnActive ? (
                crowdednessLoading ? (
                  <Space>
                    <LoadingOutlined style={{ fontSize: "12px" }} />
                  </Space>
                ) : (
                  <>
                    <span className={`store-header-crowdy-status-live-text ${handleCrowdednessColor()}`}>상태: {crowdedness}</span>
                    <ReloadOutlined style={{ fontSize: "10px" }} />
                  </>
                )
              ) : (
                <span className={"store-header-crowdy-status-live-text"}>상태: 없음</span>
              )
            ) : (
              <span className={"store-header-crowdy-status-live-text"}>상태: 제공 예정</span>
            )}

            {/* {storeDatas[store].active ? <img width="14px" src={crowdednessReload} alt="marker-icon" /> : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};

const StoreSubHeader = ({ store }) => {
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
  } = useContext(CrowdyContext);
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  return (
    <div className="store-sub-header">
      <div className="grey-line" />
      <div className="store-sub-header-container">
        <div className="store-sub-header-item">
          <div style={{ width: "8px", height: "8px", borderRadius: "7px", margin: "0 4px", backgroundColor: "black" }} />
          <span className="store-sub-header-margin-left store-default-text">{storeDatas[store].branch}</span>
        </div>
        <div className="grey-line" />
        <div className="store-sub-header-item">
          {store === "elglop-cafe" ? <FiInstagram /> : <img width="16px" src={phoneIcon} alt="phone-icon" />}

          <a
            className="store-sub-header-margin-left store-default-text"
            href={store === "elglop-cafe" ? storeDatas[store].instagramLink : `tel:${storeDatas[store].phone}`}
          >
            {storeDatas[store].phone}
          </a>
        </div>
        <div className="grey-line" />
        <div className="store-sub-header-item" style={{ width: "310px", justifyContent: "space-between" }}>
          <div className="flex-center-center">
            <img width="16px" src={markerIcon} alt="address-icon" />
            <span className="store-sub-header-margin-left store-default-text">{storeDatas[store].address}</span>
          </div>
          <a
            href={`http://m.map.naver.com/route.nhn?menu=route&sname=&sx=&sy=&ename=${storeDatas[store].name} ${storeDatas[store].branch}&ex=${storeDatas[store].latlng.lng}&ey=${storeDatas[store].latlng.lat}&pathType=1&showMap=true`}
          >
            <div className="flex-center-center store-sub-header-directions">
              <span className="store-sub-header-directions-text">길찾기</span>
            </div>
          </a>
        </div>
        <div className="grey-line" />
        <div className="store-sub-header-item">
          <BsClock size="16" style={{ marginTop: "2px" }} />
          <div className="store-sub-header-margin-left">
            <span className="store-default-text">{currentDayKorean}</span>
            <span className="store-default-text" style={{ marginLeft: "10px" }}>
              {`${storeDatas[store].openHours[currentDay][0].toString().slice(0, -2)}:${storeDatas[store].openHours[currentDay][0]
                .toString()
                .slice(-2)} ~ ${storeDatas[store].openHours[currentDay][1].toString().slice(0, -2)}:${storeDatas[store].openHours[currentDay][0]
                .toString()
                .slice(-2)}`}
            </span>
          </div>
        </div>
      </div>
      <div className="grey-line" />
    </div>
  );
};

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
    checkStoreOpen();
  }, [currentDay, currentTime]);

  return (
    <>
      <div className="page">
        <Header path={path} />
        {openImageModal ? <ImageModal setOpenImageModal={setOpenImageModal} currentImage={currentImageForModal} /> : null}
        <div className="detail-container">
          <div className="map-store-list-container">
            <div
              className="detail-see-map"
              onClick={() => {
                setCurrentStore(path);
                navigate("/map");
              }}
            >
              <img width="16px" src={mapIcon} alt="marker-icon"></img>
              <span className="detail-see-map-text">지도 보기</span>
            </div>
            <StoreListButton />
          </div>
          <div className="grey-line" />
          <div style={{ height: "20px" }} />
          <StoreHeader store={path} />
          <div style={{ height: "20px" }} />
          <StoreSubHeader store={path} />
          <div style={{ height: "24px" }} />
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
            <span
              className="detail-see-more-image-text detail-default-text"
              onClick={() => {
                navigate("/" + path + "/see-more-image");
                window.scroll(0, 0);
              }}
            >
              전체 사진 보기
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
export { StoreHeader, StoreSubHeader };
