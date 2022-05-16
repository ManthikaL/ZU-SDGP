import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
        <h1>Team Zeta United - ASK ME PHONE</h1>
       
      <br/>
      <h2>Smartphone rating system using Machine learning and Sentiment Analysis</h2>
      <br/>
      <br />
      <h3>
      This software development group project is done by the team zeta united in need of answering the request from our university as a second-year undergraduate student.
      </h3>
      <h3>
      In the recent past, e-commerce sites have made rapid growth. There are millions of products and various websites sell these products. Mainly this project focuses on the smartphone category that has a huge impact on the present world. It is imminent for buyers to verify the genuineness and quality of smartphones. What better way is there than to ask people who have already bought and used them? This is where customer reviews come into the picture. The major hitch here is that popular products such as flagship smartphones have thousands of reviews and people do not have the time nor patience to read all thousands of them. Hence, our application eases this task by analyzing and rating all reviews for each smartphone which will help the user decide what other buyers have experienced on buying this product. We carry out this process using NLP algorithms to train a module with already rated reviews and using the model to get a rating for the reviews made by users and display them in our web application.
      </h3>
      <br />
      <br />

      <h1>TEAM MEMBERS</h1>
      <br />
      {/* <img src="images/iphone_13_pro_max.png" height={100} width={100}/> */}
      <h3>Shavin B. Fernando - 20200460 18301203/3</h3>
      {/* <img src="images/iphone_13_pro_max.png" height={100} width={100}/> */}
      <h3>R.M. Suraj Bandara - 2019704 18098107</h3>
      {/* <img src="images/iphone_13_pro_max.png" height={100} width={100}/> */}
      <h3>Tharindu Pathiraja - 2019578 17901123/1</h3>
      {/* <img src="images/iphone_13_pro_max.png" height={100} width={100}/> */}
      <h3>Manthika Dissanayake - 20200555 18302455/1</h3>
      <img src="images/iphone_13_pro_max.png" height={100} width={100}/>
      <h3>R.A.A.D.Ranasinghe - 20200680 18335589/1</h3>
      </div>
  );
}

export default About;