import './App.scss';
import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Homepage from './pages/Homepage/HomePage';
import Gallery from './pages/Gallery/Gallery';
import NotFound from './pages/NotFound/NotFound';
import ContactUs from './pages/ContactUs/ContactUs';
import InteriorPainting from './pages/InteriorPainting/InteriorPainting';
import ExteriorPainting from './pages/ExteriorPainting/ExteriorPainting';

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
			 <MobileMenu showMenu={showMenu} />
			<main className='main'>
				
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Homepage scrollTop={scrollTop} />} />
						<Route path="/gallery" element={<Gallery scrollTop={scrollTop} />} />
						<Route path="/interior-painting" element={<InteriorPainting scrollTop={scrollTop} />} />
						<Route path="/exterior-painting" element={<ExteriorPainting scrollTop={scrollTop} />} />
						<Route path="/contact-us" element={<ContactUs scrollTop={scrollTop} />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
				
			</main>
			<Footer />

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
