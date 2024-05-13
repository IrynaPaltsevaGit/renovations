import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default function Testimonial({testimonial}) {
  return (
    <div>
        <FontAwesomeIcon icon={ faUser } />
        <h6>
            { testimonial.date }
        </h6>
        <h5>
            { testimonial.username }
        </h5>
        <p>
            {testimonial.text }
        </p>
    </div>
  )
}
