import React, {useState, useContext} from 'react';
import style from '../css/SignUp.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../components/contexts/UserContext";
import useOnclickOutside from "react-cool-onclickoutside";
import validate from "../components/formComponents/validateForm";
import useForm from "../components/formComponents/useForm"

  function SignUp ({submitForm}) {
    const {handleChange, values, handleSubmit, errors} = useForm(
        submitForm,
        validate
        );

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
          <form id={style.signUpForm} onSubmit={handleSubmit}>
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
                type="text"
                name="email"
                value={values.email}
                placeholder="Enter your email"
                onChange={handleChange}
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
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}              
              <label htmlFor="password" className={style.formLabel}>
                Confirm password 
              </label>
              <input
                required
                type="password"
                name="password2"
                placeholder="Confirm your password"
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}              
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