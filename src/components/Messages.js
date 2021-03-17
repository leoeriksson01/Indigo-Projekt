import style from "../css/Message.module.css";

const Messages = () => {
	return (
		<div className={style.messageContainer}>
			<span className={style.nameStatus}>
				<div className={style.name}>Kristian Tyrann</div>
				<div className={style.status}>
					Status: <span className={style.pending}> Pending </span>
				</div>
			</span>

			<div className={style.email}> Email: Tyrannen07@gmail.com </div>
			<div className={style.message}>
				Message: Jeg er morderen Johannes og jeg er årsagen til Stockholms
				massakre
			</div>
		</div>
	);
};

export default Messages;
