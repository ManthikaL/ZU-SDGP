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
            <li><b>Brand :</b>Apple</li>
            <li><b>Model :</b>iPhone 13 Pro Max</li>
            <li><b>Release date :</b>14th September 2021</li>
            <li><b>Form factor :</b>Touchscreen</li>
            <li><b>Dimensions (mm) :</b>160.80 x 78.10 x 7.65</li>
            <li><b>Weight (g) :</b>240.00</li>
            <li><b>IP rating :</b>IP68</li>
            <li><b>Fast charging :</b>Proprietary</li>
            <li><b>Wireless charging :</b>Yes</li>
            <li><b>Colours</b>Graphite, Gold, Silver, Sierra Blue</li>
        </ul>
        </p>
    </div>
  )
}
