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
            <li><b>Rear camera :</b>50-megapixel (f/1.8) + 50-megapixel (f/2.2) + 13-megapixel (f/2.4) + 5-megapixel (f/3.0)</li>
            <li><b>No. of Rear Cameras :</b>4</li>
            <li><b>Front camera :</b>32-megapixel (f/2.4)</li>
            <li><b>No. of Front Cameras :</b>1</li>
        </ul>
        </p>
    </div>
  )
}
