import { useNavigate } from "react-router-dom";
import crowdyLogo from "../images/crowdy/crowdy-alone.png";
import Header from "./Header";
import DrawerP from "./Drawer";

const Crowdy = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="crowdy-container">
        <Header />
        <div className="menu-header">
          <img
            className="crowdy-header-logo"
            src={crowdyLogo}
            alt="crowdy-logo"
          ></img>
          <span className="menu-header-text">"카페 헛걸음 말고, Crowdy"</span>
        </div>

        <div className="menu-content">
          <span className="menu-content-title menu-content-title-space">
            Crowdy <span className="primary-color font-bold">?</span>
          </span>
          <span className="menu-content-text menu-content-paragraph-space">
            <span className="primary-color font-light">Crowdy</span>는 카페의
            혼잡도를 비롯한 다양한 정보를 확인할 수 있는 카페 통합 플랫폼입니다.
          </span>
          <span className="menu-content-title menu-content-title-space">
            Crowdy Team <span className="primary-color font-bold">.</span>
          </span>
          <span className="menu-content-text menu-content-text-space">
            안녕하세요,{" "}
            <span className="primary-color font-light">Crowdy Team</span>{" "}
            입니다.
          </span>
          <span className="menu-content-text menu-content-text-space">
            <span className="primary-color font-light">Crowdy</span>는 일상
            속에서의 작은 불편함을 해결하고 싶은 대학생들이 만든 서비스입니다.
          </span>
          <span className="menu-content-text menu-content-text-space">
            앞으로도 계속해서 여러분께 편하고 실용적인{" "}
            <span className="primary-color font-light">Crowdy</span> 서비스를
            제공해드릴 수 있도록 노력하겠습니다.
          </span>
          <span className="menu-content-text">
            저희 <span className="primary-color font-light">Crowdy</span>{" "}
            서비스를 이용해주셔서 감사합니다.
          </span>
        </div>
      </div>
    </>
  );
};

export default Crowdy;
