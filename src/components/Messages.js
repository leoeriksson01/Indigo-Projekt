import style from "../css/Messages.module.css";

const Messages = () => {
	return (
		<div className={style.message_container}>
			<div className={style.name_status_wrapper}>
				<div className={style.name_wrapper}>
					<h3 className={style.name}>User</h3>
				</div>
				<div className={style.status}>
					<p className={style.pending}>Pending</p>
				</div>
			</div>
			{/* /.name_status_wrapper */}

			<p className={style.email}>
				Email: <span>user@contact.com</span>
			</p>
			<p className={style.message}>
				Message: <span>This is my message!</span>
			</p>
		</div>
	);
};

export default Messages;
