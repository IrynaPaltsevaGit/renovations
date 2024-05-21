import React from 'react'
import ServiceTile from '../ServiceTile/ServiceTile';
import Divider from "../Divider/Divider";
import "./Services.scss";
import Section from '../Section/Section';

export default function Services({scrollTop}) {
    const tiles = [
        {
            title: "INTERIOR RESIDENTIAL PAINTING",
            text: `We elevate living spaces with precision, adding vibrancy to every room. Our interior 
                residential painting brings a personalized touch, creating havens of comfort and style.`,
            href: ""
        },
        {
            title: "CONDOMINIUM PAINTING",
            text: `Transform your condo with our specialized painting services. We infuse modern aesthetics and
                     meticulous attention to detail, enhancing the overall appeal of your living space.`,
            href: ""
        },
        {
            title: "CUSTOM HOUSES PAINTING",
            text: `We turn houses into homes with custom painting services. 
                Tailored to your style, our expert team ensures a 
                unique, enduring finish for your dream residence.`,
            href: ""
        },
    ];
    return (
        <Section classes="services" scrollTop={scrollTop}>
            <h3 className='services__subhead'>
                ELEVATING INTERIORS, BEAUTIFYING EXTERIORS, AND BEYOND
            </h3>
            <div>
                <h2 className='services__title'>
                    Our Services
                </h2>
                <Divider isFullWidth={true} />
            </div>
            
            <div className='services__tiles'>
                {
                    tiles.map((tile, index) => {
                        return (
                            <ServiceTile key={`service-tile-${index}`} tile={tile} />
                        )
                    })
                }
            </div>
        </Section>
    )
}

