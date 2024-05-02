import React from 'react';
import './MobileMenu.scss';
import menuItems from "../../helpers/menuItems";

export default function MobileMenu() {
  return (
    <div className='mobile-nav'>
        <div className='mobile-nav__wrap'>
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
    </div>
  )
}
