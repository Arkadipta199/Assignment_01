import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={styles.navbar}>
      <Link to="/">
      <div  className={styles.navbar__logo}>
      <h2 >
      <img
            className={styles.cart__image}
             src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
                alt="logo"
          />
        Happay</h2>
      </div>
      
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}></h3>
          <img
            className={styles.cart__image}
            src="https://flaticons.net/custom.php?i=GY6fzoT7B2o6tYIkIpI5NCP7Vyvtl" 
            alt="Shopping Cart"
          />
          <div className={styles.cart__counter}><sup>{cartCount}</sup></div>
        </div>
      </Link>
    </div>
  ); //https://flaticons.net/custom.php?i=GY6fzoT7B2o6tYIkIpI5NCP7Vyvtl
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);


