import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const Checkout = (props) => {
	const [state, setState] = useState({
		ingredients: {
			salad: 1,
			meat: 2,
			cheese: 1,
			bacon: 0,
		},
	});

	useEffect(() => {
		const query = new URLSearchParams(props.location.search);
		const ingredients = {};
		for (let param of query.entries()) {
			ingredients[param[0]] = +param[1];
		}
		setState({ ingredients: ingredients });
	}, [props.location.search]);

	const checkoutContinuedHandler = () => {
		props.history.replace('/checkout/contact-data');
	};

	const checkoutCanceledHandler = () => {
		props.history.goBack();
	};

	return (
		<div>
			<CheckoutSummary
				ingredients={state.ingredients}
				checkoutContinued={checkoutContinuedHandler}
				checkoutCanceled={checkoutCanceledHandler}
			/>
			<Route path={`${props.match.path}'/contact-data'`} component={ContactData} />
		</div>
	);
};

export default Checkout;
