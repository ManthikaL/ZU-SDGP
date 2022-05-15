import "./Header.css";
import Banner from "../../images/banner.jpg"


export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Ask Me Phone</span>
        <span className="headerTitleLg">ONEPLUS 9 PRO</span>
      </div>
      <img
        className="headerImg"
        src={Banner}
        alt=""
      />
    </div>
  );
}