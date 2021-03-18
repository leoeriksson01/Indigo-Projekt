import React, {useState} from 'react';
import style from '../css/SignUp.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SignUp = ({showSignUp, setShowSignUp}) => {

  return (
    <>
     {showSignUp ? (
      <div id={style.signUpBackground}>
        <div id={style.SignUpContainer}>
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