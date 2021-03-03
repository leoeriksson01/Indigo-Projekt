import React from "react";
import style from "../components/ContactForm.css";
import useForm from "./useForm"


function ContactForm (props) {
    const {handleChange, values, handleSubmit} = useForm();

    return (
        <div id={style.formContainer}>
            <form id={style.form} onSubmit={handleSubmit}> 
                <h1>Get in touch! Send us a message below:</h1>
                <div id={style.formInputs}>
                    <label htmlFor="username" 
                    id={style.formLabel}>Name: 
                    </label>
                    <input 
                        type="text" 
                        name="username" 
                        id={style.formInput}
                        placeholder="Enter your name"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                <div id={style.formInputs}>
                    <label htmlFor="email" 
                    id={style.formLabel}>Email: 
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        id={style.formInput}
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div id={style.formInputs}>
                    <label htmlFor="message" 
                    id={style.formLabel}>Message: 
                    </label>
                    <input 
                        type="textarea" 
                        name="message" 
                        id={style.formInput}
                        placeholder="Enter your message"
                        value={values.message}
                        onChange={handleChange}
                    />
                </div>
                <button id={style.formInputBtn} type="submit">
                    Send message
                </button>
            </form>
        </div>
    )
}



export default ContactForm