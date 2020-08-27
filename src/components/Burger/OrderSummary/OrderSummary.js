import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
				{props.ingredients[igKey]}
			</li>
		);
	});

	return (
		<Aux>
			<h3>
				<i className='fas fa-hamburger'></i> Order Summary:
			</h3>
			<ul>{ingredientSummary}</ul>
			<p>Total: ${props.totalPrice}</p>
			<Button btnType='Danger' clicked={props.closed}>
				CANCEL
			</Button>

			<Button btnType='Success' clicked={props.continue}>
				CONTINUE
			</Button>
		</Aux>
	);
};

export default OrderSummary;
