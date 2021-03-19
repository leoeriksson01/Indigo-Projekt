import style from "../css/ProfileInformation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faEnvelope,
	faCreditCard,
	faPen,
	faEdit,
} from "@fortawesome/free-solid-svg-icons";

const ProfileInformation = () => {
	return (
		<div className={style.profile_information_content}>
			<div className={style.profile_information_header}>
				<h2 className={style.h2}>Profile information</h2>
				<p>
					Here you can edit your profile information. Keeping your information
					up to date helps us verify your account.
				</p>
			</div>
			<hr />
			<div className={style.personal_information}>
				<div className={style.icon_wrapper}>
					<div className={style.icon_user_wrapper}>
						<FontAwesomeIcon icon={faUser} size="2x" />
					</div>
					<div className={style.icon_edit_wrapper}>
						<FontAwesomeIcon icon={faEdit} size="2x" />
					</div>
				</div>
				<div className={style.personal_information_content}>
					<div className={style.personal_information_text}>
						<div className={style.text_wrapper}>
							<p className={style.p}>
								Name: <br />
								<span className={style.span}>Admin</span>
							</p>
							<p className={style.p}>
								Address: <br />
								<span className={style.span}>Drottningsgatan 184</span>
							</p>
						</div>

						<div className={style.text_wrapper}>
							<p className={style.p}>
								County: <br />
								<span className={style.span}>Skåne</span>
							</p>
							<p className={style.p}>
								Zip Code: <br />
								<span className={style.span}>200 00</span>
							</p>
						</div>
					</div>
					{/* ./personal_information_text */}
				</div>
				{/* /.personal_information_content */}
			</div>
			{/* ./personal_information */}
			<hr />
			<div className={style.login_information}>
				<div className={style.icon_wrapper}>
					<div className={style.icon_login_wrapper}>
						<FontAwesomeIcon icon={faEnvelope} size="2x" />
					</div>
					<div className={style.icon_edit_wrapper}>
						<FontAwesomeIcon icon={faEdit} size="2x" />
					</div>
				</div>

				<div className={style.login_text}>
					<p className={style.p}>
						Email: <br />
						<span className={style.span}>admin@bilgagnat.com</span>
					</p>
					<p className={style.p}>
						Password: <br />
						<span className={style.span}>**********</span>
					</p>
				</div>
				{/* /.login_text */}
			</div>
			{/* /.login_information */}
			<hr />
			<div className={style.payment_method}>
				<div className={style.icon_wrapper}>
					<div className={style.icon_payment_wrapper}>
						<FontAwesomeIcon icon={faCreditCard} size="2x" />
					</div>
					<div className={style.icon_edit_wrapper}>
						<FontAwesomeIcon icon={faEdit} size="2x" />
					</div>
				</div>

				<div className={style.payment_text_wrapper}>
					<p className={style.payment_text}>No payment method saved</p>
				</div>
				{/* /.payment_text_wrapper */}
			</div>
			{/* /.payment_method */}
		</div>
	);
};

export default ProfileInformation;
