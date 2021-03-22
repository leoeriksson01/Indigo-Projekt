import React, { useContext } from "react";
import style from "../css/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../components/contexts/UserContext";
import useOnclickOutside from "react-cool-onclickoutside";

const Login = ({ open, setOpen }) => {
	const { isLoggedIn, setUser } = useContext(UserContext);

	function close() {
		setOpen(false);
	}

	function login(e) {
		e.preventDefault();
		setUser({ name: "User", email: "test@test.com", password: "123" });
		setOpen(false);
		// login logic here
	}

	const container = useOnclickOutside(close);

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
