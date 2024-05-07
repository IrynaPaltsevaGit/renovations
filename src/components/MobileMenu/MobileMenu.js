import React from 'react';
import './MobileMenu.scss';
import menuItems from "../../helpers/menuItems";

export default function MobileMenu({showMenu}) {
    
    return (
        <div className={`mobile-nav ${showMenu ? "active" : ""}`}>
            <div className='mobile-nav__menu-wrap'>
                <ul className='mobile-nav__menu'>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <li className='mobile-nav__item' key={`mobile-nav__item-${index}`}>
                                    <a href={item.href} className='mobile-nav__link' key={`mobile-nav__link-${index}`}>
                                        {item.text}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='mobile-nav__contact-info'>
                <h2>
                    GET IN TOUCH
                </h2>
                <a href="tel:(647) 571-4593">Call: (647) 571-4593</a>
                <a href="mailto:paintingavl@gmail.com">Email: paintingavl@gmail.com</a>
                <p>
                    Service Area: Toronto GTA, Mississauga, Etobicoke, 
                    Brampton, Oakville, Richmond Hill, Milton, Vaughan, and Markham
                </p>
                <h4>
                    Business Hours:
                </h4>
                <p>
                    Mon - Fri 9:00 am - 6:00 pm
                </p>
                <h4>
                    Closed:
                </h4>
                <p>
                    Sat - Sun 
                </p>
            </div>
        </div>
    )
}
