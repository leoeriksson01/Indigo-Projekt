import style from "../css/Profile.module.css";

const Profile = () => {
	return (
		<div className={style.profileContainer}>
			<div className={style.profileSidebar}> </div>
			<div className={style.profileContent}>
				<div className={style.greetingText}>Hello Name</div>
			</div>
		</div>
	);
};

export default Profile;
