import React from "react";
import style from "./ContactForm.module.css";
import useForm from "./useForm";
import validate from "./validateForm";

function ContactForm({ submitForm }) {
	const { handleChange, values, handleSubmit, errors } = useForm(
		submitForm,
		validate
	);

	return (
		<div id={style.formContainer}>
			<form id={style.contactForm} onSubmit={handleSubmit}>
				<h1 id={style.contactHeading}>
					Get in touch! Send us a message below:
				</h1>
				<div id={style.formInputs}>
					<label htmlFor="username" id={style.formLabel}>
						Name:
					</label>
					<input
						type="text"
						name="username"
						id={style.formInput}
						placeholder="Enter your name"
						value={values.username}
						onChange={handleChange}
					/>
					{errors.username && <p>{errors.username}</p>}
				</div>
				<div id={style.formInputs}>
					<label htmlFor="email" id={style.formLabel}>
						Email:
					</label>
					<input
						type="email"
						name="email"
						id={style.formInput}
						placeholder="Enter your email"
						value={values.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div id={style.formInputs}>
					<label htmlFor="message" id={style.formLabel}>
						Message:
					</label>
					<textarea
						type="textarea"
						name="message"
						id={style.formInputMessage}
						placeholder="Enter your message"
						value={values.message}
						onChange={handleChange}
					/>
					{errors.message && <p>{errors.message}</p>}
				</div>
				<br></br>
				<button id={style.formInputBtn} type="submit">
					Send message
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
