import React, { useState } from "react";
import ContactForm from "./ContactForm";
import FormSuccess from "./FormSuccess";
import style from "../components/ContactForm.module.css";


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
    return (
      <>
        <div className='form-container'>
          <span className='close-btn'>×</span>
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
