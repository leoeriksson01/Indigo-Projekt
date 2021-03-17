import style from "../css/ProfileMenu.module.css";
import { NavLink } from "react-router-dom";

const ProfileMenu = () => {
	const handleContactLink = () => {
		window.scrollTo(0, document.body.scrollHeight);
	};

	const loggedInMenu = (
		<div className={style.logged_in_menu}>
			<div className={style.order_link_wrapper}>
				<NavLink exact to="profile" className={style.a}>
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
				<button className={style.button_logout}>Log out</button>
			</div>
		</div>
	);

	const loggedOutMenu = (
		<div className={style.logged_out_menu}>
			<div className={style.button_login_wrapper}>
				<button className={style.button_login}>Log in</button>
			</div>
			<div className={style.registration_wrapper}>
				<p className={style.registration_text}>
					<span className={style.registration_text}>Not a member?</span>
					<NavLink className={style.a} exact to="#">
						Register now
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
			<div className={style.profile_menu_content}>{loggedInMenu}</div>
		</div>
	);
};

export default ProfileMenu;
