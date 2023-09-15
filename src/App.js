import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { dishesArray } from "./db";

//import components
import Header from "./components/Header";
import Menu from "./pages/Menu";
import DishDetails from "./pages/DishDetails";
import MyOrder from "./pages/MyOrder";

function App() {
  const [order, setOrder] = useState(() => {
    const localValue = localStorage.getItem("ORDER");
    if (localValue === null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ORDER", JSON.stringify(order));
  }, [order]);

  function addOrder(id) {
    setOrder((currentOrder) => {
      return [...currentOrder, dishesArray.filter((dish) => dish.id === id)];
    });
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Menu addOrder={addOrder} />} />
        <Route path="/dish/:id" element={<DishDetails addOrder={addOrder} />} />
        <Route
          path="/my_order"
          element={<MyOrder order={order} setOrder={setOrder} />}
        />
      </Routes>
    </>
  );
}

export default App;
