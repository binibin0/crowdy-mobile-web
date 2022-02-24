import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import goBackWhiteChevronIcon from "../images/go-back-white-chevron.svg";
import squareMenu from "../images/square-menu.svg";
import { storeDatas } from "../datas/storeDatas";
import CrowdyContext from "./CrowdyContext";

const Header = ({ path, page }) => {
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
  } = useContext(CrowdyContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  const checkPage = () => {
    if (page) {
      return setPageTitle("전체 이미지");
    }

    if (location.pathname === "/") {
      return setPageTitle("Crowdy");
    }
    if (location.pathname === "/store-list") {
      return setPageTitle("서현역");
    }
    if (location.pathname === "/crowdy") {
      return setPageTitle("Crowdy");
    }
    if (location.pathname === "/survey") {
      return setPageTitle("설문조사");
    }
    if (location.pathname === "/admin-login") {
      return setPageTitle("관리자 페이지");
    }

    if (storeDatas[path]) {
      return setPageTitle(storeDatas[path].name);
    } else {
      setPageTitle("error");
    }
  };
  useEffect(() => {
    checkPage();
  }, [pageTitle]);
  return (
    <>
      <div className="empty-header-box" />
      <div className={page ? "header-box rectangle" : "header-box "}>
        <div className="header-space" />
        <div className="header-content">
          {location.pathname === "/" ? (
            <img width="20px" color="white" src={squareMenu} alt="menu" className="header-menu-button" onClick={() => setDrawereVisible(true)} />
          ) : (
            <img
              width="12px"
              color="white"
              src={goBackWhiteChevronIcon}
              alt="go-back-icon"
              className="header-go-back-button"
              onClick={() => {
                navigate(-1);
                window.scroll(0, 0);
              }}
            />
          )}

          <div className="header-title">{pageTitle}</div>
        </div>
      </div>
    </>
  );
};

export default Header;
