import React, { useState, useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "../assets/menu.png";
import CloseMenuIcon from "../assets/menuclose.png";
import Cart from "../assets/cart.png";
import Profile from "../assets/profile.png";
import { ShopCartContext } from "./contexts/ShopCartContext";
import logo from "../assets/logo.png";
import style from "../css/Navbar.module.css";
import ShoppingCartList from "./ShoppingCartList";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
	const [profileMenu, setProfileMenu] = useState(false);

	const [mobileMenu, setMobileMenu] = useState(false);
	const [hoverShoppingCart, setHoverShoppingCart] = useState(false);
	const { counter } = useContext(ShopCartContext);

	const handleMobileMenu = () => setMobileMenu(!mobileMenu);

	const toggleShoppingCartEnter = () => {
		if (window.innerWidth > 577) {
			setHoverShoppingCart(true);
		}
	};
	const toggleShoppingCartLeave = () => {
		if (window.innerWidth > 577) {
			setHoverShoppingCart(false);
		}
	};
  // Memorize what the previous shopping cart size was
  const cartItemsLength = useRef(shoppingCart.length);
  
  const handleClick = () => setClick(click => !click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    if (shoppingCart.length > cartItemsLength.current) {
      setAnimateCart(true);
      setTimeout(() => {
        setAnimateCart(false);
      }, 750); // Match this with the .animate duration amount
    }

    // Save current shopping cart length to compare with the next time the cart update
    cartItemsLength.current = shoppingCart.length;
  }, [shoppingCart]);

	const toggleShoppingCart = () => {
		if (window.innerWidth < 576) {
			setHoverShoppingCart(!hoverShoppingCart);
		}
	};

	const toggleProfileMenuEnter = () => {
		if (window.innerWidth > 577) {
			setProfileMenu(true);
		}
	};

	const toggleProfileMenuLeave = () => {
		if (window.innerWidth > 577) {
			setProfileMenu(false);
		}
	};

	const toggleProfileMenu = () => {
		setProfileMenu(!profileMenu);
	};

	return (
		<div className={style.navbar_container}>
			<div className={style.logo_company_title_wrapper}>
				<div className={style.logo_wrapper}>
					<NavLink exact to="/">
						<img className={style.logo_img} src={logo} alt="logo" />
					</NavLink>
				</div>
				<div className={style.company_title}>
					<NavLink className={style.a_title} exact to="/">
						<h1 className={style.h1}>Bilgagnat</h1>
					</NavLink>
				</div>
			</div>
			{/* /.logo_company_title_wrapper */}
			<div className={style.nav_router_menu}>
				<ul
					className={`${style.ul} ${
						mobileMenu ? "" : style.nav_router_ul_none
					}`}
				>
					<li className={style.li}>
						<NavLink className={style.a} exact to="/">
							Home
						</NavLink>
					</li>
					<li className={style.li}>
						<NavLink className={style.a} exact to="/about">
							About
						</NavLink>
					</li>
				</ul>
			</div>
			{/* ./nav_router_container */}

			<div className={style.icons_wrapper}>
				<div
					className={style.profile_container}
					// onMouseEnter={toggleProfileMenuEnter}
					// onMouseLeave={toggleProfileMenuLeave}
				>
					<div
						className={style.profile_icon_wrapper}
						style={{
							backgroundColor: profileMenu && "#353336",
							borderRadius: profileMenu && "5px 5px 0 0",
						}}
					>
						<img
							onClick={toggleProfileMenu}
							src={Profile}
							alt="profile"
							className={style.profile_icon}
						/>
					</div>
					{/* /.profile_icon_wrapper */}

					<div
						className={`${style.profile_menu_container} ${
							profileMenu ? style.profile_menu_container_index : ""
						}`}
					>
						{profileMenu ? <ProfileMenu /> : ""}
					</div>
					{/* /.profile_menu_wrapper */}
				</div>
				{/* /.profile_container */}

				<div
					className={style.cart_container}
					onClick={toggleShoppingCart}
					// onMouseEnter={toggleShoppingCartEnter}
					onMouseLeave={toggleShoppingCartLeave}
				>
					<div className={style.cart_counter}>
						<img
							onMouseEnter={toggleShoppingCartEnter}
							src={Cart}
							alt="cart"
							className={style.cart_icon}
							style={{
								backgroundColor: hoverShoppingCart && "#353336",
								borderRadius: hoverShoppingCart && "5px 5px 0 0",
							}}
						/>
						<div className={style.counter}> {counter} </div>
					</div>
					<div
						className={`${style.shopping_cart_wrapper} ${
							hoverShoppingCart ? style.shopping_cart_wrapper_index : ""
						}`}
						style={{
							backgroundColor: hoverShoppingCart && "#353336",
							borderRadius: hoverShoppingCart && "5px 5px 0 0",
						}}
					>
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
						<img
							src={CloseMenuIcon}
							alt="close menu"
							className={style.mobile_menu_icon}
							onClick={handleMobileMenu}
						/>
					) : (
						<img
							src={MenuIcon}
							alt="mobile menu"
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
