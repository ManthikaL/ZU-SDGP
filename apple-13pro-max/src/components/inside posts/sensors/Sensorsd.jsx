import React from 'react'
import "./Sensorsd.css"

export default function Sensorsd({img}) {
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
            <span className="postTitle">SENSORS</span>
            <hr/>
            <span className="postDate">2022.02.25</span>
        </div>
        <p ClassName="postDesc">
        <ul>
            <li><b>3D face recognition :</b>Yes</li>
            <li><b>Compass/ Magnetometer :</b>Yes</li>
            <li><b>Proximity sensor :</b>Yes</li>
            <li><b>Accelerometer :</b>Yes</li>
            <li><b>Ambient light sensor :</b>Yes</li>
            <li><b>Gyroscope :</b>Yes</li>
            <li><b>Barometer :</b>Yes</li>
        </ul>
        </p>
    </div>
  )
}