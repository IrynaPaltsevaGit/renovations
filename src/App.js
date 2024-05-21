import './App.scss';
import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Hero from './components/Hero/Hero';
import WorkDescription from './components/WorkDescription/WorkDescription';
import Advantages from './components/Advantages/Advantages';
import Services from './components/Services/Services';
import YourChoice from './components/YourChoice/YourChoice';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
	const [showMenu, setShowMenu] = useState(false);
	const [showOverlay, setShowOverlay] = useState(false);
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		  };
	},[]);

	function handleScroll(event) {
		const scrollTopValue = document.documentElement.scrollTop;
	    setScrollTop(scrollTopValue);
	}

	return (
		<div>
			<Header setShowMenu={() => {
				setShowMenu(!showMenu);
				setShowOverlay(!showMenu);
			}} 
			 showMenu={showMenu}/>
			<main className='main'>
				<MobileMenu showMenu={showMenu} />
				<Hero />
				<WorkDescription scrollTop={scrollTop} />
				<Advantages scrollTop={scrollTop}  />
				<Services scrollTop={scrollTop}  />
				<YourChoice scrollTop={scrollTop}  />
				<Testimonials scrollTop={scrollTop}  />
				<Footer />
			</main>


			<div className={`overlay ${showOverlay ? "active" : ""}`} 
				onClick={() => {
					setShowMenu(false);
					setShowOverlay(false);
				}}
			/>
		</div>
	);
}

export default App;
