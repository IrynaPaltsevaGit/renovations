import React from 'react';
import painting from "../../assets/images/painting.webp";
import "./YourChoice.scss";
import Section from '../Section/Section';

export default function YourChoice({scrollTop}) {
  return (
    <Section classes="choice" scrollTop={scrollTop}>
		<div className='choice__columns'>
			<div className='choice__col'>
				<img className='choice__img' src={painting} />
			</div>
			<div className='choice__col'>
				<h3 className='choice__subhead'>
					WHAT SETS US APART
				</h3>
				<h2 className='choice__title'>
					Why Opt for AVL Painting & Renovations
				</h2>
				<p className='choice__text'>
					Choose AVL Painting & Renovations for an unmatched commitment to 
					excellence. Our team ensures precision and meticulous craftsmanship 
					in every project, delivering personalized solutions tailored to your 
					unique needs. With a focus on transparency, clear communication, 
					and guaranteed satisfaction, we elevate spaces through enduring 
					quality and innovative solutions. From interior transformations 
					to exterior makeovers, AVL Painting & Renovations goes beyond 
					the ordinary to consistently deliver exceptional results—because 
					your space deserves the best, and we are dedicated to exceeding your expectations.
				</p>
				<a className="choice__link">
					Get a Free Quote
				</a>
			</div>
		</div>
    </Section>
  )
}
