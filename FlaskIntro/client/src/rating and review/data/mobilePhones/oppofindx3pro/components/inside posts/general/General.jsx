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
            <li><b>Brand :</b>Oppo</li>
            <li><b>Model :</b>Find X3 Pro</li>
            <li><b>Release date :</b>11th March 2021</li>
            <li><b>Form factor :</b>Touchscreen</li>
            <li><b>Dimensions (mm) :</b>163.60 x 74.00 x 8.26</li>
            <li><b>Weight (g) :</b>193.00</li>
            <li><b>Battery capacity (mAh) :</b>4500</li>
            <li><b>Fast charging :</b>Proprietary</li>
            <li><b>Colours</b>Gloss Black, Blue</li>
        </ul>
        </p>
    </div>
  )
}
