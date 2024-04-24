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
        <div className='buttons'>
            <div className='buttons__call'>
              Call Us
            </div>
            <div className='buttons__quote'>Get a Free Quote</div>
        </div>
    </div>
  )
}
{/* <script src="https://kit.fontawesome.com/33c302c09d.js" crossorigin="anonymous"></script> */}
