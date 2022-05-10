import React from "react";
import"./About.css";

//Import Members Details
import Tharindu from "../about-us/tharindu/Tharindu";
import Shavin from "../about-us/shavin/Shavin";
import Manthika from "../about-us/manthika/Manthika";
import Suraj from "../about-us/suraj/Suraj";
import Ashan from "../about-us/ashan/Ashan";

function About(){
  return(
    <>
    {/* First Line Images Set */}
    <div className="setone">
    <Shavin/> <Manthika/> <Tharindu/>
    </div>

    {/* Second Line Images Set */}
    <div className="settwo">
    <Ashan/> <Suraj/>
    </div>
    
  </>
  )
}

export default About;