import React, { useContext } from "react";
import style from "../css/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../components/contexts/UserContext";
import useOnclickOutside from "react-cool-onclickoutside";
import { useHistory } from "react-router-dom";

const Login = ({ url, open, setOpen }) => {
	const { isLoggedIn, setUser } = useContext(UserContext);
	const container = useOnclickOutside(close);
	const history = useHistory();

	if (isLoggedIn()) {
		return null;
	}

	function close() {
		setOpen(false);
	}

	function login(e) {
		e.preventDefault();
		// login logic here like validation
		setUser({
			name: "User",
			email: Math.ceil(Math.random() * 100), // temp
			password: "123",
		});
		close();
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
						<form onSubmit={login} className={style.login_form}>
							<h1>Login</h1>

							<label htmlFor="email">Email</label>
							<input
								required
								type="email"
								name="email"
								placeholder="Enter your email"
							/>

							<label htmlFor="password" className={style.formLabel}>
								Password
							</label>
							<input
								required
								type="password"
								name="password"
								placeholder="Enter your password"
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
