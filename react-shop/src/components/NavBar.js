import React from "react";
import "../styles/NavBar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Mi primer libro
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size} Mi compra</span>  
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
