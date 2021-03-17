import style from "../css/ProfileInformation.module.css";

const ProfileInformation = () => {
	return (
		<div className={style.profile_information_content}>
			<div className={style.personal_information}>
				<h2 className={style.h2}>Personal information</h2>
				<div className={style.text_information}>
					<p className={style.p}>
						Name: <br />
						<span className={style.span}>Admin Admin</span>
					</p>
					<p className={style.p}>
						Address: <br />
						<span className={style.span}>Admin12345</span>
					</p>
					<p className={style.p}>
						County: <br />
						<span className={style.span}>Skåne</span>
					</p>
					<p className={style.p}>
						Zip Code: <br />
						<span className={style.span}>200 00</span>
					</p>

					<p className={style.p}>
						Email: <br />
						<span className={style.span}>admin@bilgagnat.com</span>
					</p>
					<p className={style.p}>
						Password: <br />
						<span className={style.span}>**********</span>
					</p>
				</div>
			</div>

			<div className={style.billing_information}>
				<h2 className={style.h2}>Billing information</h2>
				<p>
					Credit Card: <span>Master Card</span>
				</p>
				<p>
					Card number: <span>**** ****</span>
				</p>
				<p>
					VVC: <span>***</span>
				</p>
			</div>
		</div>
	);
};

export default ProfileInformation;
