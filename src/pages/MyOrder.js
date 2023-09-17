import React from "react";
import { NavLink } from "react-router-dom";
import trash from "../images/trash.png";
const MyOrder = ({ order, setOrder }) => {
  return (
    <div className="myOrder">
      <div className="row">
        <h1>My Order</h1>

        {order[0] ? (
          <>
            <div className="delete_con">
              <button onClick={() => setOrder([])} className="delete">
                Delete Order
                <img src={trash} alt="Delete" />
              </button>
            </div>
            <ul>
              {order.map((food) =>
                food.map((food1) => (
                  <li key={food1.id}>
                    <img src={food1.image} alt={food1.name} />
                    <h2>{food1.name}</h2>
                    <h2>{food1.price}€</h2>
                  </li>
                ))
              )}
            </ul>
            <div className="order_con">
              <NavLink
                to="/success"
                onClick={() => console.log(order)}
                className="order"
              >
                Order
              </NavLink>
            </div>
          </>
        ) : (
          <h2 className="empty">
            You haven't added anything to your order yet!
          </h2>
        )}
        <NavLink to="/Yummy_Greek_Restaurant" className="back">
          Back
        </NavLink>
      </div>
    </div>
  );
};

export default MyOrder;
