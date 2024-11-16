import React from 'react';
import "./ContactInfo.scss";

export default function ContactInfo() {
  return (
    <>
        <h2 className='contact-info__title'>
            Contact Us
        </h2>
        <h4 className="contact-info__subhead">
            Email
        </h4>
        <p className='contact-info__text'>
            <a className="contact-info__link" href="mailto:alex@gmail.com">
                alex@gmail.com
            </a> 
        </p>
        <h4 className="contact-info__subhead">
            Phone
        </h4>
        <p className='contact-info__text'>
            <a className='contact-info__link' href="tel:333-333-33-33">
                333-333-33-33
            </a>  
        </p>
        <h4 className="contact-info__subhead">
            Business Hours
        </h4>
        <p className='contact-info__text'>
            Mon-Fri 09.00 am - 05.00 pm
        </p>
    </>
  )
}

