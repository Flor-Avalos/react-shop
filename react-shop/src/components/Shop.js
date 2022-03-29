import React, { useState } from "react";
import list from "../data";
import Cards from "./Card";
import "../styles/Shop.css";

const Shop = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Shop;
