import React,{useState} from "react";
import"./Shavin.css";

//Import the User Image
import Shavin from "../../about-us/Images/Shavin.jpg"

function Card() {

  const [name,setName] = useState("Shavin Fernando");
  const [job,setjob] = useState("Back-End Development");
  const [studentreg,setstudentreg] = useState("20200460");
  

  return(
    <div className="cardabout">
       <div className="upper-container">
         <div className="image-container">
           <img src={Shavin}alt="" height="100px" width="100px"/>
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
                 <li>API</li>
             </ul>
        </p>
      <a href="https://www.linkedin.com/in/shavin-fernando-962710163" target="true">
         <button className="buttonabout">LinkedIn</button>
       </a>
       </div>
    </div>
  )
}

export default Card;