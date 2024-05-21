import React from 'react';
import "./WorkDescription.scss";
import Section from "../Section/Section";

export default function WorkDescription({scrollTop}) {
    
  return (
    <Section classes="description" scrollTop={scrollTop}>
        <div className='description__columns'>
            <div className='description__col'>
                <div className='description__img-wrap'>
                    <img className='description__img'
                        src="https://lirp.cdn-website.com/65d60e57/dms3rep/multi/opt/home_page_about+%281%29-397w.jpg"
                        alt="Top image" />
                </div>
                
            </div>
            <div className='description__col'>
                <h3 className='description__subhead'>
                    PAINTING DREAMS, BUILDING REALITIES
                </h3>
                <h2 className='description__title'>
                    AVL Painting & Renovations: Precision in Paint, Excellence in Craft
                </h2>
                <p className='description__text'>
                    AVL Painting & Renovations stands as a beacon of excellence in the realm 
                    of painting and renovation services, boasting an impressive 7-year legacy. 
                    <a href="#" className='description__link'>Our team of 5 dedicated professionals</a> 
                    brings a fresh and innovative perspective to the art of transforming spaces.
                </p>
                <p className='description__text'>
                    Specializing in aluminum siding, vinyl window painting, and 
                    commercial transformations, we pride ourselves on merging precision 
                    with creativity. Our commitment goes beyond mere surface enhancements; we 
                    focus on the distinctive details that elevate your space to new heights.
                </p>
                <p className='description__text'>
                    At AVL Painting & Renovations, we transcend the role of contractors 
                    and embrace that of craftsmen. With unparalleled expertise, we turn 
                    your visions into tangible reality. Our gallery is a testament to 
                    the transformative touch that sets us apart, showcasing why 
                    AVL Painting & Renovations is the preferred choice for those seeking 
                    not just a service but an immersive experience in craftsmanship and quality. 
                    <a href="#" className='description__link'>Explore our portfolio</a> 
                    and discover how we make every project a lasting masterpiece.
                </p>
                <a href="#" className='description__contact-link'>
                    Get A Free Quote
                </a>
            </div>
        </div>
    </Section>
  )
}

