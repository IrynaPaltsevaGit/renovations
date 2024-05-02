import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function MenuItem(props) {
    let { children, href, subItems } = props;

    return (    
        <li className='menu__item'>
            <a href={href} className="menu__link">
                {children} 
                {
                subItems 
                ?
                <>
                    <FontAwesomeIcon icon={ faAngleDown } className="menu__angle menu__angle-down" />
                    {/* <FontAwesomeIcon icon={ faAngleUp } className="menu__angle menu__angle-up" /> */}
                </> 
                : null
                }       
                
            </a>
            {
                subItems 
                ?
                <ul className="menu__submenu">
                    {
                    subItems.map((subItem, index) => {
                        return (
                            <MenuItem key={`subItem-${index}`} className="menu__item"
                                href={subItem.href} subItems={subItem.subItems}>
                                {subItem.text}
                            </MenuItem>
                        )
                    })
                    }
                </ul> 
                : null 
            }
        </li>   
    )
}
