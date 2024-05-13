import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import "./Testimonial.scss";


export default function Testimonial({testimonial}) {
    const starArr = new Array(5).fill(0);

    return (
        <div className='testimonial'>
            <div className='testimonial__header'>
                

                <div className='testimonial__header-left'>
                    <h6 className='testimonial__date'>
                        { testimonial.date }
                    </h6>
                    <h5 className='testimonial__name'>
                        { testimonial.username }
                    </h5>
                </div>
                <div className='testimonial__header-right'>
                    <div className='testimonial__rate'>
                    {
                        starArr.map((item, ind) => {
                            return (
                                <FontAwesomeIcon icon={faStar} 
                                    className='testimonial__star' 
                                    key={`star-${ind}`} />
                            )
                        })
                    }
                    </div>
                </div>

            </div>
            
            <p className='testimonial__text'>
                { testimonial.text }
            </p>
            
        </div>
    )
}
