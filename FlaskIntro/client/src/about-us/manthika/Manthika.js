import React,{useState} from "react";
import"./Manthika.css";

//Import the User Image
import Manthika from "../../about-us/Images/Manthika.JPG"

function Card() {

  const [name,setName] = useState("Manthika Dissanayake");
  const [job,setjob] = useState("Front-End Development");
  const [studentreg,setstudentreg] = useState("20200555");
  

  return(
    <div className="cardabout">
       <div className="upper-container">
         <div className="image-container">
           <img src={Manthika}alt="" height="100px" width="100px"/>
         </div>
       </div>
       <div className="lower-container">
         <h3>{name}</h3>
         <h4>{job}</h4>
         <h5>{studentreg}</h5>
         <p>
             <ul>
                 <li>Navigation bar</li>
                 <li>Home Page Modification</li>
                 <li>Rating & Review Page Modification</li>
                 <li>Rating Bar Modification</li>
             </ul>
        </p>
      <a href="https://www.linkedin.com/in/manthika-dissanayake-611300205" target="true">
         <button className="buttonabout">LinkedIn</button>
       </a>
       </div>
    </div>
  )
}

export default Card;