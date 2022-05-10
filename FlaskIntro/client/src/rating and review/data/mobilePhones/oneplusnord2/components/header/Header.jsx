import React from 'react';
import "./Header.css";
import Banner from "../../images/banner.jpeg"


export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/*<span className="headerTitleSm">Ask Me Phone</span>*/}
        <span className="headerTitleLg">ONE PLUS NORD 2</span>
      </div>
      <img
        className="headerImg"
        src={Banner}
        alt=""
      />
    </div>
  );
}