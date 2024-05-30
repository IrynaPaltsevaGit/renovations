import React, { useState } from 'react';
import "./HeroForm.scss";
import emailjs from "@emailjs/browser";

export default function HeroForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [note, setNote] = useState("");

    function handleClick() {
		const publicKey = "xZv-9_iBFdzq2EF4X";
		let result = emailjs.init({
			publicKey,
		});
		
		console.log(result)
		
	}
	function sendEmail(e) {
        e.preventDefault();
		const publicKey = "xZv-9_iBFdzq2EF4X";
		// "The template ID not found. To find this ID, visit https://dashboard.emailjs.com/admin/templates"
		let serviceID = "service_jcuayzk";
		let templateID = "template_s9jmljn";
		let templateParams = {
			to_name: "Iryna",
			from_name: "Oleksandr",
			message: "Some message",
            note,
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
				console.log(response)
			  console.log('SUCCESS!', response.status, response.text);
			},
			(error) => {
			  console.log('FAILED...', error);
			},
		  );;
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
            </label>
            <label className="hero__label">
                <span className='hero__label-text'>
                    Last Name:
                </span>
                <input className='hero__input' name='last_name' value={lastName} onChange={(event) => setLastName(event.target.value)} />
            </label>
            <label className="hero__label">
                <span className='hero__label-text'>
                    Phone:
                </span>
                <input className='hero__input' name='phone' value={phone} onChange={(event) => setPhone(event.target.value)} />
            </label>
            <label className="hero__label">
                <span className='hero__label-text'>
                    Email:
                </span>
                <input className='hero__input' name='email' value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <label className="hero__label">
                <span className='hero__label-text'>
                    Note:
                </span>
                <textarea className='hero__input' 
                    value={note} name='note' 
                    onChange={(event) => setNote(event.target.value)} />
            </label>
            <button className="hero__submit" type="submit">
                Send Message
            </button>
        </form>
    )
}
