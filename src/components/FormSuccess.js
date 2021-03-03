import React from "react";
import emailSent from "../assets/sent-email.png";

const FormSuccess = () => {
    return (
        <div id={formContentRight}>
            <div id={success}>
                We have received your message and will get back to you soon!
            </div>
            <img src={emailSent} alt="test image" id={formImage} />
        </div>
    )
}

export default FormSuccess; 