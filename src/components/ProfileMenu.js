import style from "../css/ProfileMenu.module.css";
import { NavLink } from "react-router-dom";
import React, { useState, useContext } from "react";
import { UserContext } from "../components/contexts/UserContext";
import LoginModal from "../components/Login";
import SignUpModal from "../components/SignUp";

const ProfileMenu = () => {
	const { toggleModal, isLoggedIn, handleLogout, user} = useContext(UserContext);

	//show/hide sign up modal

	const [showSignUp, setShowSignUp] = useState(false)
	const openSignUp = () => {
		setShowSignUp(prev => !prev)
	}


	const handleContactLink = () => {
		window.scrollTo(0, document.body.scrollHeight);
	};

	const loggedInMenu = (
		<div>
			<div className={style.logged_in_menu}>
				<div className={style.order_link_wrapper}>
					<NavLink exact to="#" className={style.a}>
						My Profile
					</NavLink>

					<NavLink exact to="#" className={style.a}>
						My Orders
					</NavLink>

					<NavLink
						exact
						to="/about"
						onClick={handleContactLink}
						className={style.a}
					>
						Help & Contact
					</NavLink>
				</div>
				<hr className={style.hr} />
				<div className={style.button_logout_wrapper}>
					<button onClick={handleLogout} className={style.button_logout}>
						Log out
					</button>
				</div>
			</div>
		</div>
	);

	const loggedOutMenu = (
		<div className={style.logged_out_menu}>
			<div className={style.button_login_wrapper}>
				<button onClick={toggleModal} className={style.button_login}>
					Log in
				</button>
			</div>
			<div className={style.registration_wrapper}>
				<p className={style.registration_text}>
					<span className={style.registration_text}>Not a member?</span>
					<NavLink className={style.a} exact to="#" onClick={openSignUp} >
						Sign up
					</NavLink>
				</p>
			</div>
			<hr className={style.hr} />
			<div className={style.order_link_wrapper}>
				<NavLink exact to="#" className={style.a}>
					My orders
				</NavLink>
			</div>
		</div>
	);

	return (
		<div className={style.profile_menu_wrapper}>
			<LoginModal />
			<SignUpModal showSignUp={showSignUp} setShowSignUp={setShowSignUp}/>
			<div className={style.profile_menu_content}>
				{user ? (
					<div className={style.profile_menu_content}>{loggedInMenu}</div>
				) : (
					<div className={style.profile_menu_content}>{loggedOutMenu}</div>
				)}
			</div>
		</div>
	);
};

export default ProfileMenu;
