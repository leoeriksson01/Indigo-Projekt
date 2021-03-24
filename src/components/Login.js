import React, { useContext, useState } from "react";
import style from "../css/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../components/contexts/UserContext";
import useOnclickOutside from "react-cool-onclickoutside";
import { useHistory } from "react-router-dom";

const Login = ({ url, open, setOpen }) => {
	const { isLoggedIn, login } = useContext(UserContext);
	const container = useOnclickOutside(close);
	const history = useHistory();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	if (isLoggedIn()) {
		return null;
	}

	function close() {
		setOpen(false);
	}

	function handleLogin(e) {
		e.preventDefault();
		const success = login({ email, password });
		if (success) close();
		if (url) {
			// User is always redirected to where they were
			history.push(url);
		}
	}

	return (
		<div>
			{open && (
				<div className={style.modal}>
					<div className={style.modal_content} ref={container}>
						<div onClick={close} className={style.close}>
							<FontAwesomeIcon className={style.close_icon} icon={faTimes} />
						</div>
						<form onSubmit={handleLogin} className={style.login_form}>
							<h1>Login</h1>

							<label htmlFor="email">Email</label>
							<input
								required
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>

							<label htmlFor="password" className={style.formLabel}>
								Password
							</label>
							<input
								required
								type="password"
								placeholder="Enter your password"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>

							<button type="submit">Login</button>
						</form>
						<div className={style.register}>
							<h2>
								Not a member? <a href="">Sign Up</a>
							</h2>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Login;
