import './App.scss';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';

function App() {
	return (
			<div>
				<Header/>
				<main className='main'>
					<MobileMenu />
				</main>
			</div>
	);
}

export default App;
