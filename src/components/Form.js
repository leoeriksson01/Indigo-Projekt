import React, { useState } from "react";
import ContactForm from "./ContactForm";
import FormSuccess from "./FormSuccess";
import style from "../components/ContactForm.module.css";
import contactUs from "../assets/email-us.svg";


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
    return (
      <>
        <div className='form-container'>
          <span className='close-btn'>×</span>
          <div className='form-content-left'>
            <img id={style.formImage} src={contactUs} alt='Email icon.' />
          </div>
          {!isSubmitted ? (
            <ContactForm submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </>
    );
  };
  
  export default Form;
