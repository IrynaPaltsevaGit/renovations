import React from 'react';
import Section from '../../components/Section/Section';
import ContactForm from '../../components/ContactForm/ContactForm';
import "./ContactUs.scss";
import ContactInfo from '../../components/ContactInfo/ContactInfo';

export default function ContactUs({scrollTop}) {
  return (
    <Section scrollTop={scrollTop} classes='contact__section'>
        <div className='contact__columns'>
            <div className='contact__col'>
                <ContactInfo />
            </div>
            <div className='contact__col'>
                <ContactForm />
            </div>
        </div>
    </Section>
  )
}
