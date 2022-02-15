import { useNavigate } from "react-router-dom";
import goBackChevronIcon from "../images/go-back-chevron.svg";
import crowdyLogo from "../images/crowdy/crowdy-logo.png";

const Crowdy = () => {
  const navigate = useNavigate();
  return (
    <div className="menu-container">
      <img width="18px" src={goBackChevronIcon} alt="go-back-icon" className="menu-back-button-icon" onClick={() => navigate("/")}></img>
      <div className="menu-header">
        <img className="crowdy-header-logo" src={crowdyLogo} alt="crowdy-logo"></img>
        <span className="menu-header-text">"카페 헛걸음 말고, Crowdy"</span>
      </div>
      <div className="menu-content">
        <span className="menu-content-title menu-content-title-space">
          Crowdy <span className="primary-color font-bold">?</span>
        </span>
        <span className="menu-content-text menu-content-paragraph-space">
          <span className="primary-color">Crowdy</span>는 주변 카페의 혼잡도를 비롯해 다양한 정보를 확인할 수 있는 서비스입니다.
        </span>
        <span className="menu-content-title menu-content-title-space">
          Crowdy Team <span className="primary-color font-bold">.</span>
        </span>
        <span className="menu-content-text menu-content-text-space">
          안녕하세요, <span className="primary-color">Crowdy Team</span> 입니다.
        </span>
        <span className="menu-content-text menu-content-text-space">
          <span className="primary-color">Crowdy</span>는 일상 속에서의 작은 불편함을 <br />
          개선하고자 하는 사람들이 모여 만든 서비스입니다.
        </span>
        <span className="menu-content-text menu-content-text-space">
          저희 <span className="primary-color">Crowdy Team</span>은 <span className="primary-color">베타 테스트</span>에서 선보인 것 <br />
          이외에도 향후 Crowdy 서비스의 다양한 기능들을 <br />
          계획 중에 있으니 빠른 시일 내에 여러분께 <br />
          보여드릴 수 있도록 하겠습니다.
        </span>
        <span className="menu-content-text menu-content-text-space">
          앞으로도 계속해서 여러분들께 편하고 실용적인 <span className="primary-color">Crowdy</span> 서비스를 제공할 수 있도록 노력하겠습니다.
        </span>
        <span className="menu-content-text">
          저희 <span className="primary-color">Crowdy</span> 서비스를 이용해주셔서 감사합니다.
        </span>
      </div>
    </div>
  );
};

export default Crowdy;
