import React from "react";
import check from "../images/check.png";

const SuccessBox = ({ added }) => {
  return (
    <div className={`successBox ${added ? "active" : ""}`}>
      <div className="sucCon">
        <img src={check} alt="Success" />
        <h4>
          Congratulations! You've just added this masterpiece to your order
        </h4>
      </div>
    </div>
  );
};

export default SuccessBox;
