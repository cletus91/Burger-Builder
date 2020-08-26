import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {
	return (
		<div className={classes.BuildControls}>
			<p>
				Total Price: <strong>${props.totalPrice}</strong>
			</p>
			{controls.map((ctrl) => (
				<BuildControl
					key={ctrl.label}
					label={ctrl.label}
					added={() => props.ingredientAdded(ctrl.type)}
					removed={() => props.ingredientRemoved(ctrl.type)}
					disable={props.disable[ctrl.type]}
					max={props.maximum[ctrl.type]}
					price={props.price[ctrl.type]}
				/>
			))}
			<button
				className={classes.OrderButton}
				disabled={!props.purchaseable}
				onClick={props.order}>
				SUBMIT ORDER
			</button>
		</div>
	);
};

export default BuildControls;
