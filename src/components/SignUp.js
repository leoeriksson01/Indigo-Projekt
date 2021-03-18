import React from 'react';
import style from '../css/SignUp.module.css'

const SignUp = () => {
  return (
    <div id={style.SignUpWrapper}>
        <form id={style.signUpForm}> 
            <h1 id={style.signUpHeading}>Sign Up and get your car today:</h1>
            <div id={style.signUpInputs}>
                <label htmlFor="username" 
                id={style.signUpLabel}>Name: 
                </label>
                <input 
                    type="text" 
                    name="username" 
                    id={style.signUpInput}
                    placeholder="Enter your name"
                    value={values.username}
                />
                {/*errors.username && <p>{errors.username}</p>*/}
            </div>
            <div id={style.signUpInputs}>
                <label htmlFor="email" 
                id={style.signUpLabel}>Email: 
                </label>
                <input 
                    type="email" 
                    name="email" 
                    id={style.signUpInput}
                    placeholder="Enter your email"
                    value={values.email}
                />
                {/*errors.email && <p>{errors.email}</p>*/}
            </div>
            <div id={style.signUpInputs}>
                <label htmlFor="pass" 
                id={style.signUpLabel}>Password: 
                </label>
                <textarea 
                    type="password" 
                    name="password" 
                    id={style.signUpInput}
                    placeholder="Enter password here (8 characters minimum)"
                    value={values.message}
                />
                {/*errors.password && <p>{errors.password}</p>*/}
            </div>
            <br></br>
            <button id={style.signUpBtn} type="submit">
                Sign Up
            </button>
        </form>
    </div>
  );
}

export default SignUp;