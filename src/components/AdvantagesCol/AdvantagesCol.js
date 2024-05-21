import React from 'react';
import Divider from "../Divider/Divider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AdvantagesCol({icon, title, text}) {
    const dividerStyles = {marginBottom: "3rem"};
    return (
        <div className='advantages__col'>
            <div className='advantages__icon-wrap'>
                <FontAwesomeIcon icon={icon} className='advantages__icon' />
            </div>
            <h3 className='advantages__col-title'>
                {title}
            </h3>
            <Divider isBlack={true} styles={{...dividerStyles}} classes='advantages__col-divider' />
            <p className='advantages__col-text'>
                {text}
            </p>
        </div>
    )
}

