import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { dishesArray } from "../db.js";
import Filters from "../components/Filters.js";

function Menu({ setAdded, addOrder }) {
  const [menu, setMenu] = useState(dishesArray);

  return (
    <div className="menu">
      <div className="row">
        <h1>Welcome to YummyGreek</h1>
        <h2>Our Menu</h2>
        <div className="dishes">
          <Filters menu={menu} setMenu={setMenu} />
          {menu.length > 0 ? (
            menu.map((dish) => (
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
            ))
          ) : (
            <h1 id="NoDish">No Dishes Found</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
