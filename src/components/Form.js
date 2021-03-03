import React, { useState } from "react";
import ContactForm from "./ContactForm";
import FormSuccess from "./FormSuccess";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? ( 
            <ContactForm submitForm={submitForm}/>) : (  
            <FormSuccess/>)}
        </div>

    );
};

export default Form;