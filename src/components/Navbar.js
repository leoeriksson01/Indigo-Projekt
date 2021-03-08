import React, { useState, useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as CloseMenuIcon } from "../assets/x.svg";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import logo from "../assets/logo.png";
import style from "../css/Navbar.module.css";
import ShoppingCartList from "./ShoppingCartList";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hoverShoppingCart, setHoverShoppingCart] = useState(false);

  const handleMobileMenu = () => setMobileMenu(!mobileMenu);

  const toggleShoppingCart = () => {
    setHoverShoppingCart(!hoverShoppingCart);
    console.log(hoverShoppingCart);
  };

  return (
    <div className={style.navbar_container}>
      <div className={style.logo_company_title_wrapper}>
        <div className={style.logo_wrapper}>
          <img className={style.logo_img} src={logo} alt="logo" />
        </div>
        <div className={style.company_title}>
          <h1>Bilgagnat</h1>
        </div>
      </div>
      {/* /.logo_company_title_wrapper */}

      <div className={style.nav_router_menu}>
        {/* <ul className={click ? style.nav_router_ul_none : style.nav_router_ul}> */}
        <ul className={mobileMenu ? "" : style.nav_router_ul_none}>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
      {/* ./nav_router_container */}

      <div className={style.icons_wrapper}>
        <div className={style.profile_container}>
          <Profile className={style.profile_icon} />
        </div>

        <div
          className={style.cart_container}
          onClick={toggleShoppingCart}
          // onMouseEnter={toggleShoppingCart}
          // onMouseLeave={toggleShoppingCart}
        >
          <Cart className={style.cart_icon} />
          <div className={style.shopping_cart_wrapper}>
            <div className={style.shopping_cart_content}>
              {hoverShoppingCart ? (
                <ShoppingCartList hover={hoverShoppingCart} />
              ) : (
                ""
              )}
            </div>
            {/* /.shopping_cart_content */}
          </div>
          {/* shopping_cart_wrapper */}
        </div>
        {/* /.cart_container */}

        <div className={style.mobile_menu}>
          {mobileMenu ? (
            <CloseMenuIcon
              className={style.mobile_menu_icon}
              onClick={handleMobileMenu}
            />
          ) : (
            <MenuIcon
              className={style.mobile_menu_icon}
              onClick={handleMobileMenu}
            />
          )}
        </div>
        {/* /.mobile_menu */}
      </div>
      {/* /.icons_wrapper */}
    </div>
    // /.navbar_container
  );
};

export default Navbar;
