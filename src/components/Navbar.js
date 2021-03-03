import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShopCartContext } from "./contexts/ShopCartContext";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { useContext } from "react";
import elvs from "../assets/elvs.png";
import ShoppingCart from "../components/ShoppingCart"
import "./Navbar.css";



function toggleCart() {


  document.querySelector(".cartList").classList.toggle("hidden");
  console.log("hello")
  

}

const Header = () => {
  const {totalPrice } = useContext(ShopCartContext);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo">
           <img src={elvs}/> 
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

      <div className="cart-container" >
            <Cart className="cart" onClick={toggleCart} />
 <div className="cartList">
   <ShoppingCart/> 
   <div className="totalprice"> 
   Total price: ${totalPrice} 
   <NavLink exact to="/">
              To Checkout
            </NavLink>
            </div>
 </div>
           
            
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