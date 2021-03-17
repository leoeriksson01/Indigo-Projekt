import style from "../css/ProfileInformation.module.css";

const ProfileInformation = () => {
	return (
		<div className={style.profile_information_content}>
			<div className={style.profile_information_header}>
				<h2 className={style.h2}>Profile information</h2>
				<p>
					Here you can edit your profile information. Keeping your info up to
					date helps us verify your account.
				</p>
			</div>
			<hr />
			<div className={style.personal_information}>
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
			</div>
			{/* ./personal_information */}
			<hr />
			<div className={style.login_information}>
				<h3 className={style.h2}>Login information</h3>
				<p className={style.p}>
					Email: <br />
					<span className={style.span}>admin@bilgagnat.com</span>
				</p>
				<p className={style.p}>
					Password: <br />
					<span className={style.span}>**********</span>
				</p>
			</div>
			{/* /.login_information */}
			<hr />
			<div className={style.payment_method}>
				<h3 className={style.h2}>Payment method</h3>
				<div className={style.payment_content}>
					<div className={style.payment_text_wrapper}>
						<p className={style.payment_text}>No payment method saved</p>
					</div>
					<div className={style.button_payment_wrapper}>
						<button type="button" className={style.button_payment}>
							Add payment method
						</button>
					</div>
					{/* /.button_payment_wrapper */}
				</div>
				{/* /.payment_content */}
			</div>
			{/* /.payment_method */}
		</div>
	);
};

export default ProfileInformation;
