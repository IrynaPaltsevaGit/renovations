import React from 'react'
import  './TopMenu.scss';
import MenuItem from '../MenuItem/MenuItem';
import menuItems from "../../helpers/menuItems";

export default function TopMenu() {

    return (
        <nav className='nav'>
            <ul className='menu'>
                {
                    menuItems.map((menuItem, index) => {                
                        return (
                            <MenuItem 
                                key={`menuItem-${index}`} 
                                href={menuItem.href} 
                                subItems={menuItem.subItems}>
                                {menuItem.text}
                            </MenuItem>
                        )
                    }) 
                }          
            </ul>
        </nav>
    )
}
