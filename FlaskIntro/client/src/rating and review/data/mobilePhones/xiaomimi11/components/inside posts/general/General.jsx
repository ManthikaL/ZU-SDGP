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
            <li><b>Brand :</b>Xiaomi</li>
            <li><b>Model :</b>Mi 11 Pro</li>
            <li><b>Release date :</b>29th March 2021</li>
            <li><b>Form factor :</b>Touchscreen</li>
            <li><b>Battery capacity (mAh) :</b>4970</li>
            <li><b>Fast charging :</b>Proprietary</li>
            <li><b>Colours</b>Black, Green, White</li>
        </ul>
        </p>
    </div>
  )
}
