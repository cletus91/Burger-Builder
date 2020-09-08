import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/BurgerBuilder/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';

function App(props) {
	return (
		<div className='App'>
			<h1>Burger Builder</h1>
			<Layout>
				<Switch>
					<Route path='/checkout' component={Checkout} />
					<Route path='/' exact component={BurgerBuilder} />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
