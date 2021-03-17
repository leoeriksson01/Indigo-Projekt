import style from "../css/ProfileSidebar.module.css";

const ProfileSidebar = () => {
	return (
		<div className={style.profile_sidebar}>
			<div className={style.header_text_wrapper}>
				<h2 className={style.header_text}>My Profile</h2>
			</div>
			<ul className={style.links}>
				<li>My Orders</li>
				<li>Help & Contact</li>
			</ul>
		</div>
	);
};

export default ProfileSidebar;
