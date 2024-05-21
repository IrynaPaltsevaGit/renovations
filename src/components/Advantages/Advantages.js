import React from 'react';
import Divider from "../Divider/Divider";
import "./Advantages.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faPaintRoller, faBrush } from '@fortawesome/free-solid-svg-icons';
import AdvantagesCol from '../AdvantagesCol/AdvantagesCol';
import Section from '../Section/Section';

export default function Advantages({scrollTop}) {
	const columns = [
		{
			title: "HIGH-QUALITY PRODUCTS",
			icon: faMedal,
			text: `High-quality paints and coatings are formulated to withstand the 
			elements, ensuring a longer lifespan for the painted surfaces. 
			This is especially crucial for exterior painting where 
			exposure to weather conditions can be harsh.`
		},
		{
			title: "SPRAY PAINTING APPLICATION",
			icon: faPaintRoller,
			text: `The fine mist created by spray painting results in a smooth 
			and flawless finish, free from brush marks or roller stippling. 
			This is especially noticeable on surfaces like 
			vinyl windows, kitchen cabinets, and more.`
		},
		{
			title: "FACTORY FINISH RESULT",
			icon: faBrush,
			text: `Factory Finish for your painting needs not only guarantees 
			a flawless, brand-new look but also ensures significant cost 
			savings. Achieve the same high-end finish and embrace 
			cost-effective excellence without the hefty price tag.`
		},
	]
	return (
		<Section classes="advantages" scrollTop={scrollTop}>
			
			<h3 className='advantages__subhead'>
				GUIDING EXCELLENCE, BUILDING TRUST
			</h3>
				
			<div className='advantages__header'>
				<h2 className='advantages__title'>
					OUR ADVANTAGES
				</h2>
				<Divider isFullWidth={true} classes="advantages__divider"  />
			</div>
			<div className='advantages__columns'>

				{
					columns.map((col, index) => {
						return (
						<AdvantagesCol key={`adv-col-${index}`} icon={col.icon} 
							text={col.text} title={col.title} />
						)
					})
				}
			</div>
			<a href="#" className='advantages__about-us'>
				About Us
			</a>
			
		</Section>
	)
}

