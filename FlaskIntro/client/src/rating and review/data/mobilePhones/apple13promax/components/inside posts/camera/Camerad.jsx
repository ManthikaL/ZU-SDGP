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
            <li><b>Rear camera :</b>12-megapixel (f/1.5) + 12-megapixel (f/1.8) + 12-megapixel (f/2.8)</li>
            <li><b>No. of Rear Cameras :</b>3</li>
            <li><b>Rear flash :</b>Yes</li>
            <li><b>Front camera :</b>12-megapixel (f/2.2)</li>
            <li><b>No. of Front Cameras :</b>1</li>
        </ul>
        </p>
    </div>
  )
}
