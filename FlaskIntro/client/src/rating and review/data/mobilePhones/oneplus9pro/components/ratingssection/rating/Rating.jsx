import React from 'react';

import { useState } from "react";
import './Rating.css';
import { FaStar } from "react-icons/fa";

// import Popup from '../popup/popups/Popup';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function Rating() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [feedbackText, setFeedbackText] = useState(" ");
  const [feedbackType,setFeedbackType] = useState(" ");
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }



  const handleFeedbackSubmit = () => {
    console.log('handleFeedbackSubmit',feedbackText);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                id:2,
                feedbackText: feedbackText
            })
    };
    fetch('/save-feedback', requestOptions)
        .then(
            res => res.json()
        ).then(
            data => {
                console.log("fetch data", data.feedbackType);
                setFeedbackType(data.feedbackType);
            }
        )

  }



  return (
      <>
    <div style={styles.container}>
      <h2> Give Feedback </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea
        placeholder="What's your experience?"
        value={feedbackText}
        onChange={(e)=> {setFeedbackText(e.target.value)}}
        style={styles.textarea}
      />

       <div className="ratingview">
         {feedbackType}
       </div>

      <button
          onClick={handleFeedbackSubmit}
        style={styles.button}>
        Submit
      </button>

    </div>

      </>
  );
}


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }
};

export default Rating;