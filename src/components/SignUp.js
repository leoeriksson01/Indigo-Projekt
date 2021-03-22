import React, {useState, useContext} from 'react';
import style from '../css/SignUp.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../components/contexts/UserContext";
import useOnclickOutside from "react-cool-onclickoutside";
import validate from "../components/SignUpValidation";


const SignUp = () => {
  const { openSignUp, setShowSignUp, showSignUp} = useContext(UserContext);
  const {values, errors} = validate



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
              <label htmlFor="name">First and last name</label>
              <input
                required
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                name="email"
                value={values.email}
                placeholder="Enter your email"
              />
              {errors.email && <p>{errors.email}</p>}
              <label htmlFor="password" className={style.formLabel}>
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <label htmlFor="password" className={style.formLabel}>
                Confirm password 
              </label>
              <input
                required
                type="password"
                name="password"
                placeholder="Confirm your password"
              />
              <label htmlFor="name">Address</label>
              <input
                required
                type="text"
                name="address"
                placeholder="Enter your address"
              />
              <div id={style.countyZip}>
                <div id={style.smallColumn}>
                  <label htmlFor="county">County</label>
                  <input
                    required
                    type="text"
                    name="county"
                    placeholder="Enter county"
                    id={style.formInput}
                  />
                </div>
                <div id={style.smallColumn}>
                  <label htmlFor="zip">Zip Code</label>
                  <input
                    required
                    type="number"
                    name="zip"
                    placeholder="Enter zip"
                    id={style.formInput}
                  />
                </div>
              </div>
							<button type="submit">Sign up</button>
						</form>
        </div>
      </div>
     ) : null}
    </>
  );
}

export default SignUp;