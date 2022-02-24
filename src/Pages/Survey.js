import { useNavigate } from "react-router-dom";
import crowdyLogo from "../images/crowdy/crowdy-alone.png";
import Header from "./Header";

const Survey = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <Header />
      <div className="menu-header">
        <img className="crowdy-header-logo" src={crowdyLogo} alt="crowdy-logo"></img>
        <span className="menu-header-text">Crowdy 설문조사</span>
      </div>
      <div className="menu-content">
        <span className="menu-content-title menu-content-title-space">
          설문조사를 진행하는 이유는 무엇인가요 <span className="primary-color font-bold">?</span>
        </span>
        <span className="menu-content-text menu-content-text-space">
          지금의 <span className="primary-color font-light">Crowdy</span>는 <span className="primary-color font-light">Crowdy Team</span> 멤버들이 느낀 <br />
          불편함을 바탕으로 구현되었습니다.
        </span>
        <span className="menu-content-text menu-content-paragraph-space">
          저희는 보다 더 나은 서비스를 제공하기 위해 <br />
          사용자분들이 불편하거나 필요하다고 생각되는 <br />
          부분들을 더 자세히 알고 싶어 설문조사를 <br />
          진행하고 있습니다.
        </span>
        <span className="menu-content-title menu-content-title-space">
          설문조사 <span className="primary-color font-bold">.</span>
        </span>
        <a
          style={{ fontSize: "18px", fontWeight: "700" }}
          className="menu-content-text menu-content-text-space"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe7dd9w4IFrBJiJhNE22q7YxAaBPB3RFenBVYplfwMVA8NHVw/formResponse"
        >
          구글 설문지 링크
        </a>
        <span className="menu-content-text menu-content-text-space">
          설문지를 작성해주시는 분은{" "}
          <span className="primary-color font-light">
            서현170 <br />
            아메리카노 교환권{" "}
          </span>
          또는{" "}
          <span className="primary-color font-light">
            스타벅스 아메리카노 <br />
            교환권
          </span>
          에 응모를 하실 수 있습니다!
        </span>
        <span className="menu-content-text menu-content-text-space">
          총 10분을 추첨할 예정이니 많은 참여 <br />
          부탁드립니다!
        </span>
        <span className="menu-content-text menu-content-text-space">응모 마감: 2022년 03월 04일(금)</span>
        <span className="menu-content-text menu-content-text-space">
          사용자 여러분들이 적어주시는 설문지는 <br />
          저희 <span className="primary-color font-light">Crowdy Team</span>에게 정말 큰 도움이 됩니다.
        </span>
        <span className="menu-content-text">감사합니다.</span>
        <div style={{ height: "80px" }} />
      </div>
    </div>
  );
};

export default Survey;
