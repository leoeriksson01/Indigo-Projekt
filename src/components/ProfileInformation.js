import style from "../css/ProfileInformation.module.css";

const ProfileInformation = () => {
	return (
		<div className={style.profile_information_content}>
			<div className={style.personal_information}>
				<h2>Personal information</h2>
			</div>

			<div>
				<h2>Billing information</h2>
			</div>
		</div>
	);
};

export default ProfileInformation;
