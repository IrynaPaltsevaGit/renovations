import React from 'react';
import "./Hero.scss";
import Divider from "../Divider/Divider";
import HeroForm from '../HeroForm/HeroForm';

export default function Hero() {
  return (
    <section className='hero'>
        <div>
            <h2 className='hero__subhead'>
                CRAFTING LASTING IMPRESSIONS
            </h2>
            <h1 className='hero__title'>
                AVL PAINTING & RENOVATIONS
            </h1>
            <Divider />

            <p className='hero__text'>
              Welcome to AVL Painting & Renovations. Enter a realm where precision meets excellence. 
              Seamlessly navigate through transformative 
              services and projects, placing trust in our unwavering commitment to perfection.
            </p>

            <HeroForm />
        </div>
    </section>
    
  )
}
