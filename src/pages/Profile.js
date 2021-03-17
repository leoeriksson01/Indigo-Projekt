import style from "../css/Profile.module.css";

const Profile = () => {
	return (
		<div className={style.profileContainer}>
			<div className={style.profileContent}>
				<div className={style.greetingText}>
					{" "}
					<h2>Hello Name </h2>
					<p>On "My Profile" you can view your Order History and Messages</p>
				</div>
				<div className={style.messages}>
					<h3 className={style.messagesHeader}> Messages </h3>
					<div className={style.messageList}></div>
				</div>
			</div>
			<div className={style.profileSidebar}>
				<div className={style.headerText}> My Profile </div>
				<ul className={style.links}>
					<li> My Orders </li>
					<li> Help & Contact </li>
				</ul>
			</div>
		</div>
	);
};

export default Profile;
