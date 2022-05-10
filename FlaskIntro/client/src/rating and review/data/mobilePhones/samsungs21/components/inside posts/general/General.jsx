import React from 'react'
import "./General.css"

export default function General({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
            <div className="postCat">
                <span className="postcat">AskMe</span>
                <span className="postcat">Phone</span>
            </div>
            <span className="postTitle">GENERAL</span>

            <span className="postDate">2022.02.25</span>
        </div>
        <p ClassName="postDesc">
        <ul>
            <li><b>Brand :</b>Samsung</li>
            <li><b>Model :</b>Galaxy S21</li>
            <li><b>Release date :</b>14th January 2021</li>
            <li><b>Form factor :</b>Touchscreen</li>
            <li><b>Dimensions (mm) :</b>151.70 x 71.20 x 7.90</li>
            <li><b>Weight (g) :</b>	171.00</li>
            <li><b>IP rating :</b>IP68</li>
            <li><b>Battery capacity (mAh) :</b>4000</li>
            <li><b>Fast charging :</b>Proprietary</li>
            <li><b>Wireless charging :</b>Yes</li>
            <li><b>Colours</b>Phantom Violet</li>
        </ul>
        </p>
    </div>
  )
}
