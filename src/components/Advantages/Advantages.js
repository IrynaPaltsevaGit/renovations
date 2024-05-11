import React from 'react';
import Divider from "../Divider/Divider";
import "./Advantages.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faPaintRoller } from '@fortawesome/free-solid-svg-icons';

export default function Advantages() {
	const dividerStyles = {marginBottom: "3rem"};
	return (
		<section className='advantages'>
			<h3 className='advantages__subhead'>
				GUIDING EXCELLENCE, BUILDING TRUST
			</h3>
			<div>
				<h2 className='advantages__title'>
					OUR ADVANTAGES
				</h2>
				<Divider isFullWidth={true} />
			</div>
			<div className='advantages__columns'>
				<div className='advantages__col'>
					<div className='advantages__icon-wrap'>
						<FontAwesomeIcon icon={faMedal} className='advantages__icon' />
					</div>
					<h3 className='advantages__col-title'>
						HIGH-QUALITY PRODUCTS
					</h3>
					<Divider isBlack={true} styles={{...dividerStyles}} />
					<p className='advantages__col-text'>
						High-quality paints and coatings are formulated to withstand the 
						elements, ensuring a longer lifespan for the painted surfaces. 
						This is especially crucial for exterior painting where 
						exposure to weather conditions can be harsh.
					</p>
				</div>
				<div className='advantages__col'>
					<div className='advantages__icon-wrap'>
						<FontAwesomeIcon icon={faPaintRoller} className='advantages__icon' />
					</div>
					<h3 className='advantages__col-title'>
						SPRAY PAINTING APPLICATION
					</h3>
					<Divider isBlack={true} styles={{...dividerStyles}} />
					<p className='advantages__col-text'>
						The fine mist created by spray painting results in a smooth 
						and flawless finish, free from brush marks or roller stippling. 
						This is especially noticeable on surfaces like 
						vinyl windows, kitchen cabinets, and more.
					</p>
				</div>
				<div className='advantages__col'>
					<div className='advantages__icon-wrap'>
						<FontAwesomeIcon icon={faMedal} className='advantages__icon' />
					</div>
					<h3 className='advantages__col-title'>
						FACTORY FINISH RESULT
					</h3>
					<Divider isBlack={true} styles={{...dividerStyles}} />
					<p className='advantages__col-text'>
						Factory Finish for your painting needs not only guarantees 
						a flawless, brand-new look but also ensures significant cost 
						savings. Achieve the same high-end finish and embrace 
						cost-effective excellence without the hefty price tag.
					</p>
				</div>
			</div>
			<a href="#" className='advantages__about-us'>
				About Us
			</a>
			
		</section>
	)
}

