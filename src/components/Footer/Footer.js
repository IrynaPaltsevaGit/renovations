import React from 'react';
import "./Footer.scss";
import ContactInfo from "../ContactInfo/ContactInfo.js";
import logo from '../../assets/images/logo/logo.jpg';

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__columns'>
            <div className='footer__col'>
                <div className='footer__logo-wrap'>
                    <img src={logo} className='footer__logo' />
                </div>
            </div>
            <div className='footer__col'>
                <ContactInfo />
            </div>
            <div className='footer__col'>
                <h2 className='footer__title'>
                    Quick Links
                </h2>
                <p className='footer__text'>
                   <a href="#" className='footer__page-link'>
                        Gallery
                    </a> 
                </p>
                
            </div>
            <div className='footer__col'>
                <h2 className='footer__title'>
                    Service Area
                </h2>
                <p className='footer__text'>
                    Toronto GTA, Mississauga, Etobicoke, Brampton, Oakville, 
                    Richmond Hill, Milton, Vaughan, and Markham
                </p>
            </div>
        </div>
    </footer>
  )
}

