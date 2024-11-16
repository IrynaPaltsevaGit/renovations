import React, { useEffect, useState } from 'react';
import "./Hero.scss";
import Divider from "../Divider/Divider";
import ContactForm from '../ContactForm/ContactForm';

export default function Hero() {
	const [isHeroVisible, setIsHeroVisible] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setIsHeroVisible(true);
		}, 1);
	}, []);

	return (
		<section className='hero'>
			<div className={`hero__columns ${isHeroVisible ? "active" : ""}`}>
				<div className='hero__col'>
					<h2 className='hero__subhead'>
						CRAFTING LASTING IMPRESSIONS
					</h2>
					<h1 className='hero__title'>
						AVL PAINTING & RENOVATIONS
					</h1>
					<Divider classes='hero__divider' />

					<p className='hero__text'>
					Welcome to AVL Painting & Renovations. Enter a realm where precision meets excellence. 
					Seamlessly navigate through transformative 
					ser
					vices and projects, placing trust in our unwavering commitment to perfection.
					</p>
				</div>
				<div className='hero__col'>
					<ContactForm />
				</div>
			</div>
		</section>
	)
}
