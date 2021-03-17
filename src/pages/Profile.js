import style from "../css/Profile.module.css";
import Message from "../components/Messages";

const Profile = () => {
	return (
		<div className={style.profile_container}>
			<div className={style.profile_content}>
				<div className={style.greeting_text}>
					<h2>Hello Name</h2>
					<p>On "My Profile" you can view your Order History and Messages</p>
				</div>
				<div className={style.messages}>
					<h3 className={style.messages_header}> Messages </h3>
					<div className={style.message_list}>
						<Message />
					</div>
				</div>
			</div>
			<div className={style.profile_sidebar}>
				<div className={style.header_text}>My Profile</div>
				<ul className={style.links}>
					<li>My Orders</li>
					<li>Help & Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default Profile;
