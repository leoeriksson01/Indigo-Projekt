import React, { useState } from "react";
import ContactForm from "./ContactForm";
import FormSuccess from "./FormSuccess";
import style from "../components/ContactForm.module.css";
import contactUs from "../assets/email-us.svg";


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm(){
        setIsSubmitted(true);
    }
    return (
        <>
            <div id={style.formContainer}>
                <div id={style.formContentLeft}>
                    <img id={style.formImage} src={contactUs} alt='Email icon.' />
                </div>
                {!isSubmitted ? 
                    (<ContactForm submitForm={submitForm}/>) : 
                    (<FormSuccess/>)
                }
            </div>   
        </>
    );
};

export default Form;