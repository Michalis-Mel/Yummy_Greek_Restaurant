import React from "react";
import { NavLink } from "react-router-dom";
import food from "../images/food.png";
const Success = () => {
  return (
    <div className="successPage">
      <div className="row">
        <img src={food} alt="food" />
        <h1>
          Your order has been successfully placed. <br /> Thank you!
        </h1>
        <NavLink to="/Yummy_Greek_Restaurant">Back to the menu</NavLink>
      </div>
    </div>
  );
};
export default Success;
