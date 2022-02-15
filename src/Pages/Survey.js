import { useNavigate } from "react-router-dom";
import goBackChevronIcon from "../images/go-back-chevron.svg";
import crowdyLogo from "../images/crowdy/crowdy-logo.png";

const Survey = () => {
  const navigate = useNavigate();
  return (
    <div className="menu-container">
      <img width="18px" src={goBackChevronIcon} alt="go-back-icon" className="menu-back-button-icon" onClick={() => navigate("/")}></img>
      <div className="menu-header">
        <img className="crowdy-header-logo" src={crowdyLogo} alt="crowdy-logo"></img>
        <span className="menu-header-text">Crowdy 설문조사</span>
      </div>
      <div className="menu-content">
        <span className="menu-content-title menu-content-title-space">
          설문조사를 진행하는 이유는 무엇인가요 <span className="primary-color font-bold">?</span>
        </span>
        <span className="menu-content-text menu-content-text-space">
          지금의 <span className="primary-color">Crowdy</span>는 <span className="primary-color">Crowdy Team</span> 멤버들이 느낀 <br />
          불편함을 바탕으로 만들어졌기 때문에 저희가 <br />
          놓치거나 간과했던 부분들이 있을 수 있습니다.
        </span>
        <span className="menu-content-text menu-content-paragraph-space">
          저희는 사용자분들에게 보다 더 나은 서비스를 <br />
          제공하기 위해 실제로 서비스를 사용하는 여러분들의 의견을 듣고 싶어 설문조사를 진행하고 있습니다.
        </span>
        <span className="menu-content-title menu-content-title-space">
          설문조사 <span className="primary-color font-bold">.</span>
        </span>
        <span className="menu-content-text menu-content-text-space">구글 설문지 링크</span>
        <span className="menu-content-text menu-content-text-space">
          <span className="primary-color">Crowdy</span>는 일상 속에서의 작은 불편함을 개선하고자 하는 사람들이 모여 만든 서비스입니다.
        </span>
        <span className="menu-content-text menu-content-text-space">
          설문지를 작성해주시는 분들은 자동으로 <br />
          <span className="primary-color">스타벅스 기프티콘</span>에 응모가 되십니다!
        </span>
        <span className="menu-content-text menu-content-text-space">(총 10분을 추첨! 응모 마감: ~2022년 02월 20일(일))</span>
        <span className="menu-content-text menu-content-text-space">
          사용자 여러분들이 적어주시는 설문지와 피드백은 <br />
          저희 <span className="primary-color">Crowdy Team</span>에게 정말 큰 도움이 됩니다.
        </span>
        <span className="menu-content-text">감사합니다.</span>
      </div>
    </div>
  );
};

export default Survey;
