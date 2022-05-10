import React from 'react';

//Import Star Rating Component and Postive , Negative Table and Popup Button
import Rating from "../ratingssection/rating/Rating";
import Ratingtable from "../ratingssection/ratingtable/Table";


export default function ratingssection() {
  
    return (
        <>
          
          <Ratingtable />
          <Rating />

        </>

    );
    }
