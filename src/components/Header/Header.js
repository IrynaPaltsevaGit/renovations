import React from 'react'
import './Header.scss';
import TopMenu from '../TopMenu/TopMenu';
import logo from '../../assets/images/logo/logo.png';

export default function Header({ showMenu, setShowMenu }) {
  
  return (
    <header className='header'>
        <a className="header__logo" href="/" >
            <img className='header__img' src={logo} alt="logo" />
        </a>
        <TopMenu/>
        <div className='header__links'>
            <a href="tel:4444444444" className='header__link header__link--call'>
                Call Us
            </a>
        <a style={{ "display": "none" }} href="#" className='header__link header__link--quote'>
               Get a Free Quote
            </a>
        </div>
        <div className={`header__burger ${showMenu ? "active" : ""}`} onClick={setShowMenu}>
			<div className='header__burger-line'></div>
			<div className='header__burger-line'></div>
			<div className='header__burger-line'></div>
        </div>
    </header>
  )
}
