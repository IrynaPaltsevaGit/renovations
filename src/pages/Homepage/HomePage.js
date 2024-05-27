import React from 'react';
import Hero from '../../components/Hero/Hero';
import WorkDescription from '../../components/WorkDescription/WorkDescription';
import Advantages from '../../components/Advantages/Advantages';
import Services from '../../components/Services/Services';
import YourChoice from '../../components/YourChoice/YourChoice';
import Testimonials from '../../components/Testimonials/Testimonials';

export default function Homepage({scrollTop}) {
  return (
    <>
        <Hero />
        <WorkDescription scrollTop={scrollTop} />
        <Advantages scrollTop={scrollTop}  />
        <Services scrollTop={scrollTop}  />
        <YourChoice scrollTop={scrollTop}  />
        <Testimonials scrollTop={scrollTop}  />
    </>
  )
}

