import style from "../css/ProfileSidebar.module.css";
import { NavLink } from "react-router-dom";

const ProfileSidebar = () => {
	return (
		<div className={style.profile_sidebar}>
			<div className={style.header_text_wrapper}>
				<h2 className={style.header_text}>My Profile</h2>
			</div>
			<ul className={style.links}>
				<li>
					<NavLink className={style.a} exact to="#">
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink className={style.a} exact to="#">
						Help & Contact
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default ProfileSidebar;
