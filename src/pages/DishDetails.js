import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

import { dishesArray } from "../db.js";

const DishDetails = ({ addOrder }) => {
  const url = useParams();
  const [dish, setDish] = useState(dishesArray[0]);
  const [dishes] = useState(dishesArray);

  useEffect(() => {
    const currentDish = dishes.filter((myDish) => myDish.name === url.id);
    if (currentDish[0]) setDish(currentDish[0]);
  }, [dishes, url]);

  return (
    <div className="dishDetails">
      <div className="row">
        <img src={dish.image} alt={dish.name} />
        <div className="dishInfo">
          <h1>{dish.name}</h1>
          <h2>{dish.price}€</h2>
          <h4>Description</h4>
          <p>{dish.description}</p>
          <h4>Ingredients</h4>
          <ul>
            {dish.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          {dish.tags && (
            <div className="more_info">
              <h4>More Information</h4>
              <ul>
                {dish.tags
                  ? dish.tags.map((pref) => <li key={pref}>{pref}</li>)
                  : ""}
              </ul>
            </div>
          )}
          <div className="dishDetails_links">
            <button onClick={() => addOrder(dish.id)} className="add">
              Add to your order
            </button>
            <NavLink to="/" className="back">
              Back
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetails;
