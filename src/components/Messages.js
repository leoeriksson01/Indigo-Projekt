import style from "../css/Message.module.css";

const Messages = () => {
	return (
		<div className={style.messageContainer}>
			<div className={style.status}>
				Status: <span className={style.pending}> Pending </span>
			</div>
			<div className={style.name}> Name </div>
			<div className={style.email}> Email </div>
			<div className={style.message}> Message </div>
		</div>
	);
};

export default Messages;
