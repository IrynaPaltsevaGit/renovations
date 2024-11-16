import React from 'react';
import Section from '../../components/Section/Section';
import "./ExteriorPainting.scss";

export default function ExteriorPainting({scrollTop}) {
    return (
        <Section scrollTop={scrollTop} useAnimationEffect={false} classes='hero'>
            <h1 className='hero__title'>
                Exterior Painting Services
            </h1>
            <p className='hero__text'>
                Enhance your property's curb appeal with our expert exterior painting services! 
                We are specialize in delivering high-quality exterior finishes that not only look stunning but also protect your home from the elements. 
                Our dedicated team is committed to ensuring your satisfaction from start to finish.
            </p>
            <h2 className='hero__subhead'>
                Why Choose Us?
            </h2>
            <p className='hero__text'>
                Professional Expertise: Our experienced painters 
                understand the challenges of exterior painting and utilize 
                the best practices to achieve a long-lasting, beautiful result.
            </p>
            <h2 className='hero__subhead--secondary'>
                Durable Materials
            </h2>
            <p className='hero__text'>
                We use top-quality, weather-resistant 
                paints designed to withstand harsh conditions, 
                ensuring your home stays vibrant and protected for years to come.
            </p>
            <h2 className='hero__subhead--secondary'>
                Personalized Approach
            </h2>
            <p className='hero__text'>
                We work closely with you to choose the perfect colors and finishes that 
                reflect your style and enhance your home’s architectural features.
            </p>
            <h2 className='hero__subhead--secondary'>
                Thorough Preparation
            </h2>
            <p className='hero__text'>
                Proper preparation is key to a successful paint job. We take the time to clean, scrape, 
                and prime surfaces as needed, guaranteeing a smooth and durable finish.
            </p>
            <h2 className='hero__subhead'>
                Our Process
            </h2>
            <h2 className='hero__subhead--secondary'>
                Initial Consultation
            </h2>
            <p className='hero__text'>
                We begin with a comprehensive 
                consultation to understand your vision, budget, and specific requirements.
            </p> 
            <h2 className='hero__subhead--secondary'>
                Surface Preparation
            </h2>
            <p className='hero__text'>
                Our team meticulously prepares the exterior surfaces, 
                addressing any repairs needed to ensure a solid foundation for painting.
            </p> 
            <h2 className='hero__subhead--secondary'>
                Painting
            </h2>
            <p className='hero__text'>
                We apply high-quality paints with care and precision, 
                ensuring even coverage and a flawless finish.
            </p> 
            <h2 className='hero__subhead--secondary'>
                Final Walkthrough
            </h2>
            <p className='hero__text'>
                After completing the project, we conduct a final 
                walkthrough with you to ensure every detail meets your expectations.
            </p> 
            <h2 className='hero__subhead--secondary'>
                Get Started Today!
            </h2>
            <p className='hero__text'>
                Don’t let your home’s exterior go unnoticed! Contact us 
                today for a free estimate and let us help you create a beautiful, 
                inviting exterior that makes a lasting impression.
            </p> 
        </Section>
      )
}
