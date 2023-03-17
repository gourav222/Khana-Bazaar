import React, { useEffect, useState } from "react";
import FoodRow from "./FoodRow";
import search from "../images/download.png";
import axios from "axios";
function Main() {
  const [foodItems, setFoodItems] = useState("");
  const [foodCategories,setFoodCategories] = useState([]);
  const handleOnChange = (event) => {
    setFoodItems(event.target.value);
  };
  const foodItemsByCategori = async () => {
    console.log("Clicked")
    const data = await axios
      .get(
        `http://localhost:4000/api/foodItemsByCategori?categorieType=${foodItems}`
      )
      setFoodCategories(data.data.foodItemsByCategori.categories.items);
      setFoodItems('');
  };
  return (
    <>
      <div id="main">
        <div id="top">
          <input
            type="text"
            placeholder="Search the food that you like's"
            id="searchBox"
            value={foodItems}
            onChange={handleOnChange}
          />
          <button
            id="searchIcon"
            onClick={() => {
              foodItemsByCategori();
            }}
          >
            <img src={search} alt="" />
          </button>
        </div>

        <div id="mainLeft">
          <h1>What are you having for Lunch?</h1>
        </div>

        <div id="mainRight">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            quam et ullam modi eum, dignissimos voluptatum excepturi, est autem
            ut consectetur.
          </p>
          <div id="line"></div>
        </div>
        <FoodRow foodCategories={foodCategories}/>
      </div>
    </>
  );
}

export default Main;
