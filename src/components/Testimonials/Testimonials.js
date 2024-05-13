import React from 'react'
import Testimonial from '../Testimonial/Testimonial';

export default function Testimonials() {
    const testimonials = [
        {
            "username": "Nick",
            "text": "text",
            "date": "May 11, 2024"
        },
        {
            "username": "Nick1",
            "text": "text",
            "date": "Feb 21, 2024"
        },
        {
            "username": "Nick2",
            "text": "text",
            "date": "Sep 08, 2024"
        },
    ];
  return (
    <section className='testimonials'>
        <div className='testimonials-wrap'>
            {
                testimonials.map((testimonial, index) => {
                    return (
                        <Testimonial 
                            testimonial={testimonial} 
                            key={`testimonial-${index}`} 
                        />
                    )
                })
            }
        </div>
    </section>
  )
}
