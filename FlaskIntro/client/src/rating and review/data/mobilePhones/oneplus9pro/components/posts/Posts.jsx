import React from 'react';

import"./Posts.css"

//Importing Single Post Contents
import General from "../inside posts/general/General"
import Camerad from "../inside posts/camera/Camerad"
import Displayd from "../inside posts/display/Displayd"
import Hardwared from "../inside posts/hardware/Hardwared"
import Sensorsd from "../inside posts/sensors/Sensorsd"

//Importing Single Post Images
import Phone from "../../images/phone.jpg"
import Camera from "../../images/camera.jpg"
import Display from "../../images/display.jpg"
import Hardware from "../../images/hardware.jpeg"
import Sensors from "../../images/sensors.jpg"


export default function Posts() {
  return (
    <div className="posts">
      <General img={Phone} />
      <Camerad img={Camera}/>
      <Displayd img={Display}/>
      <Hardwared img={Hardware}/>
      <Sensorsd img={Sensors}/>
    </div>
  );
}