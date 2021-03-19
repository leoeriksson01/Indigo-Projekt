import React, {useState, useContext} from 'react';
import style from '../css/SignUp.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../components/contexts/UserContext";
import useOnclickOutside from "react-cool-onclickoutside";


const SignUp = () => {
  const { openSignUp, setShowSignUp, showSignUp} = useContext(UserContext);

	const container = useOnclickOutside(() => {
		setShowSignUp(false);
	});

  return (
    <>
     {showSignUp ? (
      <div id={style.signUpBackground}>
        <div id={style.SignUpContainer} ref={container}>
          <div onClick={SignUp} className={style.close}>
						<FontAwesomeIcon className={style.close_icon} icon={faTimes} />
					</div>
          <form id={style.signUpForm}>
              <h1>Sign up</h1>

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
							<button type="submit">Sign up</button>
						</form>
        </div>
      </div>
     ) : null}
    </>
  );
}

export default SignUp;