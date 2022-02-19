import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import goBackWhiteChevronIcon from "../images/go-back-white-chevron.svg";
import { storeDatas } from "../datas/storeDatas";

const Header = ({ path, page }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  const checkPage = () => {
    if (page) {
      return setPageTitle("전체 이미지");
    }

    if (location.pathname === "/crowdy") {
      return setPageTitle("Crowdy");
    }
    if (location.pathname === "/survey") {
      return setPageTitle("설문조사 및 피드백");
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
          <img width="20px" color="white" src={goBackWhiteChevronIcon} alt="go-back-icon" className="header-back-button" onClick={() => navigate(-1)} />
          <div className="header-title">{pageTitle}</div>
        </div>
      </div>
    </>
  );
};

export default Header;
