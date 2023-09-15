import React from "react";
import { NavLink } from "react-router-dom";
import { dishesArray } from "../db.js";

function Menu({ addOrder }) {
  return (
    <div className="menu">
      <div className="row">
        <h1>Our Menu</h1>
        <div className="dishes">
          {dishesArray.map((dish) => (
            <div className="dish" key={dish.id}>
              <div className="dish_con">
                <img src={dish.image} alt={dish.name} />
                <div className="all_info">
                  <div className="dish_info">
                    <h3> {dish.name}</h3>
                    <strong>{dish.price}€</strong>
                  </div>
                  <div className="desc">
                    <h5>Description</h5>
                    <p>{dish.description}</p>
                  </div>
                  <div className="dish_links">
                    <NavLink to={`/dish/${dish.name}`} className="more">
                      More Information
                    </NavLink>
                    <button onClick={() => addOrder(dish.id)} className="add">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
