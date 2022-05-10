import React from 'react'
import "./Camerad.css"

export default function Post({img}) {
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
            <span className="postTitle">CAMERA</span>

            <span className="postDate">2022.02.25</span>
        </div>
        <p ClassName="postDesc">
        <ul>
            <li><b>Rear camera :</b>50-megapixel + 13-megapixel + 8-megapixel</li>
            <li><b>Rear autofocus :</b>Yes</li>
            <li><b>Rear flash :</b>Yes</li>
        </ul>
        </p>
    </div>
  )
}
