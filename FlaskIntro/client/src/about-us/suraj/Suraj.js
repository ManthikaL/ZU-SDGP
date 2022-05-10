import React,{useState} from "react";
import"./Suraj.css";

//Import the User Image
import Suraj from "../../about-us/Images/Suraj.jpg"

function Card() {

  const [name,setName] = useState("Suraj Bandara");
  const [job,setjob] = useState("Back-End Development");
  const [studentreg,setstudentreg] = useState("2019704");
  

  return(
    <div className="cardabout">
       <div className="upper-container">
         <div className="image-container">
           <img src={Suraj}alt="" height="100px" width="100px"/>
         </div>
       </div>
       <div className="lower-container">
         <h3>{name}</h3>
         <h4>{job}</h4>
         <h5>{studentreg}</h5>
         <p>
             <ul>
                 <li>Preprocessing</li>
                 <li>Model</li>
                 <li>Testing</li>
             </ul>
        </p>
      <a href="https://www.linkedin.com/in/suraj-lakshitha-7395221b4" target="true">
         <button className="buttonabout">LinkedIn</button>
       </a>
       </div>
    </div>
  )
}

export default Card;