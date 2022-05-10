import React from 'react';

//Import Star Rating Component and Postive , Negative Table and Popup Button
import Rating from "../ratingssection/rating/Rating";
import Ratingtable from "../ratingssection/ratingtable/Table";
import Popup from "./popup/popups/Popup";

export default function ratingssection() {
  
    return (
        <>

            <Ratingtable />
            <Rating />
            {/*<Popup/>*/}
        </>

    );
    }
