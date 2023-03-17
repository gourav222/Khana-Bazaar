import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import icon from "../images/menu.png";
import cart from "../images/cart.png";
function Items() {
  return (
    <>
      <div id="expandBar">
        <Link>About</Link>
        <Link>Service</Link>
        <Link>Cuisine</Link>
        <Link>Galery</Link>
        <Link>Contact</Link>
        <Link>Block</Link>
      </div>
    </>
  );
}
function Foodie() {
  const [click, setClick] = useState(false);
  return (
    <>
      <div id="leftSideSection">
        <h3>Foodie</h3>
        <Items />
        <button>Cart</button>
      </div>
      <div id="icon">
        <button
          id="expand"
          onClick={() => {
            setClick(click ? false : true);
          }}
        >
          <img src={icon} alt="" />
          {click ? <Items /> : null}
        </button>
        <h3>Foodie</h3>
        <button id="cart">
          <img src={cart} alt="" />
        </button>
      </div>
    </>
  );
}

export default Foodie;
