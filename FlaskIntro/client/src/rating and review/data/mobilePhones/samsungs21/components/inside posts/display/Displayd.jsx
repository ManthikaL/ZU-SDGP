import React from 'react'
import "./Displayd.css"

export default function Displayd({img}) {
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
            <span className="postTitle">DISPLAY</span>

            <span className="postDate">2022.02.25</span>
        </div>
        <p ClassName="postDesc">
        <ul>
            <li><b>Screen Size(inches) :</b>6.20</li>
            <li><b>Touchscreen :</b>Yes</li>
            <li><b>Resolution :</b>1080x2400 pixels</li>
            <li><b>Protection type :</b>Gorilla Glass</li>
            <li><b>Aspect ratio :</b>20:9</li>
            <li><b>Pixels per inch (PPI) :</b>	421</li>
        </ul>
        </p>
    </div>
  )
}