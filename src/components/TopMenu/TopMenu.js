import React from 'react'
import  './TopMenu.scss';
import MenuItem from '../MenuItem/MenuItem';

export default function TopMenu() {
    let menuItems = [
        {
            href: '#', 
            text: 'About us'
        },
        {
            href: '#', 
            text: 'Services',
            subItems: [
                {
                    href: '#', 
                    text: 'Interior Painting',
                },
                {
                    href: '#', 
                    text: 'Exterior Painting',
                },
            ]
        },
        {
            href: '#', 
            text: 'Resources'
        },
        {
            href: '#', 
            text: 'Contact'
        },
    ];

  return (
    <div>
    <ul className='menu'>
        {
            menuItems.map((menuItem, index) => {                
                return (
                    <MenuItem key={`menuItem-${index}`} href={menuItem.href} subItems={menuItem.subItems}>
                        {menuItem.text}
                    </MenuItem>
                )
            }) 
        }          
       
    </ul>
    </div>
  )
}
