import React from 'react'
import "./Hardwared.css"

export default function Hardwared({img}) {
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
            <span className="postTitle">HARDWARE</span>

            <span className="postDate">2022.02.25</span>
        </div>
        <p ClassName="postDesc">
        <ul>
            <li><b>Processor make :</b>Qualcomm Snapdragon 888</li>
        </ul>
        </p>
    </div>
  )
}