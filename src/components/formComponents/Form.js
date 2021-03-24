import React, { useState } from "react";
import ContactForm from "./ContactForm";
import FormSuccess from "./FormSuccess";

const Form = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	return (
		<div className="form-container">
			{!isSubmitted ? (
				<ContactForm submit={() => setIsSubmitted(true)} />
			) : (
				<FormSuccess />
			)}
		</div>
	);
};

export default Form;
