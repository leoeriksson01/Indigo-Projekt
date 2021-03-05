import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShopCartContext } from "./contexts/ShopCartContext";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { useContext, useRef } from "react";
import logo from "../assets/elvs.png";
import style from "../css/Navbar.module.css";
import ShoppingCart from "../components/ShoppingCart";

const Header = () => {
  function toggleCart() {
    if (cartList.current) {
      cartList.current.classList.toggle(style.hidden);
    }
  }

  function toggleProfile() {
    if (profileList.current) {
      profileList.current.classList.toggle(style.hidden);
    }
  }

  const cartList = useRef();
  const profileList = useRef();

  const { totalPrice } = useContext(ShopCartContext);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className={style.header}>
      <div className={style.logo_nav}>
        <div className={style.logo}>
          <img src={logo} />
        </div>
        <div className={style.bilgagnat}>Bilgagnat</div>

        <ul className={`${style.nav_options} ${click ? style.active : ""}`}>
          <li className={style.option} onClick={closeMobileMenu}>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className={style.option} onClick={closeMobileMenu}>
            <NavLink exact to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={style.cart_container}>
        <Cart className={style.cart} onClick={toggleCart} />
        <div className={style.cartList} ref={cartList}>
          <ShoppingCart />
          <div className={style.totalprice}>
            Total price: ${totalPrice}
            <NavLink exact to="/checkout">
              To Checkout
            </NavLink>
          </div>
        </div>
      </div>

      <div className={style.profile_container}>
        <Profile className={style.profile} onClick={toggleProfile} />
        <div className={style.profileList} ref={profileList}>
          {" "}
        </div>
      </div>

      <div className={style.mobile_menu} onClick={handleClick}>
        {click ? (
          <CloseMenu className={style.menu_icon} />
        ) : (
          <MenuIcon className={style.menu_icon} />
        )}
      </div>
    </div>
  );
};

export default Header;
