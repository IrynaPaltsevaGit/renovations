import React, { useState } from 'react';
import "./ContactForm.scss";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const [displaySpinner, setDisplaySpinner] = useState(false);
    const [displayInfo, setDisplayInfo] = useState(false);
    const [displayError, setDisplayError] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    function handleClick() {
		const publicKey = "xZv-9_iBFdzq2EF4X";
		let result = emailjs.init({
			publicKey,
		});
		
		console.log(result)	
	}

	function sendEmail(e) {
        e.preventDefault();
        setFirstNameError("");
        setLastNameError("");
        setPhoneError("");
        setEmailError("");
        setDisplaySpinner(true);
        setDisplayInfo(false);
        setDisplayError(false);
        if (message && email && firstName && lastName && phone) {
            const publicKey = "xZv-9_iBFdzq2EF4X";
            // "The template ID not found. To find this ID, visit https://dashboard.emailjs.com/admin/templates"
            let serviceID = "service_jcuayzk";
            let templateID = "template_s9jmljn";
            let templateParams = {
                to_name: "Iryna",
                from_name: "Oleksandr",
                message,
                email,
                first_name: firstName,
                last_name: lastName,
                phone
            }
            emailjs.send(serviceID, templateID, templateParams, {
                publicKey,
            })
            .then(
                (response) => {
                    setEmail("");
                    setFirstName("");
                    setLastName("");
                    setPhone("");
                    setMessage("");
                    setDisplaySpinner(false);
                    setDisplayInfo(true);
                    setTimeout(() => setDisplayInfo(false), 5000);
                    console.log(response)
                    console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                    setDisplaySpinner(false);
                    setDisplayError(true);
                    console.log('FAILED...', error);
                },
            );
        }
        else {
            if (!firstName) {
                setFirstNameError("First Name field can't be empty!")
            }else if (firstName.length < 3) {
                setFirstNameError("First Name should be at least 3 characters");
            }
            if (!lastName) {
                setLastNameError("Last Name field can't be empty!")
            }else if (lastName.length < 3) {
                setLastNameError("Last Name should be at least 3 characters");
            }
            if (!phone) {
                setPhoneError("Phone field can't be empty!")
            }else {
                let regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
                if (!phone.match(regex)) {
                    setPhoneError('Please enter a valid phone number. Example: +1 123-456-7890 or +1 123 456 7890');
                }
            }
            if (!email) {
                setEmailError("Email field can't be empty!")
            }else if (email.length < 3) {
                setEmailError("Email should be at least 3 characters");
            }
            setDisplaySpinner(false);
            setDisplayError(true);
        }
	}

    return (
        <form className='hero__form' onSubmit={sendEmail}>
            <h2 className='hero__form-title'>
                Get a Free Quote
            </h2>
            <label className="hero__label">
                <span className='hero__label-text'>
                    First Name:
                </span>
                <input className='hero__input' name='first_name' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                <span className='hero__input-error'>
                    {firstNameError}
                </span>
            </label>
            <label className="hero__label">
                <span className='hero__label-text'>
                    Last Name:
                </span>
                <input className='hero__input' name='last_name' value={lastName} onChange={(event) => setLastName(event.target.value)} />
                <span className='hero__input-error'>
                    {lastNameError}
                </span>
            </label>
            <label className="hero__label">
                <span className='hero__label-text'>
                    Phone:
                </span>
                <input className='hero__input' name='phone' value={phone} onChange={(event) => setPhone(event.target.value)} />
                <span className='hero__input-error'>
                    {phoneError}
                </span>
            </label>
            <label className="hero__label">
                <span className='hero__label-text'>
                    Email:
                </span>
                <input className='hero__input' name='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                <span className='hero__input-error'>
                    {emailError}
                </span>
            </label>
            <label className="hero__label hero__label--full">
                <span className='hero__label-text'>
                    Message:
                </span>
                <textarea className='hero__input hero__textarea' 
                    value={message} name='message' 
                    onChange={(event) => setMessage(event.target.value)} />
            </label>
            <p style={{display: displayInfo ? "block" : "none"}}className='hero__submit-message hero__submit-message--info'>
                Request was sent succesfully!
            </p>
            <p style={{display: displayError ? "block" : "none"}} className='hero__submit-message hero__submit-message--error'>
                Failed to send request.
            </p>
            <div className="hero__submit-wrap">
                <button className="hero__submit" type="submit">
                    Send Message
                </button>
                <span className="loader" style={{"display": displaySpinner ? "block" : "none"}}></span>
            </div>
            
        </form>
    )
}
