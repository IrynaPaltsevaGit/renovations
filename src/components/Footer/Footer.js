import React from 'react';
import "./Footer.scss";
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
                <h2 className='footer__title'>
                    Contact Us
                </h2>
                <h4 className="footer__subhead">
                    Email
                </h4>
                <p className='footer__text'>
                    <a className="footer__link" href="mailto:alex@gmail.com">
                        alex@gmail.com
                    </a> 
                </p>
                <h4 className="footer__subhead">
                    Phone
                </h4>
                <p className='footer__text'>
                    <a className='footer__link' href="tel:333-333-33-33">
                        333-333-33-33
                    </a>  
                </p>
                <h4 className="footer__subhead">
                    Business Hours
                </h4>
                <p className='footer__text'>
                    Mon-Fri 09.00 am - 05.00 pm
                </p>
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

