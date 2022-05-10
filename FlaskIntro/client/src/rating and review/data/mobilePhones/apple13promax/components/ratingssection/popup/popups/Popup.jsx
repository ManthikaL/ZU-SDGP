import React, { useState } from "react";
import "./Popup.css";

import Check from "../images/check.png"

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div style={styles.container}>
      <textarea
        placeholder="What's your experience?"
        style={styles.textarea}
      />
      <button onClick={toggleModal} className="btn-modal">
        Submit
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Successfully Submited</h2>
            <img src={Check} className="check"></img>
            <p>
              Thank You for sharing your feedback with us.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
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
  // button: {
  //   border: "1px solid #a9a9a9",
  //   borderRadius: 5,
  //   width: 300,
  //   padding: 10,
  // }

};