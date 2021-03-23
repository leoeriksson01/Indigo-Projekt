import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import ContactForm from "./ContactForm";
import FormSuccess from "./FormSuccess";

const Form = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [message, setMessage] = useState("");
	const { isLoggedIn, setUser } = useContext(UserContext);

	function submitForm(values) {
		if (isLoggedIn()) {
			setUser(user => ({
				...user,
				messages: [...(user?.messages ?? []), values.message],
			}));
		}
		setIsSubmitted(true);
	}
	return (
		<div className="form-container">
			{!isSubmitted ? (
				<ContactForm
					message={message}
					setMessage={setMessage}
					submitForm={submitForm}
				/>
			) : (
				<FormSuccess />
			)}
		</div>
	);
};

export default Form;
