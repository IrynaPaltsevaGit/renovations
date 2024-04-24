import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function MenuItem(props) {
    let {children, href, subItems} = props;

    return (    
        <li className='menu_item'>
            <a href={href}>
                {children}        
                <FontAwesomeIcon icon={faAngleDown} />
                <FontAwesomeIcon icon={faAngleUp} />
            </a>
            {
                subItems 
                ?
                <ul>
                    {
                    subItems.map((subItem, index)=>{
                        return (
                            <li key={`subItem-${index}`} href={subItem.href}>
                                {subItem.text}
                            </li>
                        )
                    })
                    }
                </ul> 
                : null 
            }
        </li>   
    )
}
