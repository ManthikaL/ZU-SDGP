import React,{useState} from "react";
import"./Ashan.css";

//Import the User Image
import Ashan from "../../about-us/Images/Ashan.jpg"

function Card() {

  const [name,setName] = useState("Ashan Ranasinghe");
  const [job,setjob] = useState("Front-End Development");
  const [studentreg,setstudentreg] = useState("20200680");
  

  return(
    <div className="cardabout">
       <div className="upper-container">
         <div className="image-container">
           <img src={Ashan}alt="" height="100px" width="100px"/>
         </div>
       </div>
       <div className="lower-container">
         <h3>{name}</h3>
         <h4>{job}</h4>
         <h5>{studentreg}</h5>
         <p>
             <ul>
                 <li>View More Page</li>
                 <li>Rating & Review Page Modification</li>
                 <li>Rating Table Modification</li>
             </ul>
        </p>
      <a href="https://www.linkedin.com/in/ashaan-dulakshana-b5266b207" target="true">
         <button className="buttonabout">LinkedIn</button>
       </a>
       </div>
    </div>
  )
}

export default Card;