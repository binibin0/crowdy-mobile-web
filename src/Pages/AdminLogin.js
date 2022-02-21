import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import whiteMinus from "../images/white-minus.svg";
import whitePlus from "../images/white-plus.svg";
import { storeDatas } from "../datas/storeDatas";
import Header from "./Header";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [toggleOn, setToggleOn] = useState(false);

  const peopleCounting = useRef(0);

  const onChange = (event) => {
    if (event.target.id === "username") {
      setUsername(event.target.value);
    }
    if (event.target.id === "password") {
      setPassword(event.target.value);
    }
  };

  const checkLoginInfo = () => {
    let checkUsername = false;
    let checkPassword = false;

    if (username === "crowdyid") {
      checkUsername = true;
    } else {
      alert("아이디가 일치하지 않습니다.");
      setUsername("");
      setPassword("");
    }

    if (password === "crowdypw") {
      checkPassword = true;
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      setUsername("");
      setPassword("");
    }

    if (checkUsername && checkPassword) {
      setLoginSuccess(true);
    }
  };

  return (
    <>
      {loginSuccess ? (
        <div className="page">
          <Header />
          <div className="admin-login-flex">
            <div className="admin-control-box">
              <div className="admin-control-header">
                <img className="admin-control-header-logo" src={storeDatas.twosomeSeohyeonRodeo.logo} alt="Logo" />
                <div className="admin-control-header-center">
                  <span className="admin-control-header-title ">{storeDatas.twosomeSeohyeonRodeo.name}</span>
                  <span className="admin-control-header-branch">{storeDatas.twosomeSeohyeonRodeo.branch}</span>
                </div>
                <div className="admin-control-header-space" />
                <div
                  className={toggleOn ? "admin-control-header-toggle-button toggle-on" : "admin-control-header-toggle-button"}
                  onClick={() => {
                    setToggleOn(!toggleOn);
                  }}
                >
                  <div className="admin-control-header-toggle-circle"></div>
                </div>
              </div>
              <div className="admin-control-main">
                <div className="admin-control-status-box">
                  <span className="admin-control-status-first">상태</span>
                  <span className="admin-control-status-second">여유로움</span>
                  <div className="admin-control-count-box background-red" onClick={() => (peopleCounting.current -= 1)}>
                    <div className="white-minus">
                      <img src={whiteMinus} alt="minus"></img>
                    </div>
                  </div>
                </div>
                <div className="admin-control-status-box">
                  <span className="admin-control-status-first">인원수</span>
                  <span className="admin-control-status-second">{peopleCounting.current}</span>
                  <div className="admin-control-count-box background-green" onClick={() => (peopleCounting.current += 1)}>
                    <img src={whitePlus} alt="plus"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="page">
          <Header />
          <div className="admin-login-flex">
            <div className="admin-login-box">
              <span className="primary-color admin-login-header">* 관리자 전용 페이지입니다</span>
              <input
                id="username"
                type="text"
                value={username}
                placeholder="관리자 아이디"
                className="admin-login-input"
                onChange={onChange}
                autoFocus
                autoComplete="off"
              />
              <input id="password" type="password" value={password} placeholder="비밀번호" className="admin-login-input" onChange={onChange} />
              <div className="admin-login-button" onClick={() => checkLoginInfo()}>
                <span className="admin-login-button-text">로그인</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLogin;
