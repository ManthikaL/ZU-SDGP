import React, {useEffect, useState} from "react"
//Main Pages Importing
import Homepage from "./homepage/Homepage";
import Product from "./rating and review/producpage/product";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./about-us/About";

//Importing More Details Page Details
import Apple13promax from "./rating and review/data/mobilePhones/apple13promax/Apple13promax";
import Samsung from "./rating and review/data/mobilePhones/samsungs21/Samsungs21";
import Oneplusnord from "./rating and review/data/mobilePhones/oneplusnord2/Oneplusnord2";
import Oneplus9pro from "./rating and review/data/mobilePhones/oneplus9pro/Oneplus9pro";
import Oppofindx3pro from "./rating and review/data/mobilePhones/oppofindx3pro/Oppofindx3pro";
import Xiaomimi11 from "./rating and review/data/mobilePhones/xiaomimi11/Xiaomimi11";


//Importing RatingSection
import Apple13promaxratings from './rating and review/data/mobilePhones/apple13promax/components/ratingssection/Ratingsection';
import Oneplus9proratings from "./rating and review/data/mobilePhones/oneplus9pro/components/ratingssection/Ratingsection";
import Oneplusnord2ratings from "./rating and review/data/mobilePhones/oneplusnord2/components/ratingssection/Ratingsection";
import Oppofindx3proratings from "./rating and review/data/mobilePhones/oppofindx3pro/components/ratingssection/Ratingsection";
import Samsungs21ratings from "./rating and review/data/mobilePhones/samsungs21/components/ratingssection/Ratingsection";
import Xiaomimi11ratings from "./rating and review/data/mobilePhones/xiaomimi11/components/ratingssection/Ratingsection";

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";



function App() {
  return (

    <Router>

    <Header />

    <Routes>
      <Route exact path='/Home' element={<Homepage/>}></Route>
      <Route exact path='/Product' element={<Product/>}></Route>
      <Route exact path='/About' element={<About/>}></Route>
      <Route exact path='/iphone13' element ={<Apple13promax/>}></Route>
      <Route exact path='/samsung' element ={<Samsung/>}></Route>
      <Route exact path= '/oneplusnord' element = {<Oneplusnord/>}></Route>
      <Route exact path= '/oneplus' element = {<Oneplus9pro/>}></Route>
      <Route exact path= '/oppofind' element = {<Oppofindx3pro/>}></Route>
      <Route exact path= '/xiomi' element = {<Xiaomimi11/>}></Route>
      <Route exact path= '/Apple13promax' element = {<Apple13promaxratings/>}></Route>
      <Route exact path='/Oneplus9pro' element = {<Oneplus9proratings/>}></Route>
      <Route exact path='/Oneplusnord2'element = {<Oneplusnord2ratings/>}></Route>
      <Route exact path='/Oppofindx3pro' element={<Oppofindx3proratings/>}></Route>
      <Route exact path='/Samsungs21' element={<Samsungs21ratings/>}></Route>
      <Route exact path='/Xiaomimi11' element = {<Xiaomimi11ratings/>}></Route>

    </Routes >

    <Footer />

    </Router>

  );
}

export default App;
