import React from "react";
import dosa from "../images/dosa.jfif";
import pizza from "../images/pizza.jfif";
import chines from "../images/chines.jfif";
import burger from "../images/burger.jfif";
import frenchfires from "../images/frenchfires.jfif";
import "../App.css";
function FoodRow({ foodCategories }) {
  return (
    // Food Items when user search according to the categories
    <div id="foodItems">
      {foodCategories[0] ? (
        foodCategories.map((foodItems, index) => {
          return (
            <div className="itemImg" key={index}>
              <img src={foodItems.imgUrl} alt="" />
              <h6>{foodItems.foodName}</h6>
            </div>
          );
        })
      ) : (
        <>
          {/* This is the default food items shown on the screen*/}
          <div className="itemImg">
            <img src={pizza} alt="" />
            <h6>Pizza</h6>
          </div>
          <div className="itemImg">
            <img src={chines} alt="" />
            <h6>Chines</h6>
          </div>
          <div className="itemImg">
            <img src={burger} alt="" />
            <h6>Burger</h6>
          </div>
          <div className="itemImg">
            <img src={frenchfires} alt="" />
            <h6>French fires</h6>
          </div>
          <div className="itemImg">
            <img src={dosa} alt="" />
            <h6>South Indian</h6>
          </div>
        </>
      )}
    </div>
  );
}

export default FoodRow;
