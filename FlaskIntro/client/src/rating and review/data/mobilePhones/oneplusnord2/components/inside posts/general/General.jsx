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
            <li><b>Brand :</b>OnePlus</li>
            <li><b>Model :</b>Nord 2</li>
            <li><b>Release date :</b>22nd July 2021</li>
            <li><b>Form factor :</b>Touchscreen</li>
            <li><b>Dimensions (mm) :</b>158.90 x 73.20 x 8.25</li>
            <li><b>Weight (g) :</b>189.00</li>
            <li><b>Battery capacity (mAh) :</b>4500</li>
            <li><b>Fast charging :</b>Proprietary</li>
            <li><b>Colours</b>Blue Haze, Gray Sierra, Green Wood, Pac-Man Edition</li>
        </ul>
        </p>
    </div>
  )
}
