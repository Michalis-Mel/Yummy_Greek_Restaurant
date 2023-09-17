import React, { useState } from "react";
import { dishesArray } from "../db.js";

const Filters = ({ menu, setMenu }) => {
  //Get the filter buttons from the db
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

  //Activate the filter that is clicked
  function addFilter(e) {
    const filterBtns = document.querySelectorAll(".filterBtn");

    if (e.target.id.includes("priceSelect")) {
      const priceArr = [];
      const finalPriceArray = [];
      const value = document.getElementById("priceSelect").value;

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
          break;
        case "all":
          finalPriceArray.push(...dishesArray);
          break;
        default:
      }
      const beforeTags = finalPriceArray;
      const filterClasses = Object.values(filterBtns);
      const valueCheck = filterClasses.filter((val) =>
        val.classList.contains("active")
      );

      let tagActive = valueCheck[0].innerHTML;
      if (tagActive === "all") {
        setMenu(beforeTags);
      } else {
        const checkFilter = [];
        const menuCopy = [];
        checkFilter.push(
          beforeTags.map((dish) => dish.tags.includes(tagActive))
        );
        checkFilter[0].map((val, i) => {
          if (val) {
            menuCopy.push(beforeTags[i]);
          }
          return [];
        });
        setMenu(menuCopy);
      }
    } else {
      filterBtns.forEach((btn) => {
        [...btn.parentElement.children].forEach((sib) =>
          sib.classList.remove("active")
        );
        e.target.classList.add("active");
      });
    }
    const priceArr = [];
    const finalPriceArray = [];
    const value = document.getElementById("priceSelect").value;

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
        break;
      case "all":
        finalPriceArray.push(...dishesArray);
        break;
      default:
    }

    const beforeTags = finalPriceArray;
    const filterClasses = Object.values(filterBtns);
    const valueCheck = filterClasses.filter((val) =>
      val.classList.contains("active")
    );

    let tagActive = valueCheck[0].innerHTML;
    if (tagActive === "all") {
      setMenu(beforeTags);
    } else {
      const checkFilter = [];
      const menuCopy = [];
      checkFilter.push(beforeTags.map((dish) => dish.tags.includes(tagActive)));
      checkFilter[0].map((val, i) => {
        if (val) {
          menuCopy.push(beforeTags[i]);
        }
        return [];
      });
      setMenu(menuCopy);
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
                onClick={(e) => addFilter(e)}
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
            all
          </button>
        )}
      </div>
      <div className="priceBox">
        <div className="price">
          <select id="priceSelect" onChange={(e) => addFilter(e)}>
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
