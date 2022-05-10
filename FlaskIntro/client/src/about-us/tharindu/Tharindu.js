import React,{useState} from "react";
import"./Tharindu.css";

//Import the User Image
import Tharindu from "../../about-us/Images/Tharindu.jpg"

function Card() {

  const [name,setName] = useState("Tharindu Darshana");
  const [job,setjob] = useState("Front-End Development");
  const [studentreg,setstudentreg] = useState("2019578");
  

  return(
    <div className="cardabout">
       <div className="upper-container">
         <div className="image-container">
           <img src={Tharindu}alt="" height="100px" width="100px"/>
         </div>
       </div>
       <div className="lower-container">
         <h3>{name}</h3>
         <h4>{job}</h4>
         <h5>{studentreg}</h5>
         <p>
             <ul>
                 <li>View More Page</li>
                 <li>About us Page Modification</li>
                 <li>Rating Bar Modification</li>
                 <li>Rating Table Modification</li>
             </ul>
        </p>
      <a href="https://www.linkedin.com/in/tharindudpathiraja" target="true">
         <button className="buttonabout">LinkedIn</button>
       </a>
       </div>
    </div>
  )
}

export default Card;