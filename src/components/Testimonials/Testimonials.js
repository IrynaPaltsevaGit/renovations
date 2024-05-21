import React from 'react'
import Testimonial from '../Testimonial/Testimonial';
import "./Testimonials.scss";
import Section from '../Section/Section';

export default function Testimonials({scrollTop}) {
    const testimonials = [
        {
            "username": "Iryna Paltseva",
            "text": "Perfect work",
            "date": "May 11, 2024"
        },
        {
            "username": "Oleksandr",
            "text": "Lorem ipsum dolor sit amet consectetur.",
            "date": "Feb 21, 2024"
        },
        {
            "username": "Nancy",
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem aperiam reiciendis provident maiores nemo earum fugiat debitis vitae? Vitae.",
            "date": "Sep 08, 2024"
        },
    ];
  return (
    <Section classes="testimonials" scrollTop={scrollTop}>
        <h2 className='testimonials__title'>
            Testimonials
        </h2>
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
        <a className='testimonials__link' href="#">
            Leave us a review
        </a>
    </Section>
  )
}
