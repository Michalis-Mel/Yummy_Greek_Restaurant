import React, { useState } from "react";
import { dishesArray } from "../db.js";

const Filters = ({ menu, setMenu }) => {
  const filterItems = [];
  const allFilterItems = menu.map((dish) => dish.tags);

  for (let i = 0; i < allFilterItems.length; i++) {
    for (let j = 0; j < allFilterItems[i].length; j++) {
      if (allFilterItems[i][j] !== undefined) {
        filterItems.push(allFilterItems[i][j]);
      }
    }
  }
  const filters = [...new Set(filterItems)];
  const [activeFilters] = useState(filters);

  function addFilter(e, value = "all") {
    const filterBtns = document.querySelectorAll(".filterBtn");
    filterBtns.forEach((btn) => {
      [...btn.parentElement.children].forEach((sib) =>
        sib.classList.remove("active")
      );
      e.target.classList.add("active");
    });

    if (e.target.classList.contains("showAll")) {
      showAll(e);
    } else {
      const checkFilter = [];
      const menuCopy = [];
      if (e.target.classList.contains("active")) {
        checkFilter.push(dishesArray.map((dish) => dish.tags.includes(value)));
        checkFilter.map((fil1) => {
          for (let i = 0; i < fil1.length; i++) {
            if (fil1[i]) {
              menuCopy.push(dishesArray[i]);
            }
          }
          return [];
        });
      }
      setMenu(menuCopy);
    }
  }

  function showAll(e) {
    if (e.target.classList.contains("active")) {
      setMenu(dishesArray);
    } else {
      setMenu([]);
    }
  }
  function priceHandler(e) {
    const priceArr = [];
    const finalPriceArray = [];
    const value = e.target.value;
    const copyArray = Object.values(dishesArray.map((dish) => dish.price));
    switch (value) {
      case "<10":
        for (let i = 0; i < dishesArray.length; i++) {
          if (copyArray[i] < "10") {
            priceArr.push(i);
          }
        }
        for (let i = 0; i < priceArr.length; i++) {
          finalPriceArray.push(dishesArray[priceArr[i]]);
        }
        setMenu(finalPriceArray);
        console.log(finalPriceArray);
        break;
      case "10-20":
        for (let i = 0; i < dishesArray.length; i++) {
          if (copyArray[i] > "10" && copyArray[i] < "20") {
            priceArr.push(i);
          }
        }
        for (let i = 0; i < priceArr.length; i++) {
          finalPriceArray.push(dishesArray[priceArr[i]]);
        }
        setMenu(finalPriceArray);
        break;
      case "20-30":
        for (let i = 0; i < dishesArray.length; i++) {
          if (copyArray[i] > "20" && copyArray[i] < "30") {
            priceArr.push(i);
          }
        }
        for (let i = 0; i < priceArr.length; i++) {
          finalPriceArray.push(dishesArray[priceArr[i]]);
        }
        setMenu(finalPriceArray);
        break;
      case "30-40":
        for (let i = 0; i < dishesArray.length; i++) {
          if (copyArray[i] > "30" && copyArray[i] < "40") {
            priceArr.push(i);
          }
        }
        for (let i = 0; i < priceArr.length; i++) {
          finalPriceArray.push(dishesArray[priceArr[i]]);
        }
        setMenu(finalPriceArray);
        break;
      case "40<":
        for (let i = 0; i < dishesArray.length; i++) {
          if (copyArray[i] > "40") {
            priceArr.push(i);
          }
        }
        for (let i = 0; i < priceArr.length; i++) {
          finalPriceArray.push(dishesArray[priceArr[i]]);
        }
        setMenu(finalPriceArray);
        break;
      case "all":
        setMenu(dishesArray);
        break;
      default:
    }
  }

  return (
    <div className="filters">
      <div className="filterBox">
        {activeFilters.length > 0 &&
          activeFilters.map((value, id) => {
            return (
              <button
                className="filterBtn"
                onClick={(e) => addFilter(e, value)}
                key={id}
              >
                {value}
              </button>
            );
          })}
        {activeFilters.length > 0 && (
          <button
            onClick={(e) => addFilter(e)}
            className="active filterBtn showAll"
          >
            All
          </button>
        )}
      </div>
      <div className="priceBox">
        <div className="price">
          <select onChange={(e) => priceHandler(e)}>
            <option value="all">All Prices</option>
            <option value="<10">Under 10€</option>
            <option value="10-20">10€ - 20€</option>
            <option value="20-30">20€ - 30€</option>
            <option value="30-40">30€ - 40€</option>
            <option value="40<">Over 40€</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
