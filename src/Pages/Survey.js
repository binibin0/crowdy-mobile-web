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
          지금의 <span className="primary-color font-light">Crowdy</span>는 <span className="primary-color font-light">Crowdy Team</span> 멤버들이 느낀 불편함을
          바탕으로 구현되었습니다.
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
        <span className="menu-content-text menu-content-text-space">구글 설문지 링크</span>
        <span className="menu-content-text menu-content-text-space">
          <span className="primary-color font-light">Crowdy</span>는 일상 속에서의 작은 불편함을 개선하고자 하는 사람들이 모여 만든 서비스입니다.
        </span>
        <span className="menu-content-text menu-content-text-space">
          설문지를 작성해주시는 분들은 자동으로 <br />
          <span className="primary-color font-light">스타벅스 기프티콘</span>에 응모가 되십니다!
        </span>
        <span className="menu-content-text menu-content-text-space">(총 10분을 추첨! 응모 마감: ~2022년 02월 20일(일))</span>
        <span className="menu-content-text menu-content-text-space">
          사용자 여러분들이 적어주시는 설문지와 피드백은 <br />
          저희 <span className="primary-color font-light">Crowdy Team</span>에게 정말 큰 도움이 됩니다.
        </span>
        <span className="menu-content-text">감사합니다.</span>
        <div style={{ height: "60px" }} />
      </div>
    </div>
  );
};

export default Survey;
