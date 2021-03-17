import style from "../css/Profile.module.css";
import Message from "../components/Messages";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileInformation from "../components/ProfileInformation";

const Profile = () => {
	return (
		<div className={style.profile_container}>
			<div className={style.profile_content}>
				<div className={style.greeting_text}>
					<h2>Hello Name</h2>
					<p>On "My Profile" you can view your Order History and Messages</p>
				</div>
				{/* /.greeting_text */}
				<hr className={style.hr} />
				<div className={style.profile_information_wrapper}>
					<ProfileInformation />
				</div>

				<div className={style.messages}>
					<h3 className={style.messages_header}>Messages</h3>
					<div className={style.message_list}>
						<Message />
					</div>
					{/* ./messages */}
				</div>
			</div>
			<div className={style.profile_sidebar_wrapper}>
				<ProfileSidebar />
			</div>
		</div>
	);
};

export default Profile;
