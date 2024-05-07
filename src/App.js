import './App.scss';
import { useState } from "react";
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Hero from './components/Hero/Hero';

function App() {
	const [showMenu, setShowMenu] = useState(false);
	const [showOverlay, setShowOverlay] = useState(false);
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
