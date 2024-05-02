import React from 'react'
import './Header.scss';
import TopMenu from '../TopMenu/TopMenu';
import logo from '../../assets/images/logo/logo.jpg';

export default function Header() {
  return (
    <div className='header'>
        <a className="header__logo" href="/" >
            <img className='header__img' src={logo} alt="logo" />
        </a>
        <TopMenu/>
        <div className='header__links'>
            <a href="#" className='header__link header__link--call'>
                Call Us
            </a>
            <a href="#" className='header__link header__link--quote'>
               Get a Free Quote
            </a>
        </div>
        <div className='header__burger'>
          <div className='header__burger-line'></div>
          <div className='header__burger-line'></div>
          <div className='header__burger-line'></div>
        </div>
    </div>
  )
}
