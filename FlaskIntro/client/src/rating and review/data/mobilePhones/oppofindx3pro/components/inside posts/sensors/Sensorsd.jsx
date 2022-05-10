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

            <span className="postDate">2022.02.25</span>
        </div>
        <p ClassName="postDesc">
        <ul>
            <li><b>In-Display Fingerprint Sensor :</b>Yes</li>
            <li><b>Compass/ Magnetometer :</b>Yes</li>
            <li><b>Proximity sensor :</b>Yes</li>
            <li><b>Accelerometer :</b>Yes</li>
            <li><b>Ambient light sensor :</b>Yes</li>
            <li><b>Gyroscope :</b>Yes</li>
            <li><b>Temperature sensor :</b>Yes</li>
        </ul>
        </p>
    </div>
  )
}