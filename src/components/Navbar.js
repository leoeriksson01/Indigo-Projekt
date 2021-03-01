import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Cart } from "../assets/cart.svg";
import "./Navbar.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <Logo className="logo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">HOME</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">ABOUT US</a>
          </li>
        </ul>
        
      </div>

      <div className="cart-container">
          <a href="#">
            <Cart className="cart" />
          </a>
        </div>
        
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;