import React from 'react';
import Section from '../../components/Section/Section';
import "./InteriorPainting.scss";

export default function InteriorPainting({scrollTop}) {
  return (
    <Section scrollTop={scrollTop} useAnimationEffect={false} classes='hero'>
        <h1 className='hero__title'>
            Interior Painting Services
        </h1>
        <h2 className='hero__subhead'>
            Transform your space with our professional interior painting services!
        </h2>
        <p className='hero__text'>
            At our company, we understand that the right colors and finishes 
            can dramatically enhance the ambiance of your home or office. 
            Our skilled team of painters is dedicated to delivering 
            top-quality workmanship and exceptional customer service.
        </p>
        <h2 className='hero__subhead'>
            Why Choose Us?
        </h2>
        <p className='hero__text'>
            Expert Craftsmanship: Our experienced painters use the 
            latest techniques and high-quality materials to ensure a 
            flawless finish. We pay attention to every detail, from prep work to the final coat.
        </p>
        <h2 className='hero__subhead--secondary'>
            Customized Solutions
        </h2>
        <p className='hero__text'>
            Whether you’re looking to refresh a single room 
            or repaint your entire property, we offer tailored solutions to meet your 
            specific needs and style preferences.
        </p>
        <h2 className='hero__subhead--secondary'>
            Color Consultation
        </h2>
        <p className='hero__text'>
            Not sure what colors to choose? Our color consultants are here 
            to help you select the perfect palette that 
            complements your space and reflects your personality.
        </p>
        <h2 className='hero__subhead--secondary'>
            Clean and Efficient
        </h2>
        <p className='hero__text'>
            We respect your home and workspace, ensuring that our team 
            works efficiently and maintains a clean environment throughout the project.
        </p>
        <h2 className='hero__subhead'>
            Our Process
        </h2>
        <h2 className='hero__subhead--secondary'>
            Consultation
        </h2>
        <p className='hero__text'>
            We start with a detailed consultation to discuss your vision, preferences, and budget.
        </p>
        <h2 className='hero__subhead--secondary'>
            Preparation
        </h2>
        <p className='hero__text'>
            Our team meticulously prepares the area by protecting furniture, flooring, and other surfaces, ensuring a clean workspace.
        </p>
        <h2 className='hero__subhead--secondary'>
            Painting
        </h2>
        <p className='hero__text'>
            We use high-quality paints and finishes to deliver 
            a stunning and durable result. Our painters work with precision and care.
        </p>
        <h2 className='hero__subhead--secondary'>
            Final Inspection
        </h2>
        <p className='hero__text'>
            After completing the job, we conduct a thorough inspection 
            to ensure everything meets our high standards and your satisfaction.
        </p>

        <h2 className='hero__subhead'>
            Get Started Today!
        </h2>
        <p className='hero__text'>
            Ready to elevate your interiors? Contact us today for a 
            free estimate! Let us help you create beautiful 
            spaces that you’ll love for years to come.
        </p>

    </Section>
  )
}
