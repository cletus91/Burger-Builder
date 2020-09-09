import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../../../components/UI/Button/Button';
import Spinner from '../../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
import classes from './ContactData.module.css';

const ContactData = (props) => {
	const [state, setState] = useState({
		name: '',
		email: '',
		address: {
			street: '',
			zip: '',
		},
		loading: false,
	});

	const orderHandler = (event) => {
		event.preventDefault();
		setState(() => ({
			...state,
			loading: true,
		}));
		const order = {
			ingredients: props.ingredients,
			price: props.price,
			customer: {
				name: state,
				address: '100 Main St',
				zip: '00000',
			},
			email: state.email,
		};
		axios
			.post('https://burger-builder-64110.firebaseio.com/orders.json', order)
			.then((response) => {
				setState(() => ({ ...state, loading: true }));
				props.history.push('/');
			})
			.catch((error) => setState(() => ({ ...state, loading: true })));
	};

	let form = (
		<form className={classes.Form}>
			<input type='text' name='name' placeholder='Enter your name' />
			<input type='email' name='email' placeholder='Enter your email' />
			<input type='text' name='street' placeholder='Address' />
			<input type='number' name='zip' placeholder='Zipcode' />
			<Button btnType='Success' clicked={orderHandler}>
				ORDER NOW
			</Button>
		</form>
	);
	if (state.loading) {
		form = <Spinner />;
	}

	return (
		<div className={classes.ContactData}>
			<h4>Enter your Info</h4>
			{form}
		</div>
	);
};

export default withRouter(ContactData);
