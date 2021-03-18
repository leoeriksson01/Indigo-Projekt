import React, {useState} from 'react';
import style from '../css/SignUp.module.css'

const SignUp = ({showSignUp, setShowSignUp}) => {

  return (
    <div id={style.SignUpWrapper}>
     {showSignUp ? <div>Modal</div> : null}
    </div>
  );
}

export default SignUp;