import React from "react";
import { Routes, Route } from "react-router-dom";

//import components
import Header from "./components/Header";
import Menu from "./pages/Menu";
import DishDetails from "./pages/DishDetails";
import MyOrder from "./pages/MyOrder";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Menu />} />
        <Route path="/dish/:id" element={<DishDetails />} />
        <Route path="/my_order" element={<MyOrder />} />
      </Routes>
    </>
  );
}

export default App;
