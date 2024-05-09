import React, { useState } from 'react';
import "./HeroForm.scss";

export default function HeroForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    return (
        <form className='hero__form'>
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
            <button className="hero__submit" type="submit">
                Send Message
            </button>
        </form>
    )
}
