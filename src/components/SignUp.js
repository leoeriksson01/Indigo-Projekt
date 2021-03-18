import React, {useState} from 'react';
import style from '../css/SignUp.module.css'

const SignUp = () => {
    const [SignUpOpen, SignUpClosed] = useState(false);
  return (
    <div id={style.SignUpWrapper}>
        <button>Click me</button>
    </div>
  );
}

export default SignUp;