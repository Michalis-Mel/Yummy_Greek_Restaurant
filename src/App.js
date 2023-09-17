import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { dishesArray } from "./db";

//import components
import Header from "./components/Header";
import Menu from "./pages/Menu";
import DishDetails from "./pages/DishDetails";
import MyOrder from "./pages/MyOrder";
import SuccessBox from "./components/SuccessBox";
import Success from "./pages/Success";

function App() {
  const [added, setAdded] = useState(false);
  const [order, setOrder] = useState(() => {
    const localValue = localStorage.getItem("ORDER");
    if (localValue === null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ORDER", JSON.stringify(order));
  }, [order]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdded(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [added]);

  function addOrder(id) {
    setAdded(true);
    setOrder((currentOrder) => {
      return [...currentOrder, dishesArray.filter((dish) => dish.id === id)];
    });
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          exact
          element={<Menu setAdded={setAdded} addOrder={addOrder} />}
        />
        <Route
          path="/dish/:id"
          element={<DishDetails setAdded={setAdded} addOrder={addOrder} />}
        />
        <Route
          path="/my_order"
          element={<MyOrder order={order} setOrder={setOrder} />}
        />
        <Route path="/success" element={<Success />} />
      </Routes>
      <SuccessBox added={added} />
    </>
  );
}

export default App;
