import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App(props) {
	return (
		<div className='App'>
			<h1>Burger Builder</h1>
			<Layout>
				<BurgerBuilder />
			</Layout>
		</div>
	);
}

export default App;
