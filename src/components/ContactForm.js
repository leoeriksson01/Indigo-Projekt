import React from "react";
import style from "../components/ContactForm.css";


function ContactForm (props) {
    return (
        <div id={style.formContainer}>
            <form id={style.form}> 
                <h1>Get in touch! Send us a message below:</h1>
                <div id={style.formInputs}>
                    <label htmlFor="name" 
                    id={style.formLabel}>
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        id={style.formInput}
                        placeholder="Enter your name"
                    />
                </div>
                <div id={style.formInputs}>
                    <label htmlFor="email" 
                    id={style.formLabel}>
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        id={style.formInput}
                        placeholder="Enter your email"
                    />
                </div>
            </form>
        </div>
    )
}



export default ContactForm