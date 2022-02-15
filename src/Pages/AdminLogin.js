import { useState } from "react";
import { useNavigate } from "react-router-dom";
import goBackChevronIcon from "../images/go-back-chevron.svg";
import crowdyLogo from "../images/crowdy/crowdy-logo.png";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    if (event.target.id === "username") {
      setUsername(event.target.value);
    }
    if (event.target.id === "password") {
      setPassword(event.target.value);
    }
  };

  return (
    <div className="admin-login-container">
      <img width="18px" src={goBackChevronIcon} alt="go-back-icon" className="menu-back-button-icon" onClick={() => navigate("/")}></img>
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
            autofocus
            autoComplete="off"
          />
          <input id="password" type="password" value={password} placeholder="비밀번호" className="admin-login-input" onChange={onChange} />
          <div className="admin-login-button">
            <span className="admin-login-button-text">로그인</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
